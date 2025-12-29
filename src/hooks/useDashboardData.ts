import { useState, useEffect, useCallback } from 'react';
import { dashboardApi, DashboardUsersResponse, DashboardLogsResponse, DashboardThreatsResponse } from '@/lib/api';

interface UseDashboardDataReturn {
  users: DashboardUsersResponse | null;
  logs: DashboardLogsResponse | null;
  threats: DashboardThreatsResponse | null;
  isLoading: boolean;
  error: string | null;
  refresh: () => void;
}

export function useDashboardData(pollingInterval = 30000): UseDashboardDataReturn {
  const [users, setUsers] = useState<DashboardUsersResponse | null>(null);
  const [logs, setLogs] = useState<DashboardLogsResponse | null>(null);
  const [threats, setThreats] = useState<DashboardThreatsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setError(null);
      
      const [usersData, logsData, threatsData] = await Promise.all([
        dashboardApi.getUsers(),
        dashboardApi.getLogs(),
        dashboardApi.getThreats(),
      ]);

      setUsers(usersData);
      setLogs(logsData);
      setThreats(threatsData);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch dashboard data');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();

    // Set up polling
    const interval = setInterval(fetchData, pollingInterval);

    return () => clearInterval(interval);
  }, [fetchData, pollingInterval]);

  return {
    users,
    logs,
    threats,
    isLoading,
    error,
    refresh: fetchData,
  };
}

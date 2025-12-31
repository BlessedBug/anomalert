// API service layer for Flask backend integration
// Configure this to point to your EC2 Flask backend

// IMPORTANT: Set this to your Flask backend URL
// For production, this should be HTTPS to avoid mixed-content issues
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://13.61.232.203';

// Types for API responses
export interface User {
  username: string;
  ip: string;
  isOnline: boolean;
  lastUpdate: string;
}

export interface LogEntry {
  id: string;
  timestamp: string;
  content: string;
  filename: string;
}

export interface ThreatEntry {
  id: string;
  filename: string;
  content: string;
  timestamp: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  requiresTOTP?: boolean;
  sessionToken?: string;
}

export interface TOTPResponse {
  success: boolean;
  message: string;
  magicLinkSent?: boolean;
}

export interface MagicLinkResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: {
    email: string;
    name: string;
  };
}

export interface DashboardUsersResponse {
  users: User[];
  allOffline: boolean;
  onlineCount: number;
}

export interface DashboardLogsResponse {
  logs: LogEntry[];
  totalCount: number;
}

export interface DashboardThreatsResponse {
  threats: ThreatEntry[];
  threatCount: number;
}

// Helper for API calls with credentials
async function apiCall<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    credentials: 'include', // Important for session cookies
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `API error: ${response.status}`);
  }

  return response.json();
}

// Auth API
export const authApi = {
  login: async (email: string, password: string): Promise<LoginResponse> => {
    return apiCall('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  verifyTOTP: async (code: string): Promise<TOTPResponse> => {
    return apiCall('/api/verify-totp', {
      method: 'POST',
      body: JSON.stringify({ code }),
    });
  },

  verifyMagicLink: async (token: string): Promise<MagicLinkResponse> => {
    return apiCall('/api/magic-link', {
      method: 'POST',
      body: JSON.stringify({ token }),
    });
  },

  logout: async (): Promise<void> => {
    await apiCall('/api/logout', { method: 'POST' });
  },

  checkSession: async (): Promise<{ authenticated: boolean; user?: { email: string } }> => {
    return apiCall('/api/session');
  },
};

// Dashboard API
export const dashboardApi = {
  getUsers: async (): Promise<DashboardUsersResponse> => {
    return apiCall('/api/dashboard/users');
  },

  getLogs: async (): Promise<DashboardLogsResponse> => {
    return apiCall('/api/dashboard/logs');
  },

  getThreats: async (): Promise<DashboardThreatsResponse> => {
    return apiCall('/api/dashboard/threats');
  },
};

// Agent API
export const agentApi = {
  getDownloadUrl: (): string => {
    return `${API_BASE_URL}/api/agent/download`;
  },

  downloadAgent: async (): Promise<void> => {
    // Trigger download via hidden anchor
    const link = document.createElement('a');
    link.href = agentApi.getDownloadUrl();
    link.download = 'anomalert-agent.exe';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },
};

import { useState, useEffect, useRef } from 'react';
import { Users, AlertTriangle, FileText, RefreshCw } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useDashboardData } from '@/hooks/useDashboardData';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const { users, logs, threats, isLoading, error, refresh } = useDashboardData(30000);
  const logContainerRef = useRef<HTMLDivElement>(null);
  const threatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logs to bottom
  useEffect(() => {
    if (logContainerRef.current && logs?.logs) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const getSeverityFromContent = (content: string): string => {
    if (content.toLowerCase().includes('critical') || content.toLowerCase().includes('blocked')) {
      return 'CRITICAL';
    }
    if (content.toLowerCase().includes('error') || content.toLowerCase().includes('failed')) {
      return 'ERROR';
    }
    if (content.toLowerCase().includes('warning') || content.toLowerCase().includes('unusual')) {
      return 'WARNING';
    }
    return 'INFO';
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'CRITICAL':
        return 'text-red-400';
      case 'ERROR':
        return 'text-orange-400';
      case 'WARNING':
        return 'text-yellow-400';
      default:
        return 'text-muted-foreground';
    }
  };

  const getSeverityBg = (severity: string) => {
    switch (severity) {
      case 'CRITICAL':
        return 'bg-red-500/10 border-red-500/20';
      case 'ERROR':
        return 'bg-orange-500/10 border-orange-500/20';
      case 'WARNING':
        return 'bg-yellow-500/10 border-yellow-500/20';
      default:
        return 'bg-muted/50 border-border';
    }
  };

  if (error) {
    return (
      <div className="h-screen bg-background flex flex-col overflow-hidden">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-destructive mb-4">{error}</p>
            <Button onClick={refresh} variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              Retry
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      <Navbar />
      
      <div className="flex-1 pt-16 flex flex-col">
        {/* Top section - Users and Threats */}
        <div className="h-[40%] min-h-[40%] max-h-[40%] border-b border-border flex flex-shrink-0">
          {/* Users Status Section */}
          <div className="w-1/2 border-r border-border p-6 overflow-y-auto">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-primary" />
              <h2 className="font-semibold text-foreground">Active Users</h2>
              {isLoading && (
                <RefreshCw className="w-4 h-4 text-muted-foreground animate-spin" />
              )}
            </div>
            
            <div className="space-y-4">
              <div className="text-center py-4">
                <div className="text-5xl font-bold text-foreground mb-2">
                  {users?.onlineCount ?? 0}
                </div>
                <p className="text-sm text-muted-foreground">Currently Online</p>
              </div>

              {users?.allOffline ? (
                <div className="text-center py-4 text-muted-foreground">
                  All users are offline
                </div>
              ) : (
                <div className="space-y-2">
                  {users?.users.filter(u => u.isOnline).map((user, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between px-3 py-2 rounded bg-muted/50 border border-border"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-foreground font-medium">{user.username}</span>
                        <span className="text-muted-foreground">is online</span>
                      </div>
                      <span className="text-sm text-muted-foreground font-mono">
                        {user.ip}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
                <p>
                  This section displays endpoints currently reporting data. Each active user 
                  represents a machine with a running agent that has sent updates within the 
                  last six minutes.
                </p>
              </div>
            </div>
          </div>
          
          {/* Threats Found Section */}
          <div className="w-1/2 p-6 overflow-y-auto" ref={threatContainerRef}>
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              <h2 className="font-semibold text-foreground">Threats Found</h2>
            </div>
            
            <div className="space-y-4">
              <div className="text-center py-4">
                <div className="text-5xl font-bold text-destructive mb-2">
                  {threats?.threatCount ?? 0}
                </div>
                <p className="text-sm text-muted-foreground">Detected</p>
              </div>

              {threats?.threats && threats.threats.length > 0 ? (
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {threats.threats.map((threat, index) => (
                    <div 
                      key={threat.id || index}
                      className="p-3 rounded bg-destructive/10 border border-destructive/20"
                    >
                      <div className="text-xs text-muted-foreground mb-1 font-mono">
                        {threat.filename}
                      </div>
                      <pre className="text-sm text-foreground whitespace-pre-wrap font-mono">
                        {threat.content}
                      </pre>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-muted-foreground leading-relaxed">
                  <p>
                    Threats include events that exceeded severity thresholds based on 
                    behavioral analysis, such as unusual file access patterns, unauthorized 
                    device connections, or suspicious network activity.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* User Logs Section */}
        <div className="h-[60%] flex flex-col p-6">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-primary" />
            <h2 className="font-semibold text-foreground">User Logs</h2>
            <span className="text-xs text-muted-foreground ml-2">
              ({logs?.totalCount ?? 0} entries)
            </span>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={refresh}
              className="ml-auto"
              disabled={isLoading}
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground leading-relaxed mb-4">
            <p>
              Real-time events collected from all monitored endpoints. Each entry includes 
              timestamp, severity level, and descriptive message.
            </p>
          </div>
          
          <div 
            ref={logContainerRef}
            className="flex-1 bg-[hsl(220,16%,4%)] border border-border rounded-lg overflow-auto font-mono text-sm"
          >
            <div className="p-4 space-y-1">
              {isLoading && (!logs || logs.logs.length === 0) ? (
                <div className="text-muted-foreground text-center py-8">
                  Loading log data...
                </div>
              ) : logs?.logs && logs.logs.length > 0 ? (
                logs.logs.map((log, index) => {
                  const severity = getSeverityFromContent(log.content);
                  return (
                    <div 
                      key={log.id || index}
                      className={`px-3 py-1.5 rounded border ${getSeverityBg(severity)} flex items-start gap-4`}
                    >
                      <span className="text-muted-foreground flex-shrink-0 w-36">
                        {log.timestamp}
                      </span>
                      <span className={`flex-shrink-0 w-16 font-medium ${getSeverityColor(severity)}`}>
                        {severity}
                      </span>
                      <span className="text-foreground">
                        {log.content}
                      </span>
                    </div>
                  );
                })
              ) : (
                <div className="text-muted-foreground text-center py-8">
                  No log data available
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

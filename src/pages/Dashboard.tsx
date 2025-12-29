import { useState, useEffect, useRef } from 'react';
import { Users, AlertTriangle, FileText, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';

// Sample log data for simulation
const sampleLogs = [
  { severity: 'INFO', source: 'System', message: 'User authentication successful - admin@anomalert.local' },
  { severity: 'WARNING', source: 'FileMonitor', message: 'Unusual file access pattern detected in /Documents' },
  { severity: 'INFO', source: 'USB', message: 'USB device connected - Kingston DataTraveler' },
  { severity: 'CRITICAL', source: 'Anomaly', message: 'Potential data exfiltration attempt blocked' },
  { severity: 'INFO', source: 'Network', message: 'Outbound connection established to 192.168.1.100' },
  { severity: 'WARNING', source: 'Process', message: 'Uncommon process execution: powershell.exe with encoded command' },
  { severity: 'INFO', source: 'System', message: 'System health check completed - all services operational' },
  { severity: 'ERROR', source: 'Agent', message: 'Failed to collect logs from remote endpoint WS-0142' },
  { severity: 'INFO', source: 'FileMonitor', message: 'File created: C:\\Users\\admin\\Downloads\\report.pdf' },
  { severity: 'CRITICAL', source: 'Anomaly', message: 'Multiple failed login attempts from IP 10.0.0.55' },
  { severity: 'WARNING', source: 'USB', message: 'Unauthorized USB device blocked - policy violation' },
  { severity: 'INFO', source: 'System', message: 'Scheduled scan initiated on endpoint WS-0089' },
  { severity: 'INFO', source: 'Network', message: 'DNS query resolved: api.anomalert.local' },
  { severity: 'WARNING', source: 'Anomaly', message: 'Suspicious registry modification detected' },
  { severity: 'INFO', source: 'Agent', message: 'Agent heartbeat received from 15 endpoints' },
];

interface LogEntry {
  id: number;
  timestamp: string;
  severity: string;
  source: string;
  message: string;
}

const Dashboard = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [logIndex, setLogIndex] = useState(0);
  const logContainerRef = useRef<HTMLDivElement>(null);

  // Add logs every 0.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const sampleLog = sampleLogs[logIndex % sampleLogs.length];
      const newLog: LogEntry = {
        id: Date.now(),
        timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19),
        ...sampleLog
      };
      
      setLogs(prev => [...prev, newLog].slice(-100)); // Keep last 100 logs
      setLogIndex(prev => prev + 1);
    }, 500);

    return () => clearInterval(interval);
  }, [logIndex]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

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

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      <Navbar />
      
      {/* Main Dashboard Container */}
      <div className="flex-1 pt-16 flex flex-col">
        {/* Top Section - 40% - Fixed height, no animation */}
        <div className="h-[40%] min-h-[40%] max-h-[40%] border-b border-border flex flex-shrink-0">
        {/* Left 50% - Users */}
          <div className="w-1/2 border-r border-border p-6">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-primary" />
              <h2 className="font-semibold text-foreground">Users</h2>
            </div>
            <div className="h-[calc(100%-2rem)] flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-foreground mb-2">
                  24
                </div>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
            </div>
          </div>
          
          {/* Right 50% - Threats Found */}
          <div className="w-1/2 p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              <h2 className="font-semibold text-foreground">Threat Found</h2>
            </div>
            <div className="h-[calc(100%-2rem)] flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-destructive mb-2">
                  7
                </div>
                <p className="text-sm text-muted-foreground">Detected Today</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section - 60% - User Logs */}
        <div className="h-[60%] flex flex-col p-6">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-primary" />
            <h2 className="font-semibold text-foreground">User Logs</h2>
            <span className="text-xs text-muted-foreground ml-2">
              ({logs.length} entries)
            </span>
          </div>
          
          {/* Log Container - Terminal Style */}
          <div 
            ref={logContainerRef}
            className="flex-1 bg-[hsl(220,16%,4%)] border border-border rounded-lg overflow-auto font-mono text-sm"
          >
            <div className="p-4 space-y-1">
              {logs.length === 0 ? (
                <div className="text-muted-foreground text-center py-8">
                  Waiting for log data...
                </div>
              ) : (
                logs.map((log) => (
                  <div 
                    key={log.id}
                    className={`px-3 py-1.5 rounded border ${getSeverityBg(log.severity)} flex items-start gap-4`}
                  >
                    <span className="text-muted-foreground flex-shrink-0 w-36">
                      {log.timestamp}
                    </span>
                    <span className={`flex-shrink-0 w-16 font-medium ${getSeverityColor(log.severity)}`}>
                      {log.severity}
                    </span>
                    <span className="text-primary flex-shrink-0 w-24">
                      [{log.source}]
                    </span>
                    <span className="text-foreground">
                      {log.message}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

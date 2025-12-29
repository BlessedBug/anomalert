import { Server, Database, Activity, BarChart3, ArrowRight, Shield, Lock, Wifi, Download } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { agentApi } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';

const AgentInfo = () => {
  const { toast } = useToast();

  const handleDownload = async () => {
    try {
      await agentApi.downloadAgent();
      toast({
        title: 'Download Started',
        description: 'The agent installer is downloading.',
      });
    } catch (error) {
      toast({
        title: 'Download Failed',
        description: 'Could not download the agent. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const workflowSteps = [
    { label: 'Log Collection', icon: Database, color: 'bg-primary' },
    { label: 'Backend Processing', icon: Server, color: 'bg-cyan-500' },
    { label: 'Analysis', icon: Activity, color: 'bg-emerald-500' },
    { label: 'Dashboard Display', icon: BarChart3, color: 'bg-violet-500' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Agent Documentation
              </h1>
              <div className="text-muted-foreground text-lg leading-relaxed">
                <p>
                  This page explains what the AnomAlert agent collects and how that data supports 
                  security monitoring. The agent is a software component installed on endpoints 
                  that captures security-relevant events and transmits them to the central backend 
                  for analysis.
                </p>
              </div>
            </div>
            <Button onClick={handleDownload} size="lg" className="flex-shrink-0">
              <Download className="w-5 h-5 mr-2" />
              Download Agent
            </Button>
          </div>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              Understanding what the agent reports helps analysts interpret 
              dashboard events and investigate detected anomalies.
            </p>
            <p>
              Agents run continuously and collect data from multiple sources on each monitored 
              machine. The collected data provides the foundation for all detection and alerting 
              capabilities. Without agents deployed, the dashboard has no visibility into 
              endpoint activity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            What the Agent Reports
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The agent monitors four primary data sources on each endpoint. File system events 
              capture when files are created, modified, deleted, or accessed in monitored 
              directories. Network connection events record when applications establish inbound 
              or outbound connections, including destination addresses and ports. Process 
              execution events log when programs start or stop, including command lines and 
              parent processes. USB device events track when removable storage is connected or 
              disconnected.
            </p>
            <p>
              Each event includes metadata that helps analysts understand context. Timestamps 
              are recorded with millisecond precision. User accounts associated with events are 
              captured where available. Process identifiers allow correlation between different 
              event types. File paths and network destinations provide specifics for investigation.
            </p>
            <p>
              The agent applies initial filtering to reduce data volume. Routine system operations 
              that generate high-frequency, low-value events are excluded or summarized. This 
              keeps transmission overhead manageable and focuses analyst attention on events that 
              matter. Filtering rules can be adjusted based on organizational requirements.
            </p>
          </div>
          
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="glass-card p-5">
              <Shield className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-medium text-foreground mb-2">Low Overhead</h3>
              <p className="text-sm text-muted-foreground">
                The agent uses minimal CPU and memory to avoid impacting endpoint performance 
                during normal operations.
              </p>
            </div>
            <div className="glass-card p-5">
              <Lock className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-medium text-foreground mb-2">Encrypted Transmission</h3>
              <p className="text-sm text-muted-foreground">
                All data sent from agents to the backend is encrypted using TLS to protect 
                sensitive log content in transit.
              </p>
            </div>
            <div className="glass-card p-5">
              <Wifi className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-medium text-foreground mb-2">Reliable Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Local buffering and retry logic ensure logs reach the backend even during 
                temporary network disruptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-card/30 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Types of Monitored Activity
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              File system monitoring covers directories configured during agent setup. By default 
              this includes user profile folders, temporary directories, and common download 
              locations. Events include file creation with path and extension, modification 
              with byte counts, deletion, and read access. This data supports detection of 
              ransomware behavior, unauthorized data staging, and policy violations around 
              sensitive files.
            </p>
            <p>
              Network monitoring captures TCP and UDP connections initiated by processes on the 
              endpoint. Each connection record includes local and remote addresses, ports, 
              protocol, and the process responsible. DNS queries are also logged where supported. 
              This data helps identify command and control communication, data exfiltration over 
              network channels, and unusual connection patterns that may indicate compromise.
            </p>
            <p>
              Process monitoring logs the start and termination of processes. Command line 
              arguments reveal what parameters were passed to executables. Parent-child 
              relationships show how processes spawn other processes, which is critical for 
              detecting injection techniques and living-off-the-land attacks. Unusual parent 
              processes for common tools often indicate malicious execution chains.
            </p>
            <p>
              USB monitoring tracks storage device connections. Device identifiers allow 
              correlation across multiple connection events. Timestamp data shows when devices 
              were connected and for how long. Combined with file system events, this helps 
              identify data transfer to removable media. Organizations can use this for data 
              loss prevention and insider threat detection.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            How Agent Data Supports Incident Review
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              When the detection engine identifies an anomaly, analysts can trace back through 
              agent data to understand what happened. Correlation across data types provides 
              context that single-source logs cannot. A suspicious network connection becomes 
              more significant when combined with unusual file access and an unexpected process 
              execution around the same time.
            </p>
            <p>
              Historical data retention allows investigation of events that occurred before an 
              alert was raised. Threats often establish persistence and operate quietly before 
              triggering detection thresholds. Access to past logs helps analysts reconstruct 
              attack timelines, identify initial access points, and scope the full extent of 
              compromise.
            </p>
            <p>
              Each log entry includes enough metadata for actionable investigation. Timestamps 
              enable timeline construction. User accounts show who was logged in. Process IDs 
              allow correlation with memory analysis if needed. File paths and network 
              destinations provide concrete artifacts for further analysis or blocking.
            </p>
            <p>
              The dashboard surfaces high-priority events automatically, but analysts can also 
              search historical logs for specific indicators. Known malicious file hashes, 
              suspicious domains, or command line patterns can be queried across the collected 
              data. This supports both reactive incident response and proactive threat hunting.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-card/30 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Collected Metadata Summary
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              File events include: file path, file name, extension, operation type, byte count 
              for modifications, associated process, user account, and timestamp. Network events 
              include: local address and port, remote address and port, protocol, connection 
              state, associated process, and timestamp. Process events include: executable path, 
              command line arguments, process ID, parent process ID, user account, start time, 
              and end time.
            </p>
            <p>
              USB events include: device identifier, device type, manufacturer string if 
              available, connection timestamp, and disconnection timestamp. Additional metadata 
              may be collected depending on agent configuration and operating system capabilities. 
              All collected data is structured for efficient query and analysis.
            </p>
            <p>
              Data volume depends on endpoint activity. Busy workstations generate more events 
              than idle servers. Filtering rules reduce volume by excluding routine low-value 
              events. Compression reduces transmission size. Retention policies control how 
              long historical data remains available for investigation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            Data Flow Diagram
          </h2>
          
          <div className="glass-card p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-16 h-16 rounded-xl ${step.color}/20 border border-${step.color.replace('bg-', '')}/30 flex items-center justify-center mb-3`}>
                      <step.icon className={`w-8 h-8 ${step.color.replace('bg-', 'text-')}`} />
                    </div>
                    <span className="text-sm font-medium text-foreground text-center">{step.label}</span>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block" />
                  )}
                </div>
              ))}
            </div>
            
            <div className="md:hidden flex flex-col items-center gap-2 mt-4">
              <p className="text-xs text-muted-foreground text-center">
                Log Collection → Backend Processing → Analysis → Dashboard Display
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgentInfo;

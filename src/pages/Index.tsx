import { Shield, Database, Activity, AlertTriangle, FileSearch, Usb, MonitorSpeaker, Network } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 tracking-tight">
            AnomAlert
          </h1>
          <p className="text-xl text-primary mb-8">
            Security Monitoring for Operations Teams
          </p>
          <div className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto space-y-4">
            <p>
              AnomAlert collects endpoint telemetry, processes it through detection pipelines, and 
              displays actionable events on a centralized dashboard. The platform monitors file 
              system activity, network connections, process execution, and USB device usage across 
              your infrastructure. Agents run on monitored machines and transmit structured logs 
              to the backend for analysis.
            </p>
            <p>
              The goal is visibility without complexity. Analysts see what is happening across 
              their environment in real time. Anomalies are highlighted based on behavioral 
              analysis rather than static signatures. The dashboard presents data clearly so 
              teams can investigate quickly and respond to threats before they escalate.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            The Monitoring Problem
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Security teams generate massive amounts of log data daily. Windows event logs, 
              file access records, network connection tables, and process execution traces all 
              contribute to data volumes that exceed what humans can manually review. Without 
              automated processing, critical events get lost in the noise. Analysts scroll 
              through thousands of entries looking for the handful that actually matter.
            </p>
            <p>
              Signature-based detection helps but has limits. Known attack patterns can be 
              flagged automatically, but novel techniques slip through. Attackers who understand 
              the signatures in use can deliberately avoid them. Behavioral anomalies often 
              provide earlier warning than signatures because they detect deviation from normal 
              regardless of specific attack methods.
            </p>
            <p>
              Alert fatigue compounds these challenges. Systems configured to catch everything 
              generate so many notifications that analysts stop paying attention. Systems tuned 
              for low noise miss subtle indicators. Finding the right balance requires tools 
              that correlate events, establish baselines, and surface deviations that warrant 
              investigation.
            </p>
            <p>
              Detection time matters. The longer a threat operates undetected, the more damage 
              it can cause. Attackers use initial access to move laterally, escalate privileges, 
              and establish persistence. Early detection limits the blast radius. Delayed 
              detection means complex remediation and potentially significant data exposure.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/30 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Platform Architecture
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-6">
              <h3 className="text-lg font-medium text-foreground mb-3">Endpoint Agents</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Lightweight software runs on each monitored machine. The agent captures security 
                events from multiple sources including the Windows event log, file system, registry, 
                and network stack. Resource usage is kept low to avoid impacting normal operations. 
                Data is batched and compressed before transmission to minimize network overhead.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-medium text-foreground mb-3">Central Backend</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Incoming logs are received, normalized, and stored for analysis. The backend applies 
                detection rules and behavioral models to identify anomalies. Events exceeding 
                configured thresholds are flagged and surfaced on the dashboard. Historical data 
                is retained for retrospective investigation and trend analysis.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-medium text-foreground mb-3">Detection Engine</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Multiple detection methods run in parallel. Statistical models identify deviations 
                from established baselines. Rule-based checks flag known indicators. Correlation 
                logic connects related events across different data sources. Severity scores are 
                computed based on potential impact and confidence levels.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-medium text-foreground mb-3">Analyst Dashboard</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The web interface displays current status and live log streams. Analysts can monitor 
                active endpoints, review detected threats, and investigate individual events. The 
                interface updates in real time without manual refreshing. Design focuses on clarity 
                and speed to support efficient daily operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Data Collection
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <FileSearch className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">File System Events</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The agent monitors file creation, modification, deletion, and access in 
                  configured directories. This data helps identify unusual file activity such 
                  as mass file encryption, access to sensitive paths outside normal patterns, 
                  or creation of executables in unexpected locations. File metadata including 
                  timestamps, paths, and owning processes is captured for each event.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Network className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Network Connections</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Outbound and inbound connections are logged with destination addresses, ports, 
                  and associated processes. Network data supports detection of command and control 
                  communication, data exfiltration attempts, and lateral movement within the 
                  environment. Connection patterns are compared against historical baselines to 
                  identify anomalous destinations or unusual volumes.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <MonitorSpeaker className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Process Execution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Process start and stop events are captured including command lines, parent 
                  processes, and execution timestamps. This data enables detection of suspicious 
                  script execution, living-off-the-land techniques, and process injection. 
                  Execution chains can be reconstructed to understand how processes relate to 
                  each other and identify abnormal parent-child relationships.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Usb className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">USB Device Activity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Insertion and removal of USB storage devices are logged with device identifiers 
                  and timestamps. This supports data loss prevention by identifying when removable 
                  media is connected and potentially used for unauthorized data transfer. Device 
                  policies can flag or block known unauthorized devices while allowing approved 
                  hardware.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/30 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Detection Approach
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The platform uses multiple detection methods working together. Statistical models 
              establish normal patterns for each endpoint based on historical activity. Deviations 
              from these patterns trigger investigation. Rule-based checks match events against 
              known indicators of compromise. Correlation logic connects events across different 
              sources to identify attack patterns that span multiple data types.
            </p>
            <p>
              Severity scoring helps analysts prioritize their attention. Each detected anomaly 
              receives a score based on potential impact, confidence level, and contextual factors. 
              High-severity events appear prominently in the dashboard. Lower-severity events 
              remain available for context but do not demand immediate attention. Thresholds can 
              be adjusted based on organizational risk tolerance and operational capacity.
            </p>
            <p>
              False positive management is built into the system. Common benign patterns can be 
              whitelisted to reduce noise. Detection models are tuned based on feedback to improve 
              accuracy over time. The goal is actionable alerting that respects analyst time and 
              maintains vigilance without causing fatigue.
            </p>
            <p>
              Continuous monitoring means threats are detected as they occur rather than during 
              periodic reviews. The dashboard updates in real time as new events arrive. Analysts 
              can watch the log stream during active investigations or leave it running to catch 
              emerging patterns. This approach supports both reactive incident response and 
              proactive threat hunting.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

import { Database, Activity, AlertTriangle, FileSearch, Usb, MonitorSpeaker, Network } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Logo size={48} />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 tracking-tight">
            AnomAlert
          </h1>
          <p className="text-xl text-primary mb-8">
            Enterprise Security Monitoring for Companies & Organizations
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

      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            What the Platform Does
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              AnomAlert is a security monitoring platform designed for operations teams who need 
              visibility into endpoint activity without the complexity of enterprise SIEM solutions. 
              The platform collects structured logs from deployed agents, processes them through a 
              detection pipeline, and surfaces events that require analyst attention. The goal is 
              straightforward: show analysts what matters and let them investigate quickly.
            </p>
            <p>
              The platform runs in real time. Agents on monitored machines collect file system 
              events, network connection data, process execution records, and USB device activity. 
              This data flows to a central backend where it is normalized, analyzed for anomalies, 
              and displayed on the dashboard. Analysts can observe patterns across their fleet and 
              drill down into specific events when something looks unusual.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/30 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            The Challenge We Address
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              This platform exists because daily security monitoring often involves too much noise 
              and not enough signal. Analysts spend hours scrolling through logs, trying to separate 
              routine operations from genuine threats. Traditional alerting systems either flood 
              teams with false positives or miss subtle indicators buried in high-volume data. The 
              result is alert fatigue, missed detections, and reactive rather than proactive security 
              operations.
            </p>
            <p>
              AnomAlert addresses these problems by correlating different types of activity to 
              surface what matters. File system changes are compared against network connections. 
              Process executions are matched with USB device events. Behavioral baselines are 
              established for each endpoint, and deviations from those baselines trigger attention. 
              This correlation approach reduces noise because it considers context rather than 
              treating each event in isolation.
            </p>
            <p>
              The platform focuses on observation first, not just alerts. Analysts can watch the 
              log stream, see patterns develop, and investigate before formal thresholds are 
              crossed. This supports proactive threat hunting alongside automated detection. The 
              dashboard is built for operational use: clean, fast, and focused on the data that 
              drives decisions.
            </p>
            <p>
              Threat indicators in AnomAlert come from multiple sources: unusual access times, 
              uncommon file paths, connections to unfamiliar destinations, and execution of 
              rare processes. These indicators are weighted and combined to produce severity 
              scores. High-severity events appear prominently. Lower-severity events remain 
              visible for context. Analysts can adjust thresholds based on their environment 
              and risk tolerance.
            </p>
            <p>
              The design philosophy prioritizes clarity over features. Every element on the 
              screen serves a purpose. Metrics explain what they measure. Logs show what 
              happened and when. Navigation is minimal because the focus should remain on the 
              data. This approach reduces training time and lets analysts work effectively 
              from day one.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Platform Capabilities
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              The platform provides continuous monitoring across all endpoints running the 
              AnomAlert agent. Data collection happens in the background with minimal performance 
              impact. Agents batch and compress their transmissions to reduce network overhead. 
              The backend processes incoming data streams, applies detection logic, and updates 
              the dashboard in near real time.
            </p>
            <p>
              Detection capabilities include behavioral anomaly identification, threshold-based 
              alerting, and pattern matching for known indicators. The system learns what normal 
              looks like for each environment and flags deviations that exceed configurable 
              sensitivity levels. Multiple detection methods run in parallel to maximize coverage 
              while keeping false positive rates manageable.
            </p>
            <p>
              The dashboard presents three core views: active user counts for deployment health, 
              threat summaries for current risk posture, and live log streams for detailed 
              investigation. These views update continuously without requiring page refreshes. 
              Analysts can monitor their environment throughout the day and respond quickly 
              when something changes.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
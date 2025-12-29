import { Shield, Database, Activity, AlertTriangle, FileSearch, Usb, MonitorSpeaker, Network, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 tracking-tight">
            AnomAlert
          </h1>
          <p className="text-xl text-primary mb-8">
            Enterprise Anomaly Detection and Alerting Platform
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            AnomAlert is a comprehensive security monitoring platform engineered to detect unusual system behavior, 
            suspicious file activity, and abnormal network events through advanced real-time log analysis. Our platform 
            empowers security operations centers with early warning capabilities, enabling proactive threat detection 
            and rapid incident response. Built for enterprise environments, AnomAlert scales seamlessly from small 
            teams to large organizations, providing consistent visibility across your entire infrastructure. The 
            platform integrates with existing security workflows and delivers actionable intelligence that reduces 
            mean time to detection and response.
          </p>
        </div>
      </section>

      {/* Why AnomAlert */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Why Organizations Choose AnomAlert
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Traditional security tools rely heavily on <strong className="text-foreground">signature-based detection</strong>, 
              which requires prior knowledge of specific attack patterns. This fundamental limitation leaves organizations 
              vulnerable to novel threats and zero-day vulnerabilities that have no existing signatures. Modern adversaries 
              continuously evolve their techniques, rendering static signature databases increasingly ineffective. AnomAlert 
              addresses this gap by focusing on behavioral anomalies rather than known patterns, enabling detection of 
              threats that would otherwise evade traditional security controls. Our approach complements existing security 
              investments while providing crucial visibility into unknown threat vectors.
            </p>
            <p>
              Many sophisticated attacks go unnoticed because of <strong className="text-foreground">unknown or zero-day behavior</strong> that 
              evades conventional detection systems. By the time a signature is developed and distributed, significant 
              damage may have already occurred, and attackers may have established persistent access to critical systems. 
              The asymmetry between attacker innovation and defender response creates windows of vulnerability that can 
              last weeks or months. AnomAlert's behavioral analysis continuously learns normal patterns and flags deviations, 
              providing protection even against previously unseen attack techniques. This proactive approach shifts the 
              advantage back to defenders by reducing the detection gap.
            </p>
            <p>
              Current systems often suffer from <strong className="text-foreground">extended detection times</strong>. Industry research 
              consistently shows that the gap between an incident occurring and its detection can span hours, days, or 
              even months, giving attackers ample time to accomplish their objectives and cover their tracks. This delay 
              dramatically increases the cost and complexity of incident response, as threat actors have time to move 
              laterally, exfiltrate data, and establish backup access mechanisms. AnomAlert's real-time analysis engine 
              dramatically reduces this detection window, enabling security teams to respond while attacks are still in 
              their early stages, minimizing potential damage and recovery costs.
            </p>
            <p>
              <strong className="text-foreground">Manual log analysis</strong> is time-consuming, error-prone, and simply does not scale 
              to modern data volumes. Security analysts cannot realistically review millions of log entries daily across 
              diverse systems and applications, leading to missed indicators of compromise buried in overwhelming noise. 
              Alert fatigue compounds this problem, as analysts become desensitized to constant notifications and may 
              overlook genuine threats. AnomAlert automates the initial analysis and filtering, surfacing only the most 
              significant events that warrant human attention, dramatically improving analyst efficiency and job satisfaction.
            </p>
            <p>
              There is a critical need for <strong className="text-foreground">intelligent early warning systems</strong> that can 
              automatically identify anomalous patterns and alert security teams before incidents escalate into breaches. 
              AnomAlert fulfills this need by combining advanced analytics with intuitive visualization, providing 
              security teams with the tools they need to stay ahead of threats. Our platform delivers context-rich alerts 
              that enable faster decision-making and more effective response actions. Organizations using AnomAlert report 
              significant improvements in detection rates, response times, and overall security posture.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-6 bg-card/30 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Challenges We Address
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-6">
              <h3 className="text-lg font-medium text-foreground mb-3">Infrastructure Complexity</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Modern enterprise environments consist of diverse systems, hybrid cloud infrastructure, and 
                interconnected applications spanning multiple vendors and technologies. This complexity makes 
                it increasingly difficult to establish baseline behavior and detect deviations across the 
                entire technology stack. AnomAlert provides unified visibility regardless of underlying 
                infrastructure, normalizing data from disparate sources into a coherent security view.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-medium text-foreground mb-3">Insider Threat Detection</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Insider threats and unauthorized device usage pose significant risks to organizations of all 
                sizes. Traditional perimeter defenses are ineffective against users who already have legitimate 
                access to internal systems and data. These threats may be malicious or accidental, but both 
                can result in significant data exposure. AnomAlert monitors user behavior patterns to identify 
                anomalous activities that may indicate insider risk.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-medium text-foreground mb-3">Data Volume Management</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Security Operations Centers face overwhelming volumes of log data daily, often processing 
                billions of events across their infrastructure. Without intelligent filtering and prioritized 
                analysis, critical security events can be buried in noise and remain undetected until it is 
                too late. AnomAlert's analytics engine processes massive data volumes efficiently, extracting 
                actionable signals from the noise.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-medium text-foreground mb-3">Accessibility and Deployment</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Many existing anomaly detection solutions are complex to deploy, expensive to maintain, and 
                require specialized expertise that may not be available in-house. Smaller security teams and 
                resource-constrained organizations often lack access to effective monitoring solutions that 
                can compete with enterprise-grade tools. AnomAlert delivers powerful capabilities through an 
                intuitive interface that requires minimal training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How AnomAlert Works */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            How AnomAlert Works
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">1. Comprehensive Data Collection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AnomAlert collects telemetry from multiple sources including system logs, file system activity, 
                  network connections, and USB device events. Our lightweight agent runs locally on endpoints and 
                  captures security-relevant data without impacting system performance. The collection framework 
                  supports custom data sources and integrates with existing logging infrastructure. Data is 
                  normalized and enriched before transmission to ensure consistent analysis across diverse 
                  environments. The agent's modular architecture allows organizations to select specific 
                  collection modules based on their security requirements.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">2. Advanced Analysis Engine</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Collected data is processed through a sophisticated analysis pipeline combining rule-based 
                  logic and statistical anomaly detection techniques. This hybrid approach enables detection of 
                  both known attack patterns and previously unseen abnormal behavior. The engine continuously 
                  adapts to your environment, learning what constitutes normal behavior and flagging significant 
                  deviations. Multiple detection algorithms run in parallel to maximize coverage while minimizing 
                  false positives. The system automatically tunes sensitivity based on historical accuracy.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">3. Intelligent Risk Classification</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Detected anomalies are assigned severity levels based on their potential impact, confidence 
                  scores, and contextual factors. This intelligent prioritization helps analysts focus on the 
                  most critical events first, ensuring that high-priority threats receive immediate attention. 
                  The classification system considers asset criticality, user risk profiles, and historical 
                  patterns when assigning severity. Customizable thresholds allow organizations to tune 
                  alerting to their specific risk tolerance and operational requirements.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">4. Real-Time Alert Generation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When anomalies exceed defined thresholds, AnomAlert generates comprehensive alerts with 
                  timestamps, severity indicators, and rich contextual information. These alerts are displayed 
                  on the dashboard for immediate analyst review and can be integrated with existing incident 
                  response workflows. Alert notifications can be configured for multiple channels including 
                  email, webhook, and integration with popular security orchestration platforms. Each alert 
                  includes recommended response actions and links to relevant log data for investigation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AnomAlert Matters Today */}
      <section className="py-20 px-6 bg-card/30 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Key Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
              <div>
                <h3 className="font-medium text-foreground mb-1">Early Threat Detection</h3>
                <p className="text-muted-foreground text-sm">
                  Identify threats before they cause damage by detecting behavioral anomalies in real-time, 
                  reducing your exposure window and limiting potential impact.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
              <div>
                <h3 className="font-medium text-foreground mb-1">Zero-Day Protection</h3>
                <p className="text-muted-foreground text-sm">
                  Move beyond signature-based detection to catch unknown and zero-day threats that would 
                  evade traditional security tools.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
              <div>
                <h3 className="font-medium text-foreground mb-1">Accelerated Response</h3>
                <p className="text-muted-foreground text-sm">
                  Automated analysis and prioritized alerts enable quicker incident response times, reducing 
                  mean time to detection and containment.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
              <div>
                <h3 className="font-medium text-foreground mb-1">Complete Visibility</h3>
                <p className="text-muted-foreground text-sm">
                  Gain comprehensive insight into system behavior and potential security gaps across your 
                  entire infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Use Cases */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Use Cases
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6 flex gap-4">
              <Usb className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-medium text-foreground mb-2">USB Device Monitoring</h3>
                <p className="text-muted-foreground text-sm">
                  Detect unauthorized USB insertions and removable media usage that could indicate 
                  data exfiltration attempts or policy violations requiring investigation.
                </p>
              </div>
            </div>
            <div className="glass-card p-6 flex gap-4">
              <FileSearch className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-medium text-foreground mb-2">File Activity Analysis</h3>
                <p className="text-muted-foreground text-sm">
                  Monitor suspicious file movements, unusual access patterns, and potential ransomware 
                  behavior before encryption spreads across your network.
                </p>
              </div>
            </div>
            <div className="glass-card p-6 flex gap-4">
              <MonitorSpeaker className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-medium text-foreground mb-2">System Behavior Monitoring</h3>
                <p className="text-muted-foreground text-sm">
                  Track abnormal system events, process executions, and configuration changes that 
                  deviate from established operational baselines.
                </p>
              </div>
            </div>
            <div className="glass-card p-6 flex gap-4">
              <Network className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-medium text-foreground mb-2">Network Traffic Analysis</h3>
                <p className="text-muted-foreground text-sm">
                  Monitor network connections and data transfers to identify command and control 
                  communications and unauthorized data exfiltration attempts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-20 px-6 bg-card/30 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Platform Overview
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            AnomAlert is an enterprise-grade anomaly detection and alerting platform designed to address the 
            limitations of traditional signature-based security tools. By analyzing system logs, file activity, 
            network connections, and device events in real-time, it provides security teams with early warning 
            capabilities for proactive threat detection. Built with a focus on performance, scalability, and 
            operational efficiency, AnomAlert serves as a critical component of modern security operations. 
            The platform integrates seamlessly with existing security infrastructure and delivers measurable 
            improvements in detection rates, response times, and overall security posture. Organizations 
            across industries rely on AnomAlert to protect their critical assets and data.
          </p>
          <a 
            href="https://github.com/BlessedBug/socy" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="border-border text-foreground hover:bg-secondary px-8 py-6 text-base">
              GitHub Repository
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
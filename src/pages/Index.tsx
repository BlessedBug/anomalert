import { Shield, Database, Activity, AlertTriangle, FileSearch, Usb, MonitorSpeaker, GraduationCap, ArrowRight, ChevronRight } from 'lucide-react';
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
            Anomaly Detection and Alerting System
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            AnomAlert is a security monitoring system designed to detect unusual system behavior, 
            suspicious file activity, and abnormal events by analyzing logs and system signals in real time. 
            It provides security teams with early warning capabilities for proactive threat detection.
          </p>
        </div>
      </section>

      {/* Why We Built AnomAlert */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Why We Built AnomAlert
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Traditional security tools rely heavily on <strong className="text-foreground">signature-based detection</strong>, 
              which requires prior knowledge of specific attack patterns. This approach fails against 
              novel threats and zero-day vulnerabilities that have no existing signatures.
            </p>
            <p>
              Many attacks go unnoticed because of <strong className="text-foreground">unknown or zero-day behavior</strong> that 
              evades conventional detection systems. By the time a signature is developed, significant 
              damage may have already occurred.
            </p>
            <p>
              Current systems often suffer from <strong className="text-foreground">long detection times</strong>. The gap between 
              an incident occurring and its detection can span hours, days, or even months, giving 
              attackers ample time to accomplish their objectives.
            </p>
            <p>
              <strong className="text-foreground">Manual log analysis</strong> is time-consuming and error-prone. Security analysts 
              cannot realistically review millions of log entries daily, leading to missed indicators 
              of compromise.
            </p>
            <p>
              There is a critical need for <strong className="text-foreground">real-time early warning systems</strong> that can 
              automatically identify anomalous patterns and alert security teams before incidents escalate.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-6 bg-card/30 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Problem Statement
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-6">
              <h3 className="text-lg font-medium text-foreground mb-3">System Complexity</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Modern IT environments consist of diverse systems, cloud infrastructure, and 
                interconnected applications. This complexity makes it increasingly difficult to 
                establish baseline behavior and detect deviations.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-medium text-foreground mb-3">Insider Threats</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Insider threats and unauthorized device usage pose significant risks. Traditional 
                perimeter defenses are ineffective against users who already have legitimate access 
                to internal systems.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-medium text-foreground mb-3">Log Overload</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Security Operations Centers (SOCs) face overwhelming volumes of log data daily. 
                Without intelligent filtering and analysis, critical events can be buried in noise.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-medium text-foreground mb-3">Tool Accessibility</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Many existing anomaly detection tools are complex, expensive, or require specialized 
                expertise. Smaller teams and organizations often lack access to effective monitoring 
                solutions.
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
                <h3 className="text-lg font-medium text-foreground mb-2">1. Data Collection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AnomAlert collects data from multiple sources including system logs, file system 
                  activity, and USB device events. The agent runs locally and captures relevant 
                  security telemetry without impacting system performance.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">2. Analysis Engine</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The collected data is processed through a combination of rule-based logic and 
                  statistical anomaly detection techniques. This hybrid approach enables detection 
                  of both known patterns and previously unseen abnormal behavior.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">3. Risk Classification</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Detected anomalies are assigned severity levels based on their potential impact 
                  and confidence scores. This prioritization helps analysts focus on the most 
                  critical events first.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">4. Alert Generation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When anomalies exceed defined thresholds, AnomAlert generates alerts with 
                  timestamps, severity indicators, and contextual information. These alerts are 
                  displayed on the dashboard for immediate analyst review.
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
            Why AnomAlert Matters Today
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
              <div>
                <h3 className="font-medium text-foreground mb-1">Early Detection</h3>
                <p className="text-muted-foreground text-sm">
                  Identify threats before they cause damage by detecting behavioral anomalies in real-time.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
              <div>
                <h3 className="font-medium text-foreground mb-1">Reduced Signature Dependency</h3>
                <p className="text-muted-foreground text-sm">
                  Move beyond signature-based detection to catch unknown and zero-day threats.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
              <div>
                <h3 className="font-medium text-foreground mb-1">Faster Response</h3>
                <p className="text-muted-foreground text-sm">
                  Automated analysis and prioritized alerts enable quicker incident response times.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
              <div>
                <h3 className="font-medium text-foreground mb-1">Better Visibility</h3>
                <p className="text-muted-foreground text-sm">
                  Gain comprehensive insight into system behavior and potential security gaps.
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
            Practical Use Cases
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6 flex gap-4">
              <Usb className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-medium text-foreground mb-2">USB Device Monitoring</h3>
                <p className="text-muted-foreground text-sm">
                  Detect unauthorized USB insertions and removable media usage that could indicate 
                  data exfiltration attempts.
                </p>
              </div>
            </div>
            <div className="glass-card p-6 flex gap-4">
              <FileSearch className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-medium text-foreground mb-2">File Activity Analysis</h3>
                <p className="text-muted-foreground text-sm">
                  Monitor suspicious file movements, unusual access patterns, and potential 
                  ransomware behavior.
                </p>
              </div>
            </div>
            <div className="glass-card p-6 flex gap-4">
              <MonitorSpeaker className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-medium text-foreground mb-2">System Behavior Monitoring</h3>
                <p className="text-muted-foreground text-sm">
                  Track abnormal system events, process executions, and configuration changes 
                  that deviate from normal operations.
                </p>
              </div>
            </div>
            <div className="glass-card p-6 flex gap-4">
              <GraduationCap className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-medium text-foreground mb-2">SOC Training & Simulation</h3>
                <p className="text-muted-foreground text-sm">
                  Use AnomAlert as a learning platform for security analysts to understand 
                  anomaly detection concepts and incident response.
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
            Summary
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            AnomAlert is an anomaly detection and alerting system designed to address the limitations 
            of traditional signature-based security tools. By analyzing system logs, file activity, 
            and device events in real-time, it provides security teams with early warning capabilities 
            for proactive threat detection. Built with a focus on accessibility and practical application, 
            AnomAlert serves both as a functional security monitoring tool and an educational platform 
            for understanding modern threat detection methodologies.
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

import { Download, Server, Database, Activity, BarChart3, ArrowRight, Shield, Lock, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AgentInfo = () => {
  const workflowSteps = [
    { label: 'Log Collection', icon: Database, color: 'bg-primary' },
    { label: 'Backend Processing', icon: Server, color: 'bg-cyan-500' },
    { label: 'ML Analysis', icon: Activity, color: 'bg-emerald-500' },
    { label: 'Dashboard Display', icon: BarChart3, color: 'bg-violet-500' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Agent Documentation
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Technical documentation for the AnomAlert monitoring agent. This page provides comprehensive 
            information about how the software operates internally, data collection methodologies, and 
            how information flows through the system from endpoints to the central dashboard.
          </p>
        </div>
      </section>

      {/* Agent Overview */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Agent Overview
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The AnomAlert agent is a lightweight software component designed to run on monitored endpoints 
              with minimal system impact. It collects security-relevant data while maintaining low resource 
              utilization, ensuring that business operations are not affected by the monitoring process. The 
              agent architecture supports both Windows and Linux environments, with platform-specific modules 
              for optimal data collection. Deployment is streamlined through automated installation scripts 
              that configure the agent based on your environment.
            </p>
            <p>
              The agent operates continuously in the background, monitoring predefined data sources and 
              transmitting collected information to the central analysis backend for processing. Communication 
              is asynchronous and fault-tolerant, ensuring that temporary network issues do not result in 
              data loss. The agent includes local buffering capabilities and intelligent retry mechanisms 
              that guarantee delivery even in challenging network conditions. Configuration updates are 
              pushed from the central server, allowing administrators to modify collection parameters 
              without requiring endpoint access.
            </p>
          </div>
          
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="glass-card p-5">
              <Shield className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-medium text-foreground mb-2">Lightweight</h3>
              <p className="text-sm text-muted-foreground">
                Minimal CPU and memory footprint to avoid impacting system performance during normal 
                operations.
              </p>
            </div>
            <div className="glass-card p-5">
              <Lock className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-medium text-foreground mb-2">Secure</h3>
              <p className="text-sm text-muted-foreground">
                All data transmission is encrypted using industry-standard protocols to protect 
                sensitive log information.
              </p>
            </div>
            <div className="glass-card p-5">
              <Wifi className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-medium text-foreground mb-2">Reliable</h3>
              <p className="text-sm text-muted-foreground">
                Built-in retry mechanisms and local buffering ensure data delivery even during 
                network disruptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Log Collection Process */}
      <section className="py-16 px-6 bg-card/30 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Log Collection Process
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The agent collects data from multiple sources to provide comprehensive security monitoring 
              coverage across your infrastructure. Each collection module is optimized for its specific 
              data source, ensuring efficient capture with minimal overhead. The modular architecture 
              allows administrators to enable or disable specific collectors based on their security 
              requirements and compliance obligations. All collected data is timestamped with millisecond 
              precision to ensure accurate event correlation.
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">Windows Event Logs:</strong> Security, System, and Application event logs are monitored for security-relevant events including authentication, privilege changes, and system modifications.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">File System Activity:</strong> File creation, modification, deletion, and access events in monitored directories are tracked to detect unauthorized data access or potential ransomware activity.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">USB Device Events:</strong> Insertion and removal of removable storage devices are logged to support data loss prevention policies and insider threat detection.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">Process Execution:</strong> Tracking of process start and stop events enables behavioral analysis and detection of suspicious command execution patterns.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Secure Transmission */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Secure Transmission to Backend
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              All collected log data is transmitted securely to the central backend infrastructure using 
              enterprise-grade encryption and authentication. The transmission protocol is designed for 
              efficiency and reliability, with built-in mechanisms to handle network variability and 
              ensure data integrity. All communications are mutually authenticated to prevent man-in-the-
              middle attacks and ensure that data reaches its intended destination.
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">TLS Encryption:</strong> All network communication uses TLS 1.3 encryption with strong cipher suites to protect data in transit from eavesdropping and tampering.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">Authentication:</strong> Agents authenticate with the backend using unique API keys that are securely generated during installation and stored in protected system locations.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">Data Compression:</strong> Log data is compressed before transmission to reduce bandwidth usage and improve transmission speed, particularly beneficial for high-volume environments.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">Retry Logic:</strong> Failed transmissions are queued locally and retried automatically using exponential backoff to avoid overwhelming the network during recovery.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ML Analysis Workflow */}
      <section className="py-16 px-6 bg-card/30 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Analysis Workflow
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The backend analysis engine processes incoming log data through multiple stages designed to 
              maximize detection accuracy while minimizing false positives. The pipeline is optimized for 
              low-latency processing, ensuring that alerts are generated within seconds of anomalous 
              activity occurring on monitored endpoints. Each stage is independently scalable to handle 
              increasing data volumes as your deployment grows.
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">Data Normalization:</strong> Raw logs are parsed and normalized into a consistent format that enables uniform analysis regardless of the originating data source or platform.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">Feature Extraction:</strong> Relevant features are extracted for anomaly detection algorithms, including temporal patterns, frequency metrics, and behavioral indicators.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">Anomaly Detection:</strong> Statistical models and machine learning algorithms identify deviations from established baselines that may indicate security threats.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">Risk Scoring:</strong> Detected anomalies are assigned severity scores based on potential impact, confidence levels, and contextual factors to prioritize analyst attention.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Visual Workflow Diagram */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            System Workflow Diagram
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
            
            {/* Mobile arrows */}
            <div className="md:hidden flex flex-col items-center gap-2 mt-4">
              <p className="text-xs text-muted-foreground text-center">
                Log Collection → Backend Processing → ML Analysis → Dashboard Display
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 px-6 bg-card/30 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Download Agent Software
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Download the AnomAlert agent to begin monitoring your endpoints. The agent is available for 
            Windows and Linux systems and includes automated installation scripts for streamlined 
            deployment. Installation typically completes in under five minutes and requires minimal 
            configuration for standard deployments.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Download className="w-4 h-4 mr-2" />
            Download Agent (Windows)
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgentInfo;
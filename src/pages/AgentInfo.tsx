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
            Agent Information
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Technical documentation for the AnomAlert monitoring agent. This page explains how 
            the software operates internally and how data flows through the system.
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
              The AnomAlert agent is a lightweight software component that runs on monitored endpoints. 
              It is designed to collect security-relevant data with minimal system impact while 
              providing comprehensive visibility into system activities.
            </p>
            <p>
              The agent operates continuously in the background, monitoring predefined data sources 
              and transmitting collected information to the central analysis backend for processing.
            </p>
          </div>
          
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="glass-card p-5">
              <Shield className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-medium text-foreground mb-2">Lightweight</h3>
              <p className="text-sm text-muted-foreground">
                Minimal CPU and memory footprint to avoid impacting system performance.
              </p>
            </div>
            <div className="glass-card p-5">
              <Lock className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-medium text-foreground mb-2">Secure</h3>
              <p className="text-sm text-muted-foreground">
                All data transmission is encrypted to protect sensitive log information.
              </p>
            </div>
            <div className="glass-card p-5">
              <Wifi className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-medium text-foreground mb-2">Reliable</h3>
              <p className="text-sm text-muted-foreground">
                Built-in retry mechanisms ensure data delivery even during network issues.
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
              The agent collects data from multiple sources to provide comprehensive security monitoring:
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">Windows Event Logs:</strong> Security, System, and Application event logs are monitored for security-relevant events.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">File System Activity:</strong> File creation, modification, deletion, and access events in monitored directories.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">USB Device Events:</strong> Insertion and removal of removable storage devices.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">Process Execution:</strong> Tracking of process start and stop events for behavioral analysis.</span>
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
              All collected log data is transmitted securely to the central backend infrastructure:
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">TLS Encryption:</strong> All network communication uses TLS 1.3 encryption.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">Authentication:</strong> Agents authenticate with the backend using unique API keys.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">Data Compression:</strong> Log data is compressed before transmission to reduce bandwidth usage.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">Retry Logic:</strong> Failed transmissions are queued and retried automatically.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ML Analysis Workflow */}
      <section className="py-16 px-6 bg-card/30 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            ML-Based Analysis Workflow
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The backend analysis engine processes incoming log data through multiple stages:
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">Data Normalization:</strong> Raw logs are parsed and normalized into a consistent format.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">Feature Extraction:</strong> Relevant features are extracted for anomaly detection algorithms.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">Anomaly Detection:</strong> Statistical models identify deviations from established baselines.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong className="text-foreground">Risk Scoring:</strong> Detected anomalies are assigned severity scores based on potential impact.</span>
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
            Download the AnomAlert agent to begin monitoring your endpoints. The agent is 
            available for Windows systems and includes automated installation scripts.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Download className="w-4 h-4 mr-2" />
            Download Agent (Windows)
          </Button>
          <p className="text-xs text-muted-foreground mt-4">
            * This is a demo link. The actual software package will be provided upon deployment.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgentInfo;

import { useEffect, useRef } from "react";
import { Shield, Activity, FileSearch, Bell, Server, Usb, Eye, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-semibold text-lg text-foreground">AnomAlert</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#introduction" className="hover:text-foreground transition-colors">Introduction</a>
            <a href="#why" className="hover:text-foreground transition-colors">Why</a>
            <a href="#problem" className="hover:text-foreground transition-colors">Problem</a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
            <a href="#use-cases" className="hover:text-foreground transition-colors">Use Cases</a>
          </div>
          <Button variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary/10">
            Documentation
          </Button>
        </div>
      </nav>

      {/* Hero / Introduction Section */}
      <section id="introduction" className="pt-32 pb-20">
        <div
          ref={addToRefs}
          className="max-w-4xl mx-auto px-6 text-center opacity-0"
          style={{ animationDelay: "0.1s" }}
        >
          <h1 className="text-5xl md:text-7xl font-semibold text-foreground mb-6 tracking-tight">
            AnomAlert
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Anomaly Detection and Alerting System
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            AnomAlert is a security monitoring system designed to detect unusual system behavior, 
            suspicious file activity, and abnormal events by analyzing logs and system signals in real time. 
            It provides security teams with early warning capabilities for proactive threat detection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base">
              Get Started
            </Button>
            <Button variant="outline" className="border-border text-foreground hover:bg-muted px-8 py-6 text-base">
              Read the Docs
            </Button>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Why We Built AnomAlert */}
      <section id="why" className="py-20">
        <div
          ref={addToRefs}
          className="section-container opacity-0"
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="section-title">Why We Built AnomAlert</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Traditional security tools rely heavily on known signatures and pattern matching. 
              While effective against documented threats, this approach leaves critical gaps 
              when facing novel attack vectors, zero-day vulnerabilities, or sophisticated 
              adversaries who deliberately evade signature-based detection.
            </p>
            <p>
              Many attacks go unnoticed for extended periods—sometimes weeks or months—because 
              they don't match any known malicious signature. By the time they're discovered, 
              significant damage has already occurred.
            </p>
            <p>
              Manual log analysis, while thorough, is slow and error-prone. Security analysts 
              face overwhelming volumes of data, making it nearly impossible to identify subtle 
              anomalies without automated assistance.
            </p>
            <p>
              Security teams need early warning systems that can detect suspicious behavior 
              as it happens—not just post-incident forensic reports. AnomAlert was built to 
              address this fundamental need.
            </p>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Problem Statement */}
      <section id="problem" className="py-20">
        <div
          ref={addToRefs}
          className="section-container opacity-0"
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="section-title">Problem Statement</h2>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Modern computing environments face several interconnected security challenges 
              that traditional tools struggle to address effectively:
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span>
                  <strong className="text-foreground">System Complexity:</strong> The growing complexity 
                  of modern systems creates more attack surfaces and makes comprehensive monitoring 
                  increasingly difficult.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span>
                  <strong className="text-foreground">Insider Threats:</strong> Increased insider threats 
                  and unauthorized device usage represent significant risks that are often invisible 
                  to perimeter-focused security tools.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span>
                  <strong className="text-foreground">Log Overload:</strong> Security Operations Centers 
                  face massive log volumes, making it challenging to identify genuine threats among 
                  the noise without intelligent filtering and analysis.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span>
                  <strong className="text-foreground">Tool Accessibility:</strong> Many existing 
                  anomaly-focused tools are either too complex or too expensive for smaller teams 
                  and organizations with limited security budgets.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* How AnomAlert Works */}
      <section id="how-it-works" className="py-20">
        <div
          ref={addToRefs}
          className="section-container opacity-0"
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="section-title">How AnomAlert Works</h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            AnomAlert follows a systematic approach to anomaly detection, processing data 
            through four distinct stages:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Server,
                title: "1. Data Collection",
                description: "System logs, file events, and device activity are collected from monitored endpoints. Data sources include Windows Event Logs, file system changes, and USB device connections."
              },
              {
                icon: Activity,
                title: "2. Analysis Engine",
                description: "Collected data is processed using rule-based logic and statistical anomaly detection techniques to identify patterns that deviate from established baselines."
              },
              {
                icon: FileSearch,
                title: "3. Risk Classification",
                description: "Detected anomalies are classified based on severity and potential impact. Each event receives a risk score to help analysts prioritize their response."
              },
              {
                icon: Bell,
                title: "4. Alert Generation",
                description: "When anomalies exceed defined thresholds, alerts are generated with detailed timestamps, severity levels, and contextual information for investigation."
              }
            ].map((step, index) => (
              <div
                key={index}
                className="glass-card p-6 hover:border-primary/30 transition-colors"
              >
                <step.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Why AnomAlert Matters Today */}
      <section id="benefits" className="py-20">
        <div
          ref={addToRefs}
          className="section-container opacity-0"
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="section-title">Why AnomAlert Matters Today</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Eye,
                title: "Early Detection",
                description: "Identify unknown threats based on behavioral anomalies rather than relying solely on known signatures."
              },
              {
                icon: Shield,
                title: "Reduced Dependency",
                description: "Complement signature-based tools with behavior-focused detection for more comprehensive coverage."
              },
              {
                icon: Zap,
                title: "Faster Response",
                description: "Real-time alerting enables security teams to investigate and respond to incidents as they develop."
              },
              {
                icon: Activity,
                title: "Better Visibility",
                description: "Gain deeper insight into system behavior patterns, making it easier to spot deviations that warrant attention."
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Use Cases */}
      <section id="use-cases" className="py-20">
        <div
          ref={addToRefs}
          className="section-container opacity-0"
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="section-title">Practical Use Cases</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            AnomAlert is designed to address real-world security monitoring scenarios:
          </p>
          
          <div className="space-y-4">
            {[
              {
                icon: Usb,
                title: "USB Device Monitoring",
                description: "Detect unauthorized USB insertions and track device activity across endpoints."
              },
              {
                icon: FileSearch,
                title: "File Activity Analysis",
                description: "Identify suspicious file movements, unauthorized access patterns, and potential data exfiltration attempts."
              },
              {
                icon: Activity,
                title: "System Behavior Monitoring",
                description: "Track abnormal system behavior including unusual process execution, registry modifications, and service changes."
              },
              {
                icon: Shield,
                title: "SOC Training & Simulation",
                description: "Support security training programs and incident response simulations with realistic detection scenarios."
              }
            ].map((useCase, index) => (
              <div
                key={index}
                className="glass-card p-5 flex items-start gap-4 hover:border-primary/30 transition-colors"
              >
                <useCase.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-foreground mb-1">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Summary */}
      <section id="summary" className="py-20">
        <div
          ref={addToRefs}
          className="section-container opacity-0"
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="section-title">Summary</h2>
          <div className="glass-card p-8">
            <p className="text-muted-foreground leading-relaxed mb-6">
              AnomAlert is an anomaly detection and alerting system built to support modern security 
              monitoring needs. It addresses the fundamental limitations of signature-based detection 
              by focusing on behavioral analysis and real-time anomaly identification.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              By providing early warning capabilities and better visibility into system behavior, 
              AnomAlert helps security teams detect threats that traditional tools might miss, 
              enabling faster investigation and response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                View Documentation
              </Button>
              <Button variant="outline" className="border-border text-foreground hover:bg-muted">
                GitHub Repository
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">AnomAlert</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Anomaly Detection and Alerting System
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

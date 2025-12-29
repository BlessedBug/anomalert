import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            About AnomAlert
          </h1>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
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

      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            About This Project
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
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

      <section className="py-16 px-6 bg-card/30 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Platform Capabilities
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
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

export default About;

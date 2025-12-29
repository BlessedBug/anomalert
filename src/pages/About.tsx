import { User } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface TeamMember {
  name: string;
  role: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Muhammad Shehriyar Aslam',
    role: 'Backend Developer',
    description: 'Responsible for server-side architecture, data processing pipelines, and the core anomaly detection engine implementation.'
  },
  {
    name: 'Muhammad Ammar',
    role: 'Software Developer',
    description: 'Focused on system integration, agent development, and ensuring reliable communication between components.'
  },
  {
    name: 'Adnan Fareed Chishti',
    role: 'Frontend Developer',
    description: 'Designed and developed the user interface, dashboard visualizations, and overall user experience.'
  },
  {
    name: 'Dr. Muhammad Ali Qureshi',
    role: 'Technical Advisor',
    description: 'Providing guidance on system architecture, security best practices, and technical direction.'
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            About Us
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            AnomAlert was developed by a dedicated team of security professionals and software engineers 
            committed to advancing the field of threat detection. Our mission is to create practical, 
            accessible security monitoring solutions that empower organizations to protect their digital 
            assets effectively. We combine deep expertise in cybersecurity with modern software engineering 
            practices to deliver tools that make a real difference in security operations.
          </p>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Our Story
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              AnomAlert was born from a recognition that many organizations, particularly growing teams 
              and mid-sized enterprises, struggle to access sophisticated anomaly detection capabilities. 
              Enterprise security tools often come with enterprise price tags and complexity that puts 
              them out of reach for teams that need them most. We set out to change this dynamic by 
              building a platform that delivers powerful detection capabilities through an intuitive 
              interface that security professionals of all experience levels can leverage effectively.
            </p>
            <p>
              Our development philosophy centers on creating lightweight, understandable, and effective 
              systems that serve as both practical security tools and platforms for continuous improvement. 
              We believe that security monitoring should be accessible to all organizations regardless of 
              their size or budget, and that effective threat detection does not require specialized 
              expertise or months of implementation effort. Every feature we build is designed with 
              real-world operational requirements in mind.
            </p>
            <p>
              Throughout our development process, we have focused on applying sound software engineering 
              principles, implementing proven detection methodologies, and ensuring the platform remains 
              accessible to users with varying levels of technical expertise. We continuously gather 
              feedback from security practitioners and incorporate their insights into our roadmap. Our 
              commitment to quality and usability drives every decision we make, from algorithm selection 
              to interface design to documentation quality.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-card/30 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            Our Team
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-secondary border border-border flex items-center justify-center">
                    <User className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Our Mission
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              We are dedicated to democratizing advanced security monitoring capabilities that were 
              previously available only to large enterprises with substantial security budgets. Our 
              platform enables organizations to detect threats earlier, respond faster, and maintain 
              stronger security postures without the complexity traditionally associated with anomaly 
              detection systems. We believe that every organization deserves access to tools that can 
              help them protect their assets, data, and reputation from evolving cyber threats.
            </p>
            <p>
              Our approach emphasizes practical utility over theoretical perfection. We focus on 
              delivering detection capabilities that work reliably in real-world environments, with 
              manageable false positive rates and actionable alerts. Every feature we develop is 
              validated against realistic scenarios and refined based on operational feedback. We 
              measure our success not by technical metrics alone but by the real security improvements 
              our users achieve in their daily operations.
            </p>
            <p>
              We extend our gratitude to our partners, advisors, and the broader security community 
              for their ongoing support and feedback. Their insights help us continuously improve 
              the platform and ensure it meets the evolving needs of security teams worldwide. We 
              are committed to building long-term relationships with our users and contributing 
              positively to the cybersecurity ecosystem through both our products and our engagement 
              with the community.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
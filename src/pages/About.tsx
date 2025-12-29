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
    role: 'Supervisor',
    description: 'Academic supervisor providing guidance on research methodology, system design, and project direction.'
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
            AnomAlert is an academic research project developed by a dedicated team of students 
            under the guidance of faculty supervision. Our goal is to contribute to the field of 
            cybersecurity by creating a practical, accessible anomaly detection system.
          </p>
        </div>
      </section>

      {/* Project Background */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Project Background
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              This project was initiated as part of our academic curriculum to address real-world 
              challenges in security monitoring. We recognized that many organizations, particularly 
              smaller teams and educational institutions, lack access to sophisticated anomaly 
              detection tools.
            </p>
            <p>
              AnomAlert represents our effort to bridge this gap by developing a lightweight, 
              understandable, and effective system that can serve both as a practical security 
              tool and an educational resource for learning about threat detection concepts.
            </p>
            <p>
              Throughout the development process, we have focused on applying sound software 
              engineering principles, implementing proven detection methodologies, and ensuring 
              the system remains accessible to users with varying levels of technical expertise.
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

      {/* Academic Context */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Academic Context
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              AnomAlert was developed as a Final Year Project (FYP) with the objective of 
              creating a functional security monitoring solution while demonstrating competency 
              in software development, system design, and cybersecurity concepts.
            </p>
            <p>
              The project encompasses various technical domains including log analysis, 
              statistical anomaly detection, real-time data processing, and security dashboard 
              design. Each team member contributed their expertise to different aspects of the 
              system.
            </p>
            <p>
              We extend our gratitude to our supervisor and institution for providing the 
              resources, guidance, and academic environment that made this project possible.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

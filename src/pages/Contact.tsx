import { useState } from 'react';
import { Building2, Mail, Users, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    teamSize: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.teamSize.trim()) {
      newErrors.teamSize = 'Team size is required';
    } else if (isNaN(Number(formData.teamSize)) || Number(formData.teamSize) < 1) {
      newErrors.teamSize = 'Please enter a valid number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitted(true);
      toast({
        title: "Message Sent",
        description: "Your request has been received. We will respond within one business day.",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl font-semibold text-foreground mb-4">
              Request Received
            </h1>
            <p className="text-muted-foreground mb-8">
              Your message has been submitted. We will review your requirements and respond 
              within one business day with next steps.
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ companyName: '', email: '', teamSize: '' });
              }}
              variant="outline"
              className="border-border text-foreground hover:bg-secondary"
            >
              Submit Another Request
            </Button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Contact
          </h1>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              Use the form below to request access or ask questions about the platform. 
              Provide your organization name, contact email, and team size so we can 
              understand your requirements. We will respond within one business day to 
              discuss deployment options and answer technical questions.
            </p>
            <p>
              If you are evaluating the platform for your security operations, include 
              details about your current monitoring setup and what gaps you are trying 
              to address. This helps us provide relevant information about how AnomAlert 
              integrates with existing infrastructure and what data sources are supported.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-lg mx-auto">
          <div className="glass-card p-8">
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed mb-6">
              <p>
                Deployment typically involves installing agents on monitored endpoints and 
                configuring the central backend. Agent installation is automated and takes 
                less than five minutes per machine. The backend can be hosted on your 
                infrastructure or accessed through our managed service.
              </p>
              <p>
                After submitting this form, we will schedule a technical discussion to 
                review your environment, explain integration requirements, and answer 
                questions about data collection, retention, and analysis capabilities.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-foreground flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-muted-foreground" />
                  Organization Name
                </Label>
                <Input
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter your organization name"
                  className="bg-secondary/50 border-border focus:border-primary"
                />
                {errors.companyName && (
                  <p className="text-destructive text-sm">{errors.companyName}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your work email"
                  className="bg-secondary/50 border-border focus:border-primary"
                />
                {errors.email && (
                  <p className="text-destructive text-sm">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="teamSize" className="text-foreground flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  Number of Endpoints
                </Label>
                <Input
                  id="teamSize"
                  name="teamSize"
                  type="number"
                  min="1"
                  value={formData.teamSize}
                  onChange={handleChange}
                  placeholder="Approximate number of machines to monitor"
                  className="bg-secondary/50 border-border focus:border-primary"
                />
                {errors.teamSize && (
                  <p className="text-destructive text-sm">{errors.teamSize}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Send className="w-4 h-4 mr-2" />
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

import { Check, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Pricing = () => {
  const plans = [
    {
      name: 'Team Plan',
      price: '$200',
      members: 'Up to 20 Members',
      color: 'border-muted-foreground/30',
      features: [
        'Real-time data ingestion with delayed analysis',
        'Security events reviewed within 5 minutes',
        'Manual review of logs and activity records',
        'Basic user activity visibility across connected agents',
        'Access to historical logs with limited retention',
        'Alerts visible in dashboard without automated actions',
        'Suitable for small teams needing awareness, not automation',
        'Designed for low-volume environments',
      ],
    },
    {
      name: 'Growth Plan',
      price: '$500',
      members: 'Up to 50 Members',
      color: 'border-primary',
      featured: true,
      features: [
        'Faster event processing with priority queueing',
        'Security events reviewed within 3 minutes',
        'Improved log retention and higher data throughput',
        'Broader user activity tracking across agents',
        'Faster alert visibility with clearer event grouping',
        'Reduced delay between detection and operator response',
        'Supports moderate traffic and larger user bases',
        'Intended for teams actively monitoring daily operations',
      ],
    },
    {
      name: 'Enterprise Plan',
      price: 'Contact Us',
      members: 'Unlimited Members',
      color: 'border-destructive/50',
      features: [
        'Near real-time event handling',
        'Detection and response window within 1 minute',
        'Dedicated processing pipeline for high-volume data',
        'Extended log retention and full audit visibility',
        'Faster response coordination and escalation support',
        'Designed for continuous monitoring environments',
        'Adaptable to organization-specific requirements',
        'Scope and pricing defined based on deployment needs',
      ],
    },
  ];

  const faqs = [
    {
      question: 'What happens when I exceed my plan member limit?',
      answer: 'If you exceed the member limit for your plan, new agent installations will be queued until you upgrade or remove inactive agents. Existing agents will continue to function normally. We recommend upgrading before reaching capacity to ensure uninterrupted coverage.',
    },
    {
      question: 'How long is log data retained?',
      answer: 'Log retention varies by plan. The Team Plan includes 30 days of retention, Growth Plan provides 90 days, and Enterprise plans offer customizable retention periods based on your compliance requirements. Historical data beyond the retention period is archived and available upon request.',
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes, you can change plans at any time. Upgrades take effect immediately with prorated billing. Downgrades take effect at the start of your next billing cycle. Your data and configurations are preserved during plan changes.',
    },
    {
      question: 'What is included in the initial setup?',
      answer: 'All plans include agent deployment assistance, initial configuration review, and access to documentation. Growth and Enterprise plans include a dedicated onboarding session to review your security requirements and optimize detection rules for your environment.',
    },
    {
      question: 'How are security events reviewed?',
      answer: 'Events are processed by the analysis engine and prioritized by severity. Review times indicate maximum delay before an event is analyzed after ingestion. Higher-tier plans have faster processing pipelines and dedicated resources for reduced latency.',
    },
    {
      question: 'What support is included?',
      answer: 'Team Plan includes email support with 24-hour response time. Growth Plan adds priority email support and access to scheduled calls. Enterprise Plan includes dedicated support channels, faster response SLAs, and direct access to technical specialists.',
    },
    {
      question: 'Is there a free trial available?',
      answer: 'We offer a 14-day evaluation period for qualified organizations. Contact us to discuss your requirements and set up a trial deployment. Trial includes full feature access on the Growth Plan tier.',
    },
    {
      question: 'What operating systems are supported?',
      answer: 'The agent supports Windows 10 and later, Windows Server 2016 and later, and major Linux distributions including Ubuntu, CentOS, and Debian. macOS support is available in beta. Contact us for specific version requirements.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Pricing
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the plan that fits your organization's security monitoring needs. 
              All plans include access to the core platform with different levels of 
              processing speed and data retention.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`glass-card p-8 border-2 ${plan.color} ${
                  plan.featured ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold text-foreground mb-2">
                    {plan.name}
                  </h2>
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {plan.price}
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.members}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="block">
                  <Button className="w-full" variant={plan.featured ? 'default' : 'outline'}>
                    {plan.price === 'Contact Us' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="glass-card border border-border px-6"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Questions about pricing?
          </h2>
          <p className="text-muted-foreground mb-6">
            Reach out to discuss your requirements and find the right plan for your organization.
          </p>
          <Link to="/contact">
            <Button variant="outline">Contact Us</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
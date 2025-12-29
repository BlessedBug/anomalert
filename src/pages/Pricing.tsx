import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

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
import { Clock, DollarSign, Users, CheckCircle, Award } from 'lucide-react';
import Container from '../site/Container';

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: Award,
      title: 'Professional & Creative Work',
      description: 'High-quality designs and well-structured academic work',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Competitive rates that fit your budget',
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Quick turnaround time without compromising quality',
    },
    {
      icon: Users,
      title: 'Student-Friendly Service',
      description: 'Understanding and supportive approach for students',
    },
    {
      icon: CheckCircle,
      title: '100% Satisfaction Focus',
      description: 'We ensure you are completely satisfied with our work',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">Nath Cyber Cafe?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are committed to providing the best service experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card border rounded-xl p-6 hover:shadow-royal transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

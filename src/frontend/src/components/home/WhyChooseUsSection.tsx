import { CheckCircle, DollarSign, Users, Award } from 'lucide-react';
import Container from '../site/Container';

const features = [
  {
    icon: CheckCircle,
    title: 'Fast & Trusted Service',
    description: 'Quick turnaround time with reliable and professional service delivery',
  },
  {
    icon: DollarSign,
    title: 'Affordable Charges',
    description: 'Competitive pricing without compromising on quality',
  },
  {
    icon: Users,
    title: 'Proper Guidance',
    description: 'Expert assistance and support throughout your service journey',
  },
  {
    icon: Award,
    title: 'Customer Satisfaction Priority',
    description: 'Your satisfaction is our top priority, guaranteed quality work',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are committed to providing the best digital services with excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card border rounded-xl p-6 text-center hover:shadow-cyan transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

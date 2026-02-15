import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import Container from '../site/Container';
import { servicesData } from '../../content/services';

export default function ServicesPreviewSection() {
  return (
    <section className="py-20 bg-background">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to meet all your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((category, index) => (
            <div
              key={index}
              className="bg-card border rounded-xl p-6 hover:shadow-royal transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2 mb-6">
                {category.items.slice(0, 4).map((item, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    {item.name}
                  </li>
                ))}
                {category.items.length > 4 && (
                  <li className="text-sm text-primary font-medium">
                    +{category.items.length - 4} more services
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-all shadow-royal"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

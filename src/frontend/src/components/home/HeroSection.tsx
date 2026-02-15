import { Link } from '@tanstack/react-router';
import { ArrowRight, Phone } from 'lucide-react';
import Container from '../site/Container';

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Complete Digital & Online Services{' '}
              <span className="text-primary">Under One Roof</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Fast, Trusted & Affordable Services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-all shadow-royal hover:shadow-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Now
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-md border-2 border-primary px-8 py-3 text-base font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                View Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <img
              src="/assets/generated/hero-illustration.dim_1200x800.png"
              alt="Digital Services Illustration"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

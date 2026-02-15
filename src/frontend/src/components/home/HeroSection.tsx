import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import Container from '../site/Container';
import { socialLinks } from '../../config/socialLinks';

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Professional Graphic Design & Academic Project Solutions
            </h1>
            <p className="text-xl text-muted-foreground">
              Creative Designs & Neat Academic Work at Affordable Prices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-all shadow-royal hover:shadow-lg"
              >
                View Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border-2 border-primary px-8 py-3 text-base font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Contact Now
              </a>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <img
              src="/assets/generated/hero-illustration-v2.dim_1200x800.png"
              alt="Graphic Design & Academic Services"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

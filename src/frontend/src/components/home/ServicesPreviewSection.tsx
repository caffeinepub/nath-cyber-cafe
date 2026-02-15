import { Link } from '@tanstack/react-router';
import { ArrowRight, Palette, BookOpen, GraduationCap } from 'lucide-react';
import Container from '../site/Container';

export default function ServicesPreviewSection() {
  const serviceAreas = [
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Professional logo, resume, banner, poster, and social media designs',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: BookOpen,
      title: 'School Projects',
      description: 'Neat, well-structured and teacher-approved project files for all classes',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: GraduationCap,
      title: 'College Assignments',
      description: 'Proper formatting, plagiarism-free structured assignments for all streams',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional creative designs and academic support services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceAreas.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card border rounded-xl p-8 hover:shadow-royal transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 rounded-full ${service.bgColor} flex items-center justify-center mb-6`}>
                  <Icon className={`${service.color} w-8 h-8`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
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

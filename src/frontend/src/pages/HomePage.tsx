import Seo from '../seo/Seo';
import HeroSection from '../components/home/HeroSection';
import ServicesPreviewSection from '../components/home/ServicesPreviewSection';
import GallerySection from '../components/home/GallerySection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import Container from '../components/site/Container';
import WhatsAppButton from '../components/contact/WhatsAppButton';

export default function HomePage() {
  return (
    <>
      <Seo
        title="Home"
        description="Professional Graphic Design & Academic Project Solutions. Creative Designs & Neat Academic Work at Affordable Prices."
        path="/"
      />
      
      <HeroSection />
      <ServicesPreviewSection />
      <WhyChooseUsSection />
      <GallerySection />
      <TestimonialsSection />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Contact us today for professional graphic design and academic project services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton />
              <a
                href="#/contact"
                className="inline-flex items-center justify-center rounded-md border-2 border-primary-foreground px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

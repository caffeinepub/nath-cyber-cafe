import Seo from '../seo/Seo';
import Container from '../components/site/Container';
import ServiceCategoryGrid from '../components/services/ServiceCategoryGrid';

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Our Services"
        description="Professional Graphic Design Services, School Projects, and College Assignments. Creative designs and neat academic work at affordable prices."
        path="/services"
      />
      
      <section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional graphic design services, school projects, and college assignments tailored to your needs
            </p>
          </div>
        </Container>

        <ServiceCategoryGrid />

        {/* Additional Info Section */}
        <Container>
          <div className="mt-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-background border rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need a Custom Service?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Don't see what you're looking for? We offer customized solutions tailored to your specific needs. 
              Contact us to discuss your requirements.
            </p>
            <a
              href="#/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-all shadow-royal"
            >
              Get in Touch
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}

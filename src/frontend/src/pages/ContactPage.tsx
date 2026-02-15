import Seo from '../seo/Seo';
import Container from '../components/site/Container';
import ContactForm from '../components/contact/ContactForm';
import WhatsAppButton from '../components/contact/WhatsAppButton';
import MapEmbedPlaceholder from '../components/contact/MapEmbedPlaceholder';
import { cafeInfo } from '../config/cafeInfo';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Us"
        description={`Get in touch with Nath Cyber Cafe for graphic design and academic services. Call us at ${cafeInfo.phone} or WhatsApp at ${cafeInfo.whatsapp}.`}
        path="/contact"
      />
      
      <section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions or need assistance? We're here to help! Reach out to us through any of the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-card border rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Nath Cyber Cafe</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone Numbers</h3>
                      <p className="text-muted-foreground">9435212145 / 9126026463</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Mail className="text-secondary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">{cafeInfo.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <MapPin className="text-accent" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">{cafeInfo.address}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <h3 className="font-semibold mb-4">Quick Contact</h3>
                  <WhatsAppButton />
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-background border rounded-xl p-6">
                <h3 className="font-semibold mb-3">Business Hours</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Saturday:</span>
                    <span className="font-medium text-foreground">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium text-foreground">10:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>

          {/* Map */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Find Us Here</h2>
            <MapEmbedPlaceholder />
          </div>
        </Container>
      </section>
    </>
  );
}

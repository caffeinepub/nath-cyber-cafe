import Seo from '../seo/Seo';
import Container from '../components/site/Container';
import { CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about Nath Cyber Cafe - your trusted digital service center providing fast, reliable, and affordable services."
        path="/about"
      />
      
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              About <span className="text-primary">Nath Cyber Cafe</span>
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-card border rounded-xl p-8 mb-8 shadow-sm">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Welcome to <strong className="text-foreground">Nath Cyber Cafe</strong>, your trusted digital service center 
                  providing comprehensive online and offline services under one roof. We are committed to delivering 
                  fast, reliable, and affordable solutions for all your digital needs.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  With years of experience in the digital services industry, we have built a reputation for excellence 
                  and customer satisfaction. Our team of skilled professionals is dedicated to helping you navigate 
                  the digital world with ease, whether it's government form filling, graphic design, or educational support.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Nath Cyber Cafe, we understand the importance of timely and accurate service delivery. That's why 
                  we prioritize quality, affordability, and customer guidance in everything we do. Your satisfaction is 
                  our success.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="text-primary" />
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground">
                    To provide accessible, affordable, and high-quality digital services that empower individuals 
                    and businesses to achieve their goals efficiently.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-secondary/10 to-primary/10 border rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="text-secondary" />
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground">
                    To become the most trusted and preferred digital service center, known for excellence, 
                    innovation, and unwavering commitment to customer satisfaction.
                  </p>
                </div>
              </div>

              <div className="mt-12 bg-card border rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Professional Expertise:</strong>
                      <span className="text-muted-foreground"> Experienced team with in-depth knowledge of digital services</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Fast Turnaround:</strong>
                      <span className="text-muted-foreground"> Quick and efficient service delivery without compromising quality</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Affordable Pricing:</strong>
                      <span className="text-muted-foreground"> Competitive rates that fit your budget</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Customer Support:</strong>
                      <span className="text-muted-foreground"> Dedicated assistance and guidance throughout your service journey</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

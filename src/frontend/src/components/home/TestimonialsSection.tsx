import Container from '../site/Container';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'College Student',
      text: 'Excellent service! They helped me with my college assignment and the quality was outstanding. Delivered on time with proper formatting.',
      rating: 5,
    },
    {
      name: 'Rahul Kumar',
      role: 'School Teacher',
      text: 'I recommend Nath Cyber Cafe to all my students for their project work. The projects are always neat, well-structured, and teacher-approved.',
      rating: 5,
    },
    {
      name: 'Anjali Devi',
      role: 'Small Business Owner',
      text: 'Got my business logo and visiting cards designed here. Very professional work at affordable prices. Highly satisfied with their creative designs!',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border rounded-xl p-6 hover:shadow-royal transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

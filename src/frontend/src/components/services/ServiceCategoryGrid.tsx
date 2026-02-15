import Container from '../site/Container';
import { servicesData } from '../../content/services';
import { socialLinks } from '../../config/socialLinks';
import { MessageCircle } from 'lucide-react';

export default function ServiceCategoryGrid() {
  const handleOrderNow = (serviceName: string) => {
    const message = encodeURIComponent(`Hi, I'm interested in ${serviceName}. Please provide more details.`);
    const whatsappUrl = `${socialLinks.whatsapp}?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Container>
      <div className="space-y-16">
        {servicesData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-6">
            {/* Category Header */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <span className="text-4xl">{category.icon}</span>
              </div>
              <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
              {category.description && (
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {category.description}
                </p>
              )}
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-card border rounded-xl p-6 hover:shadow-royal transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {item.description}
                  </p>
                  <div className="space-y-3">
                    <p className="text-primary font-semibold">{item.price}</p>
                    <button
                      onClick={() => handleOrderNow(item.name)}
                      className="w-full inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Order Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

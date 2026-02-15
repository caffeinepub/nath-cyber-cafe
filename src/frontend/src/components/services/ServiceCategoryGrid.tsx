import Container from '../site/Container';
import { servicesData } from '../../content/services';

export default function ServiceCategoryGrid() {
  return (
    <Container>
      <div className="space-y-12">
        {servicesData.map((category, index) => (
          <div
            key={index}
            className="bg-card border rounded-xl p-8 shadow-sm hover:shadow-royal transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">{category.icon}</div>
              <h3 className="text-2xl font-bold">{category.title}</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span className="text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

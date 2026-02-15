import { useEffect } from 'react';
import { cafeInfo } from '../config/cafeInfo';

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
}

export default function Seo({ title, description, path = '' }: SeoProps) {
  const fullTitle = title ? `${title} | ${cafeInfo.name}` : cafeInfo.name;
  const defaultDescription = 'Professional Graphic Design & Academic Project Solutions. Creative Designs & Neat Academic Work at Affordable Prices. Specializing in graphic design services, school projects, and college assignments.';
  const metaDescription = description || defaultDescription;
  const url = `${window.location.origin}${path}`;

  useEffect(() => {
    document.title = fullTitle;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    updateMetaTag('description', metaDescription);
    
    // Open Graph tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', metaDescription, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', url, true);
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', metaDescription);

    // LocalBusiness JSON-LD
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: cafeInfo.name,
      description: metaDescription,
      telephone: cafeInfo.phoneNumbers[0],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Your City',
        addressRegion: 'Your State',
        addressCountry: 'IN',
      },
      url: window.location.origin,
      priceRange: '$$',
      openingHours: 'Mo-Su 09:00-20:00',
    });
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [fullTitle, metaDescription, url]);

  return null;
}

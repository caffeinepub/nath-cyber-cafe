import { useState } from 'react';
import Container from '../site/Container';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ZoomIn } from 'lucide-react';

export default function GallerySection() {
  const galleryImages = [
    {
      src: '/assets/generated/gallery-01.dim_1200x900.png',
      alt: 'Graphic Design Work Sample 1',
    },
    {
      src: '/assets/generated/gallery-02.dim_1200x900.png',
      alt: 'Graphic Design Work Sample 2',
    },
    {
      src: '/assets/generated/gallery-03.dim_1200x900.png',
      alt: 'Graphic Design Work Sample 3',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a look at some of our recent creative projects and designs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="group relative overflow-hidden rounded-xl border bg-card cursor-pointer hover:shadow-royal transition-all duration-300">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8" />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto rounded-lg"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </Container>
    </section>
  );
}

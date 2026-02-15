import { SiFacebook, SiX, SiInstagram, SiLinkedin, SiYoutube } from 'react-icons/si';
import { MessageCircle, Heart } from 'lucide-react';
import Container from './Container';
import { cafeInfo } from '../../config/cafeInfo';
import { socialLinks } from '../../config/socialLinks';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'nath-cyber-cafe'
  );

  return (
    <footer className="border-t bg-muted/30">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/assets/generated/logo.dim_512x512.png"
                alt="Nath Cyber Cafe"
                className="h-10 w-10"
              />
              <span className="text-lg font-bold text-primary">{cafeInfo.name}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Complete Digital & Online Services Under One Roof. Fast, Trusted & Affordable Services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#/jobs" className="text-muted-foreground hover:text-primary transition-colors">
                  Government Jobs
                </a>
              </li>
              <li>
                <a href="#/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>📞 {cafeInfo.phone}</li>
              <li>
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-primary transition-colors"
                >
                  <MessageCircle size={16} />
                  WhatsApp: {cafeInfo.whatsapp}
                </a>
              </li>
              <li>✉️ {cafeInfo.email}</li>
            </ul>
            <div className="flex items-center space-x-4 mt-4">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook size={20} />
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <SiX size={20} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram size={20} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <SiLinkedin size={20} />
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <SiYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t py-6 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} {cafeInfo.name}. All rights reserved.
          </p>
          <p className="mt-2 flex items-center justify-center gap-1">
            Built with <Heart className="h-4 w-4 text-destructive fill-destructive" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}

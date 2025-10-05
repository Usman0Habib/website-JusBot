import { Scale, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-foreground text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold" data-testid="text-footer-brand">JusBot</span>
            </div>
            <p className="text-white/70 text-sm mb-4" data-testid="text-footer-description">
              AI-powered legal guidance for everyone. Making legal information accessible and understandable.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                data-testid="link-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Product Column */}
          <div>
            <h4 className="font-bold text-lg mb-4" data-testid="text-footer-product-title">Product</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#features" 
                  onClick={(e) => handleSmoothScroll(e, '#features')}
                  className="text-white/70 hover:text-white transition-colors"
                  data-testid="link-footer-features"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  onClick={(e) => handleSmoothScroll(e, '#pricing')}
                  className="text-white/70 hover:text-white transition-colors"
                  data-testid="link-footer-pricing"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white/70 hover:text-white transition-colors"
                  data-testid="link-footer-how-it-works"
                >
                  How it Works
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white/70 hover:text-white transition-colors"
                  data-testid="link-footer-use-cases"
                >
                  Use Cases
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div>
            <h4 className="font-bold text-lg mb-4" data-testid="text-footer-company-title">Company</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleSmoothScroll(e, '#about')}
                  className="text-white/70 hover:text-white transition-colors"
                  data-testid="link-footer-about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white/70 hover:text-white transition-colors"
                  data-testid="link-footer-mission"
                >
                  Our Mission
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white/70 hover:text-white transition-colors"
                  data-testid="link-footer-sdg"
                >
                  SDG Contribution
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white/70 hover:text-white transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources Column */}
          <div>
            <h4 className="font-bold text-lg mb-4" data-testid="text-footer-resources-title">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-white/70 hover:text-white transition-colors"
                  data-testid="link-footer-blog"
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="#help" 
                  onClick={(e) => handleSmoothScroll(e, '#help')}
                  className="text-white/70 hover:text-white transition-colors"
                  data-testid="link-footer-help"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white/70 hover:text-white transition-colors"
                  data-testid="link-footer-faq"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white/70 hover:text-white transition-colors"
                  data-testid="link-footer-guides"
                >
                  Legal Guides
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm" data-testid="text-footer-copyright">
              © 2024 JusBot. Built by students from Good Samaritan School, New Delhi.
            </p>
            <div className="flex space-x-6 text-sm">
              <a 
                href="#" 
                className="text-white/60 hover:text-white transition-colors"
                data-testid="link-footer-privacy"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-white/60 hover:text-white transition-colors"
                data-testid="link-footer-terms"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-white/60 hover:text-white transition-colors"
                data-testid="link-footer-cookies"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

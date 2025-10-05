import { useState } from "react";
import { Scale, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">JusBot</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              onClick={(e) => handleSmoothScroll(e, '#features')}
              className="text-foreground/80 hover:text-primary transition-colors"
              data-testid="nav-features"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => handleSmoothScroll(e, '#pricing')}
              className="text-foreground/80 hover:text-primary transition-colors"
              data-testid="nav-pricing"
            >
              Pricing
            </a>
            <a 
              href="#help" 
              onClick={(e) => handleSmoothScroll(e, '#help')}
              className="text-foreground/80 hover:text-primary transition-colors"
              data-testid="nav-help"
            >
              Help
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleSmoothScroll(e, '#about')}
              className="text-foreground/80 hover:text-primary transition-colors"
              data-testid="nav-about"
            >
              About
            </a>
          </div>
          
          <button 
            className="btn-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hidden md:block"
            data-testid="button-get-started-nav"
          >
            Get Started
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#features" 
                onClick={(e) => handleSmoothScroll(e, '#features')}
                className="text-foreground/80 hover:text-primary transition-colors"
                data-testid="nav-features-mobile"
              >
                Features
              </a>
              <a 
                href="#pricing" 
                onClick={(e) => handleSmoothScroll(e, '#pricing')}
                className="text-foreground/80 hover:text-primary transition-colors"
                data-testid="nav-pricing-mobile"
              >
                Pricing
              </a>
              <a 
                href="#help" 
                onClick={(e) => handleSmoothScroll(e, '#help')}
                className="text-foreground/80 hover:text-primary transition-colors"
                data-testid="nav-help-mobile"
              >
                Help
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleSmoothScroll(e, '#about')}
                className="text-foreground/80 hover:text-primary transition-colors"
                data-testid="nav-about-mobile"
              >
                About
              </a>
              <button 
                className="btn-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold w-full"
                data-testid="button-get-started-mobile"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

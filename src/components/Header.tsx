import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Tennis-inspired logo symbol */}
          <div className="relative w-10 h-10 flex items-center justify-center">
            {/* Tennis racket crossing lines */}
            <div className="absolute w-8 h-8 flex items-center justify-center">
              {/* Black diagonal line */}
              <div className="absolute w-6 h-1.5 bg-foreground rounded-full transform rotate-45"></div>
              {/* Blue diagonal line */}
              <div className="absolute w-6 h-1.5 bg-primary rounded-full transform -rotate-45"></div>
              {/* Small accent dots */}
              <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-primary rounded-full"></div>
              <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-foreground rounded-full"></div>
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-foreground rounded-full"></div>
              <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-primary rounded-full"></div>
            </div>
          </div>
          <span className="text-xl font-bold text-foreground">
            <span className="text-primary">AI</span>ceFlow
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How It Works</a>
          <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
        </nav>

        <Button variant="cta" size="lg">
          Schedule Consultation
        </Button>
      </div>
    </header>
  );
};

export default Header;
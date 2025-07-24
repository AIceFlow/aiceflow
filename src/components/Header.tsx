import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">AF</span>
          </div>
          <span className="text-xl font-bold text-foreground">AIceFlow</span>
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
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Professional overlay */}
      <div className="absolute inset-0 bg-gradient-hero-overlay"></div>
      
      {/* Subtle tennis court inspired grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 0%, transparent 49%, hsl(var(--primary) / 0.1) 49%, hsl(var(--primary) / 0.1) 51%, transparent 51%, transparent 100%),
            linear-gradient(0deg, transparent 0%, transparent 49%, hsl(var(--primary) / 0.1) 49%, hsl(var(--primary) / 0.1) 51%, transparent 51%, transparent 100%)
          `,
          backgroundSize: '120px 120px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Smarter Processes,
              <span className="block text-transparent bg-clip-text bg-gradient-primary">
                Powered by AI
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Transform your business with cutting-edge AI automation. Custom solutions that deliver real-world results for your unique processes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Schedule Your Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary/20 text-foreground hover:bg-primary/5">
                View Our Work
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-8 mt-12 text-muted-foreground">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm">Processes Automated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">99%</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm">AI Operations</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img 
                src={heroImage} 
                alt="AI Process Automation" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl blur-3xl scale-110 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
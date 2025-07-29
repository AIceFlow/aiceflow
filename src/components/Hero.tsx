import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-hero-overlay"></div>

      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full animate-float"
          style={{
            backgroundImage: `
            linear-gradient(90deg, transparent 0%, transparent 49%, hsl(var(--primary) / 0.1) 49%, hsl(var(--primary) / 0.1) 51%, transparent 51%, transparent 100%),
            linear-gradient(0deg, transparent 0%, transparent 49%, hsl(var(--primary) / 0.1) 49%, hsl(var(--primary) / 0.1) 51%, transparent 51%, transparent 100%)
          `,
            backgroundSize: "120px 120px",
          }}
        ></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-primary/5 rounded-full animate-float"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-primary/10 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-8 h-8 bg-primary/15 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              {t("hero.title").split(",")[0]},
              <span className="block text-transparent bg-clip-text bg-gradient-primary animate-scale-in">
                Powered by AI
              </span>
            </h1>
          </div>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-1">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-delay-2">
            <Button
              variant="cta"
              size="lg"
              className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
            >
              {t("hero.cta.primary")}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-primary/20 text-foreground hover:bg-primary/5 hover:scale-105 transition-all duration-300"
            >
              {t("hero.cta.secondary")}
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-delay-3">
            <div className="text-center p-6 rounded-xl bg-card/50 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 border border-border">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">
                {t("hero.stats.processes")}
              </div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card/50 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 border border-border">
              <div className="text-3xl font-bold text-primary mb-2">99%</div>
              <div className="text-sm text-muted-foreground">
                {t("hero.stats.satisfaction")}
              </div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card/50 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 border border-border">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">
                {t("hero.stats.operations")}
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 bg-card/30 rounded-2xl border border-border backdrop-blur-sm animate-slide-up">
            <div className="flex items-center justify-center space-x-4 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">{t("hero.status.available")}</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm">{t("hero.status.location")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

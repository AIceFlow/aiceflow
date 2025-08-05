import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { Globe } from "lucide-react";
import horizontalLogo from "@/assets/logo/horizontal-full.png";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={horizontalLogo}
            alt="AIceFlow Logo"
            className="h-8 w-auto"
          />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {t("nav.about")}
          </a>
          <a
            href="#services"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {t("nav.services")}
          </a>
          <a
            href="#how-it-works"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {t("nav.how-it-works")}
          </a>
          {/* <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.testimonials')}</a> */}
          <a
            href="#contact"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {t("nav.contact")}
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setLanguage(language === "en" ? "de" : "en")}
            className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">
              {language.toUpperCase()}
            </span>
          </button>

          <Button
            variant="cta"
            size="lg"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {t("header.cta")}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

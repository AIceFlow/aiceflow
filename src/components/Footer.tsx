import { useLanguage } from "@/hooks/useLanguage";
import { Linkedin } from "lucide-react";
import React from "react";
import horizontalLogo from "@/assets/logo/horizontal-full.png";
import ImpressumModal from "./Impressum";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const [impressumOpen, setImpressumOpen] = React.useState(false);
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src={horizontalLogo} alt="AIceFlow" className="w-48" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {t("footer.company.description")}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/aiceflow/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="text-white w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">
              {t("footer.nav.services.title")}
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  {t("footer.nav.services.processAutomation")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  {t("footer.nav.services.customDashboards")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  {t("footer.nav.services.consultation")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  {t("footer.nav.services.implementation")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  {t("footer.nav.services.support")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">
              {t("footer.nav.company.title")}
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {t("footer.nav.company.about")}
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  {t("footer.nav.company.team")}
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-white transition-colors"
                >
                  {t("footer.nav.company.testimonials")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  {t("footer.nav.company.contact")}
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="hover:text-white transition-colors"
                >
                  {t("footer.nav.company.careers")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              {t("footer.copy")} | {t("footer.tagline")}
            </p>
            <div className="flex space-x-6 text-sm text-gray-300">
              <ImpressumModal
                open={impressumOpen}
                onOpenChange={setImpressumOpen}
              >
                <a className=" cursor-pointer">{t("footer.policies.imprint")}</a>
              </ImpressumModal>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

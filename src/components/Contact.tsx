import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/hooks/useLanguage";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("contact.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              {t("contact.form.title")}
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.firstNameLabel")} *
                  </label>
                  <Input
                    placeholder={t("contact.form.firstNamePlaceholder")}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.lastNameLabel")} *
                  </label>
                  <Input
                    placeholder={t("contact.form.lastNamePlaceholder")}
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.form.emailLabel")} *
                </label>
                <Input
                  type="email"
                  placeholder={t("contact.form.emailPlaceholder")}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.form.companyLabel")}
                </label>
                <Input
                  placeholder={t("contact.form.companyPlaceholder")}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.form.phoneLabel")}
                </label>
                <Input
                  placeholder={t("contact.form.phonePlaceholder")}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.form.needsLabel")} *
                </label>
                <Textarea
                  placeholder={t("contact.form.needsPlaceholder")}
                  rows={4}
                  className="w-full"
                />
              </div>
              <Button variant="cta" size="lg" className="w-full">
                {t("contact.form.submit")}
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                {t("contact.form.requiredNote")}
              </p>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-primary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                {t("contact.info.title")}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      {t("contact.info.office.title")}
                    </h4>
                    <p className="text-blue-100">
                      {t("contact.info.office.line1")}
                      <br />
                      {t("contact.info.office.line2")}
                      <br />
                      {t("contact.info.office.line3")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      {t("contact.info.email.title")}
                    </h4>
                    <p className="text-blue-100">
                      {t("contact.info.email.address")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      {t("contact.info.phone.title")}
                    </h4>
                    <p className="text-blue-100">
                      {t("contact.info.phone.number")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      {t("contact.info.hours.title")}
                    </h4>
                    <p className="text-blue-100">
                      {t("contact.info.hours.line1")}
                      <br />
                      {t("contact.info.hours.line2")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">
                {t("contact.actions.title")}
              </h3>
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  {t("contact.actions.discovery")}
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  {t("contact.actions.download")}
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  {t("contact.actions.proposal")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

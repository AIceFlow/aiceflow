import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/hooks/useLanguage";
import {
  MapPin,
  Mail,
  Phone,
  Loader2,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

import { reportFormSubmitConversion } from "../utils/analytics";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  needs: string;
};

type SubmissionStatus = "idle" | "loading" | "success" | "error";

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const initialFormData: FormData = {
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    needs: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    // Map React state (camelCase) to Supabase table columns (snake_case)
    const submissionData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      company: formData.company || null, // Use null for optional fields if empty
      phone: formData.phone || null,
      needs: formData.needs,
    };

    const { error } = await supabase
      .from("contact_requests")
      .insert([submissionData]);

    if (error) {
      setStatus("error");
      setErrorMessage(
        t("contact.form.error") ||
          "An unexpected error occurred. Please try again."
      );
      console.error("Supabase submission error:", error.message);
    } else {
      reportFormSubmitConversion();
      setStatus("success");
      setFormData(initialFormData); // Reset form on success
    }
  };

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
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full text-center bg-green-50 dark:bg-green-900/20 rounded-lg p-8 min-h-[500px]">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {t("contact.form.successTitle")}
                </h3>
                <p className="text-muted-foreground">
                  {t("contact.form.successMessage")}
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setStatus("idle")}
                >
                  {t("contact.form.sendAnother")}
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {t("contact.form.title")}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        {t("contact.form.firstNameLabel")} *
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder={t("contact.form.firstNamePlaceholder")}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        {t("contact.form.lastNameLabel")} *
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder={t("contact.form.lastNamePlaceholder")}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {t("contact.form.emailLabel")} *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t("contact.form.emailPlaceholder")}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {t("contact.form.companyLabel")}
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder={t("contact.form.companyPlaceholder")}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {t("contact.form.phoneLabel")}
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={t("contact.form.phonePlaceholder")}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="needs"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {t("contact.form.needsLabel")} *
                    </label>
                    <Textarea
                      id="needs"
                      name="needs"
                      value={formData.needs}
                      onChange={handleInputChange}
                      placeholder={t("contact.form.needsPlaceholder")}
                      rows={4}
                      required
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center space-x-2 text-sm text-destructive bg-destructive/10 p-3 rounded-md">
                      <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    className="w-full "
                    disabled={status === "loading"}
                  >
                    {status === "loading" && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    {status === "loading"
                      ? t("contact.form.submitting")
                      : t("contact.form.submit")}
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    {t("contact.form.requiredNote")}
                  </p>
                </form>
              </>
            )}
          </div>

          <div className="space-y-8">
            {/* The right-side info column remains unchanged */}
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
                {/* <div className="flex items-start space-x-4">
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
                </div> */}
              </div>
            </div>
            {/* <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">
                {t("contact.actions.title")}
              </h3>
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  {t("contact.actions.discovery")}
                </Button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

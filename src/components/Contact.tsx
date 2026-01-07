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
  ArrowRight
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

    const submissionData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      company: formData.company || null,
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
      reportFormSubmitConversion(submissionData.email);
      setStatus("success");
      setFormData(initialFormData);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
       {/* Decorative Background */}
       <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto bg-white/50 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/20 overflow-hidden">
           <div className="flex flex-col lg:flex-row">
              
              {/* Left Column: Info & Context */}
              <div className="lg:w-2/5 bg-slate-900 p-10 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden">
                 {/* Abstract Shapes */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[60px] pointer-events-none"></div>
                 
                 <div className="relative z-10">
                   <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                     {t("contact.title")}
                   </h2>
                   <p className="text-slate-400 text-lg mb-12">
                     {t("contact.description")}
                   </p>
                   
                   <div className="space-y-8">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-white/10 rounded-xl text-primary">
                          <Mail size={20} />
                        </div>
                        <div>
                          <div className="font-semibold text-white mb-1">{t("contact.info.email.title")}</div>
                          <div className="text-slate-300">{t("contact.info.email.address")}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-white/10 rounded-xl text-primary">
                          <Phone size={20} />
                        </div>
                        <div>
                          <div className="font-semibold text-white mb-1">{t("contact.info.phone.title")}</div>
                          <div className="text-slate-300">{t("contact.info.phone.number")}</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-white/10 rounded-xl text-primary">
                          <MapPin size={20} />
                        </div>
                        <div>
                          <div className="font-semibold text-white mb-1">{t("contact.info.office.title")}</div>
                          <div className="text-slate-300">
                             {t("contact.info.office.line1")}<br/>
                             {t("contact.info.office.line2")}
                          </div>
                        </div>
                      </div>
                   </div>
                 </div>
                 
                 {/* Bottom decoration */}
                 <div className="mt-12 pt-12 border-t border-white/10">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                       <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                       Typically replies in 2 hours
                    </div>
                 </div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:w-3/5 p-10 lg:p-16 bg-white/50">
                 {status === "success" ? (
                    <div className="h-full flex flex-col items-center justify-center text-center p-8">
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle size={40} />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">{t("contact.form.successTitle")}</h3>
                      <p className="text-muted-foreground mb-8 max-w-md mx-auto">{t("contact.form.successMessage")}</p>
                      <Button variant="outline" onClick={() => setStatus("idle")}>
                        {t("contact.form.sendAnother")}
                      </Button>
                    </div>
                 ) : (
                   <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground/80">{t("contact.form.firstNameLabel")} *</label>
                            <Input 
                              name="firstName" 
                              value={formData.firstName} 
                              onChange={handleInputChange} 
                              required 
                              className="bg-white/50 border-gray-200 focus:border-primary focus:ring-primary/20 h-12"
                              placeholder={t("contact.form.firstNamePlaceholder")}
                            />
                         </div>
                         <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground/80">{t("contact.form.lastNameLabel")} *</label>
                            <Input 
                              name="lastName" 
                              value={formData.lastName} 
                              onChange={handleInputChange} 
                              required 
                              className="bg-white/50 border-gray-200 focus:border-primary focus:ring-primary/20 h-12"
                              placeholder={t("contact.form.lastNamePlaceholder")}
                            />
                         </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground/80">{t("contact.form.emailLabel")} *</label>
                        <Input 
                          name="email" 
                          type="email"
                          value={formData.email} 
                          onChange={handleInputChange} 
                          required 
                          className="bg-white/50 border-gray-200 focus:border-primary focus:ring-primary/20 h-12"
                          placeholder={t("contact.form.emailPlaceholder")}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground/80">{t("contact.form.companyLabel")}</label>
                            <Input 
                              name="company" 
                              value={formData.company} 
                              onChange={handleInputChange} 
                              className="bg-white/50 border-gray-200 focus:border-primary focus:ring-primary/20 h-12"
                              placeholder={t("contact.form.companyPlaceholder")}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground/80">{t("contact.form.phoneLabel")}</label>
                            <Input 
                              name="phone" 
                              value={formData.phone} 
                              onChange={handleInputChange} 
                              className="bg-white/50 border-gray-200 focus:border-primary focus:ring-primary/20 h-12"
                              placeholder={t("contact.form.phonePlaceholder")}
                            />
                        </div>
                      </div>

                      <div className="space-y-2">
                         <label className="text-sm font-medium text-foreground/80">{t("contact.form.needsLabel")} *</label>
                         <Textarea 
                            name="needs" 
                            value={formData.needs} 
                            onChange={handleInputChange} 
                            required 
                            rows={4}
                            className="bg-white/50 border-gray-200 focus:border-primary focus:ring-primary/20 resize-none"
                            placeholder={t("contact.form.needsPlaceholder")}
                         />
                      </div>

                      {status === "error" && (
                        <div className="p-4 bg-red-50 text-red-600 rounded-lg flex items-center gap-3">
                          <AlertTriangle size={20} />
                          <p className="text-sm">{errorMessage}</p>
                        </div>
                      )}

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full h-14 text-lg bg-slate-900 hover:bg-slate-800 text-white shadow-lg"
                        disabled={status === "loading"}
                      >
                         {status === "loading" ? (
                           <Loader2 className="w-5 h-5 animate-spin mr-2" />
                         ) : (
                           <span className="flex items-center gap-2">
                             {t("contact.form.submit")} <ArrowRight size={18} />
                           </span>
                         )}
                      </Button>
                      <p className="text-center text-xs text-muted-foreground mt-4">
                        {t("contact.form.requiredNote")}
                      </p>
                   </form>
                 )}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
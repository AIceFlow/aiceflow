import { useLanguage } from "@/hooks/useLanguage";
import React from "react";
import { motion } from "framer-motion";
import { 
  MessageSquare, 
  FileSpreadsheet, 
  LineChart, 
  ArrowUpRight 
} from "lucide-react";

const ServiceCard = ({ 
  title, 
  description, 
  features, 
  icon: Icon, 
  className,
  delay 
}: { 
  title: string, 
  description: string, 
  features: string[], 
  icon: any, 
  className?: string,
  delay: number
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={`group relative overflow-hidden rounded-3xl bg-white p-8 shadow-card border border-border hover:shadow-elegant transition-all duration-300 ${className}`}
  >
    <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
      <ArrowUpRight className="w-6 h-6 text-primary" />
    </div>
    
    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
      <Icon className="h-6 w-6" />
    </div>

    <h3 className="mb-3 text-2xl font-bold text-foreground">{title}</h3>
    <p className="mb-6 text-muted-foreground leading-relaxed">
      {description}
    </p>

    <ul className="space-y-2">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center text-sm text-foreground/80">
          <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
          {feature}
        </li>
      ))}
    </ul>

    {/* Decorative Gradient Blob */}
    <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
  </motion.div>
);

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t("services.processAutomation.title"),
      description: t("services.processAutomation.description"),
      features: [
        t("services.processAutomation.feature1"),
        t("services.processAutomation.feature2"),
        t("services.processAutomation.feature3"),
        t("services.processAutomation.feature4"),
      ],
      icon: MessageSquare,
      className: "md:col-span-2 bg-gradient-to-br from-white to-blue-50/50",
    },
    {
      title: t("services.dashboards.title"),
      description: t("services.dashboards.description"),
      features: [
        t("services.dashboards.feature1"),
        t("services.dashboards.feature2"),
        t("services.dashboards.feature3"),
        t("services.dashboards.feature4"),
      ],
      icon: FileSpreadsheet,
      className: "md:col-span-1 bg-white",
    },
    {
      title: t("services.consultation.title"),
      description: t("services.consultation.description"),
      features: [
        t("services.consultation.feature1"),
        t("services.consultation.feature2"),
        t("services.consultation.feature3"),
        t("services.consultation.feature4"),
      ],
      icon: LineChart,
      className: "md:col-span-3 bg-gradient-to-r from-white to-blue-50/30 flex flex-col md:flex-row md:items-center md:justify-between gap-8",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[500px] bg-gradient-to-b from-transparent via-primary/5 to-transparent -skew-y-3 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 max-w-2xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("services.title")}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-primary rounded-full mb-6 mx-auto"></div>
          <p className="text-xl text-muted-foreground">
            {t("services.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Item 1: Span 2 */}
          <ServiceCard 
            {...services[0]} 
            delay={0.1}
          />
          
          {/* Item 2: Span 1 */}
          <ServiceCard 
            {...services[1]} 
            delay={0.2}
          />

          {/* Item 3: Span 3 (Full width) - Special layout inside */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="md:col-span-3 group relative overflow-hidden rounded-3xl bg-white p-8 md:p-10 shadow-card border border-border hover:shadow-elegant transition-all duration-300"
          >
             <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
               <ArrowUpRight className="w-6 h-6 text-primary" />
             </div>
             
             <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="flex-1">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <LineChart className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-foreground">{services[2].title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-xl">
                    {services[2].description}
                  </p>
                </div>
                
                <div className="flex-1 w-full bg-accent/30 rounded-2xl p-6">
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services[2].features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-foreground/80">
                        <div className="mr-3 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                   </ul>
                </div>
             </div>
             
             <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-tr from-primary/10 to-transparent blur-3xl group-hover:scale-125 transition-transform duration-500"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import Showcase from "@/components/Showcase";
import WhyAIceFlow from "@/components/WhyAIceFlow";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <Industries />
      {/* <Testimonials /> */}
      <Showcase />
      <WhyAIceFlow />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

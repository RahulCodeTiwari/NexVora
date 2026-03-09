import Hero from "../components/home/Hero";
import ServicesSection from "../components/home/ServicesSection";
import Solutions from "../components/home/Solutions";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CaseStudies from "../components/home/CaseStudies";
import Clients from "../components/home/Clients";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-slate-950 to-slate-800">

      <Hero />

      <ServicesSection />

      <Solutions />

      <WhyChooseUs />

      <CaseStudies />

      <Clients />

      <Testimonials />

      <CTA />

    </div>
  );
};

export default Home;
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PracticeAreas from "../components/PracticeAreas";
import Team from "../components/Team";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <PracticeAreas />
      <WhyUs />
      <Testimonials />
      <Team />
      <div className="mt-auto">
      <Footer />
      </div>
    </div>
  );
};

export default Index;
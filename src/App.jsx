import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Inputs from "./Inputs";
import BentoGrid from "./BentoGrid";
import CTA from "./CTA";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="bg-[#F7FFFA] font-JakartaRegular">
      <Navbar />
      <Hero />
      <Inputs />
      <BentoGrid />
      <CTA />
      <Footer />
    </div>
  );
}

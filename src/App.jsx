import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Inputs from "./Inputs";
import BentoGrid from "./BentoGrid";
import CTA from "./CTA";
import Footer from "./Footer";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("Your Name");
  const [job, setJob] = useState("Frontend Developer");

  return (
    <div className="bg-[#F7FFFA] font-JakartaRegular">
      <Navbar />
      <Hero />
      <Inputs name={name} onSetName={setName} job={job} onSetJob={setJob} />
      <BentoGrid name={name} job={job} />
      <CTA />
      <Footer />
    </div>
  );
}

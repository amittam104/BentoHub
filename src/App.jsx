import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Inputs from "./Inputs";
import BentoGrid from "./BentoGrid";
import CTA from "./CTA";
import Footer from "./Footer";
import { useState } from "react";
import { Form } from "./Form";
import { Form2 } from "./Form2";

export default function App() {
  const [name, setName] = useState("Your Name");
  const [job, setJob] = useState("Frontend Developer");
  const [portfolio, setPortfolio] = useState("myportfolio.com");
  const [intro, setIntro] = useState("A brief intro about you goes here.");
  const [primarySkill, setPrimarySkill] = useState("Web Development");
  const [secondarySkill, setSecondarySkill] = useState("Web Design");
  const [tertiarySkill, setTertiarySkill] = useState("Graphics Design");
  const [secondStep, setSecondStep] = useState(true);

  function handleSecondStep() {
    setSecondStep(true);
  }

  return (
    <div className="bg-[#F7FFFA] font-JakartaRegular">
      <Navbar />
      <Hero />
      <Inputs>
        {!secondStep ? (
          <Form
            name={name}
            onSetName={setName}
            job={job}
            onSetJob={setJob}
            portfolio={portfolio}
            onSetPortfolio={setPortfolio}
            intro={intro}
            onSetIntro={setIntro}
            primarySkill={primarySkill}
            secondarySkill={secondarySkill}
            tertiarySkill={tertiarySkill}
            onPrimarySkill={setPrimarySkill}
            onSecondarySkill={setSecondarySkill}
            onTertiarySkill={setTertiarySkill}
            onSecondStep={handleSecondStep}
          />
        ) : (
          <Form2 />
        )}
      </Inputs>
      <BentoGrid
        name={name}
        job={job}
        portfolio={portfolio}
        intro={intro}
        primarySkill={primarySkill}
        secondarySkill={secondarySkill}
        tertiarySkill={tertiarySkill}
      />
      <CTA />
      <Footer />
    </div>
  );
}

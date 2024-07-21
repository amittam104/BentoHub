import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Inputs from "./Inputs";
import BentoGrid from "./BentoGrid";
import CTA from "./CTA";
import Footer from "./Footer";
import { useRef, useState } from "react";
import { Form } from "./Form";
import { Form2 } from "./Form2";
// import { Form3 } from "./Form3";
import BannerNote from "./BannerNote";
// import html2canvas from "html2canvas";

export default function App() {
  const [name, setName] = useState("Your Name");
  const [job, setJob] = useState("Frontend Developer");
  const [portfolio, setPortfolio] = useState("portfolio.com");
  const [intro, setIntro] = useState("A brief intro about you goes here.");
  const [primarySkill, setPrimarySkill] = useState("Web Development");
  const [secondarySkill, setSecondarySkill] = useState("UI / Web Designing");
  const [tertiarySkill, setTertiarySkill] = useState("Graphics Designing");
  const [xUsername, setXUsername] = useState("xusername");
  const [secondStep, setSecondStep] = useState(false);
  const [thirdStep, setThirdStep] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [projectName, setProjectName] = useState("My Project");
  const [projectLogo, setProjectLogo] = useState("");
  const [projectIntro, setProjectIntro] = useState("");
  const [selectProject1Image, setSelectProject1Image] = useState(null);
  const [selectProject2Image, setSelectProject2Image] = useState(null);
  const [selectProjectLogo, setSelectProjectLogo] = useState(null);
  const [selectAvatar, setSelectAvatar] = useState(null);
  const [lang, setLang] = useState("");
  const [elements, setElements] = useState([]);
  const containerRef = useRef(null);
  const inputsView = useRef(null);
  const outputView = useRef(null);
  const canvasRef = useRef(null);
  const [imageURL, setImageURL] = useState("");
  const [theme, setTheme] = useState("light");
  // const gridContainerRef = useRef();

  // function handleCaptureScreenshot(element) {
  //   html2canvas(element).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");

  //     const newWindow = window.open();
  //     newWindow.document.write(`<img src="${imgData}" />`);
  //   });
  // }

  function handleScrollToInputs() {
    inputsView.current.scrollIntoView({ behavior: "smooth" });
  }

  function handleScrollToOutput(e) {
    e.preventDefault();
    canvasRef.current.scrollIntoView({ behavior: "smooth" });
  }

  // function handleAddClick() {
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(lang, "text/html");
  //   const element = doc.body.firstChild;

  //   if (element && elements.length < 8) {
  //     setElements([...elements, element]);
  //   }

  //   setLang("");
  // }

  function handleSecondStep() {
    setSecondStep(!secondStep);
  }

  function handleThirdStep() {
    setThirdStep(!thirdStep);
  }

  function handleImage1Upload(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
      const base64string = reader.result;
      localStorage.setItem("projectScreenshot", base64string);
      setSelectProject1Image(base64string);
    };

    reader.readAsDataURL(file);
  }

  function handleImage2Upload(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
      const base64string = reader.result;
      localStorage.setItem("projectScreenshot2", base64string);
      setSelectProject2Image(base64string);
    };

    reader.readAsDataURL(file);
  }

  function handleProjectLogoUpload(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
      const base64string = reader.result;
      localStorage.setItem("projectlogo", base64string);
      setSelectProjectLogo(base64string);
    };

    reader.readAsDataURL(file);
  }

  function handleAvatarUpload(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
      const base64string = reader.result;
      localStorage.setItem("avatar", base64string);
      setSelectAvatar(base64string);
    };

    reader.readAsDataURL(file);
  }

  return (
    <div className="bg-[#F7FFFA] py-4 font-JakartaRegular dark:bg-gray-950">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero onScrollInputsView={handleScrollToInputs} />
      <BannerNote />
      <Inputs
        inputsView={inputsView}
        secondStep={secondStep}
        thirdStep={thirdStep}
      >
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
            xUsername={xUsername}
            onXUsername={setXUsername}
          />
        ) : (
          <Form2
            onThirdStep={handleThirdStep}
            onSecondStep={handleSecondStep}
            avatar={avatar}
            onAvatarUpload={handleAvatarUpload}
            projectName={projectName}
            onProjectName={setProjectName}
            projectLogo={projectLogo}
            onProjectLogo={setProjectLogo}
            onAvatar={setAvatar}
            projectIntro={projectIntro}
            onProjectIntro={setProjectIntro}
            onImage1Upload={handleImage1Upload}
            onImage2Upload={handleImage2Upload}
            onLogoUpload={handleProjectLogoUpload}
            handleScrollToOutput={handleScrollToOutput}
          />
          // ) : (
          //   <Form3
          //     onThirdStep={handleThirdStep}
          //     lang={lang}
          //     setLang={setLang}
          //     elements={elements}
          //     containerRef={containerRef}
          //     onAddClick={handleAddClick}
          //     onHandleScrollToOutput={handleScrollToOutput}
          //     // onCaptureScreenshot={handleCaptureScreenshot}
          //     // gridContainerRef={gridContainerRef}
          //   />
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
        xUsername={xUsername}
        avatar={avatar}
        projectName={projectName}
        projectLogo={projectLogo}
        projectIntro={projectIntro}
        selectProject1Image={selectProject1Image}
        selectProject2Image={selectProject2Image}
        elements={elements}
        containerRef={containerRef}
        canvasRef={canvasRef}
        setImageURL={setImageURL}
        selectProjectLogo={selectProjectLogo}
        selectAvatar={selectAvatar}
        theme={theme}
        // gridContainerRef={gridContainerRef}
      />
      <CTA outputView={outputView} imageURL={imageURL} />
      <Footer />
    </div>
  );
}

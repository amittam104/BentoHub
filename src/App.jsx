import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Inputs from "./Inputs";

export default function App() {
  return (
    <div className="font-JakartaRegular bg-[#F7FFFA]">
      <Navbar />
      <Hero />
      <Inputs />
    </div>
  );
}

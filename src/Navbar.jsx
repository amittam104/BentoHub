import { Button } from "./components/ui/button";
import { GithubLogo, SunDim, MoonStars } from "@phosphor-icons/react";
import { Toggle } from "@/components/ui/toggle";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  function handleThemeLight() {
    setTheme("light");
  }

  function handleThemeDark() {
    setTheme("dark");
  }

  useEffect(
    function () {
      if (theme === "dark") document.documentElement.classList.add("dark");

      if (theme === "light") document.documentElement.classList.remove("dark");
    },
    [theme],
  );

  return (
    <nav className="mx-4 mb-8 flex w-auto items-center justify-between rounded-xl bg-white p-4 drop-shadow-[6px_6px_8px_rgba(0,0,0,0.06)] xl:mx-auto xl:w-[78rem] 2xl:w-[90rem] dark:border-[1px] dark:border-[#30363db3] dark:bg-[#161b22]">
      <div className="flex items-center gap-4">
        <img
          className="h-8 w-8 lg:h-12 lg:w-12"
          src="/BentoHub.svg"
          alt="BentoHub logo"
        />
        <p className="text-lg font-black md:text-xl lg:text-2xl">BentoHub</p>
      </div>
      <CTAButtons
        theme={theme}
        onThemeToggleLight={handleThemeLight}
        onThemeToggleDark={handleThemeDark}
      />
    </nav>
  );
}

// eslint-disable-next-line react/prop-types
export function CTAButtons({ theme, onThemeToggleLight, onThemeToggleDark }) {
  return (
    <div className="flex items-center gap-8">
      {theme === "light" ? (
        <Toggle onClick={onThemeToggleDark}>
          <SunDim size={20} />
        </Toggle>
      ) : (
        <Toggle onClick={onThemeToggleLight}>
          <MoonStars size={20} />
        </Toggle>
      )}
      <a
        href="https://github.com/amittam104/BentoHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant={"outline"} className="hidden gap-2 lg:flex">
          <GithubLogo size={20} />
          GitHub Repo
        </Button>
      </a>
      {/* <a
        href="https://buymeacoffee.com/attam104"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant={"bentohub"}
          className="hidden items-center gap-2 lg:flex"
        >
          <HandHeart size={20} />
          Sponsor
        </Button>
      </a> */}
    </div>
  );
}

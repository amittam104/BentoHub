import { Button } from "./components/ui/button";
import { GithubLogo, HandHeart, List } from "@phosphor-icons/react";

export default function Navbar() {
  return (
    <nav className="mx-auto my-4 flex w-screen items-center justify-between rounded-xl bg-white p-4 drop-shadow-[6px_6px_8px_rgba(0,0,0,0.06)] xl:w-[90rem]">
      <div className="flex items-center gap-4">
        <img
          className="h-8 w-8 lg:h-12 lg:w-12"
          src="/BentoHub.svg"
          alt="BentoHub logo"
        />
        <p className="text-lg font-black md:text-xl lg:text-2xl">BentoHub</p>
      </div>
      <div className="flex items-center gap-8">
        <Button variant={"outline"} className="hidden gap-2 lg:flex">
          <GithubLogo size={20} />
          GitHub Repo
        </Button>
        <Button
          variant={"bentohub"}
          className="hidden items-center gap-2 lg:flex"
        >
          <HandHeart size={20} />
          Sponsor
        </Button>
      </div>
      <div className="lg:hidden">
        <List size={24} />
      </div>
    </nav>
  );
}

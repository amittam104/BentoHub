/* eslint-disable react/prop-types */
import { Button } from "./components/ui/button";
import { GithubLogo, HandHeart } from "@phosphor-icons/react";
import { Output } from "./Output";

export default function CTA({ outputView, imageURL }) {
  return (
    <section className="items-strech mx-4 mb-20 flex w-auto flex-col justify-between gap-8 xl:mx-auto xl:w-[75rem] xl:flex-row">
      <Output outputView={outputView} imageURL={imageURL} />
      <CallToAction />
    </section>
  );
}

function CallToAction() {
  return (
    <div className="flex h-auto w-full flex-col items-start rounded-3xl border-2 border-green-200 bg-green-100 px-6 py-8 drop-shadow-[3px_3px_18px_rgba(0,0,0,0.06)] md:px-6 md:py-6 lg:px-10 lg:py-10 dark:border-none dark:bg-green-900/80 dark:text-slate-100 dark:shadow-none">
      <h5 className="mb-6 text-base font-bold">Support BentoHub</h5>
      <p className="mb-12">
        If you like BentoHub then give a star on the github repo or if you can
        then sponsor the project to show your support. Thank you!
      </p>
      <div className="flex gap-4">
        <a
          href="https://github.com/amittam104/BentoHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant={"outline"}
            className="gap-2 dark:border-[#30363db3] dark:bg-[#161b22] dark:hover:bg-gray-950/30"
          >
            <GithubLogo size={20} />
            GitHub Repo
          </Button>
        </a>
        <a
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
        </a>
      </div>
    </div>
  );
}

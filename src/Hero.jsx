import { Button } from "./components/ui/button";
import { ArrowFatDown } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section className="mb-8 flex w-auto flex-col items-center rounded-3xl bg-white px-6 py-8 text-center drop-shadow-[3px_3px_18px_rgba(0,0,0,0.06)] md:px-12 md:py-12 lg:px-24 lg:py-16 xl:mx-auto xl:w-[75rem]">
      <h1 className="mb-8 text-3xl font-black text-slate-900 md:text-4xl lg:text-5xl xl:w-[55rem] xl:text-6xl">
        Make your GitHub Profile modern and trendy
      </h1>
      <p className="md:text-md font-regular mb-16 text-sm text-slate-800">
        Build your own bento grid, copy the HTML or Markdown code and paste it
        on to the top of your GitHub Profile readme
      </p>
      <Button className="flex items-center gap-2">
        Build Your Grid <ArrowFatDown size={24} />
      </Button>
    </section>
  );
}

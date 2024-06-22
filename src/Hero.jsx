import { Button } from "./components/ui/button";
import { ArrowFatDown } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section className="mx-4 flex w-auto flex-col items-center rounded-3xl bg-white px-24 py-9 text-center drop-shadow-[6px_6px_8px_rgba(0,0,0,0.06)] lg:mx-auto xl:w-[75rem]">
      <h1 className="mb-8 text-6xl font-black text-slate-900 xl:w-[55rem]">
        Make your GitHub Profile modern and trendy
      </h1>
      <p className="text-md font-regular mb-16 text-slate-800">
        Build your own bento grid, copy the HTML or Markdown code and paste it
        on to the top of your GitHub Profile readme
      </p>
      <Button className="flex items-center gap-2">
        Build Your Grid <ArrowFatDown size={24} />
      </Button>
    </section>
  );
}

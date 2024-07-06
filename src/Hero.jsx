/* eslint-disable react/prop-types */
import { Button } from "./components/ui/button";
import { ArrowFatDown } from "@phosphor-icons/react";

export default function Hero({ onScrollInputsView }) {
  // const ref = useRef(null);
  // const handleClick = () => {
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <section className="mx-4 mb-8 flex w-auto flex-col items-center rounded-3xl bg-white px-6 py-8 text-center drop-shadow-[3px_3px_18px_rgba(0,0,0,0.06)] md:px-12 md:py-12 lg:px-24 lg:py-16 xl:mx-auto xl:w-[75rem] dark:border-[1px] dark:bg-[#161b22]">
      <h1 className="mb-8 text-3xl font-black text-slate-900 md:text-4xl lg:text-5xl xl:w-[55rem] xl:text-6xl dark:text-slate-50">
        Make your GitHub Profile modern and trendy
      </h1>
      <p className="md:text-md font-regular mb-16 text-slate-800 dark:text-slate-300">
        Build your own bento grid, copy the HTML or Markdown code and paste it
        on to the top of your GitHub Profile readme
      </p>
      <Button
        onClick={onScrollInputsView}
        className="flex items-center gap-2 dark:border-slate-500 dark:bg-green-700 dark:text-slate-100 dark:shadow-none dark:hover:bg-green-700/90"
      >
        Build Your Grid <ArrowFatDown size={24} />
      </Button>
    </section>
  );
}

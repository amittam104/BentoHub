/* eslint-disable react/prop-types */
import { CTAButtons } from "./Navbar";
import { Output } from "./Output";

export default function CTA({ outputView }) {
  return (
    <section className="items-strech mx-4 mb-20 flex w-auto flex-col justify-between gap-8 xl:mx-auto xl:w-[75rem] xl:flex-row">
      <Output outputView={outputView} />
      <CallToAction />
    </section>
  );
}

function CallToAction() {
  return (
    <div className="flex h-auto w-full flex-col items-start rounded-3xl border-2 border-green-200 bg-green-100 px-6 py-8 drop-shadow-[3px_3px_18px_rgba(0,0,0,0.06)] md:px-6 md:py-6 lg:px-10 lg:py-10">
      <h5 className="mb-6 text-base font-bold">Support BentoHub</h5>
      <p className="mb-12">
        If you liked it then give a start on the github repository to support
        this project.
      </p>
      <CTAButtons />
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ClipboardText } from "@phosphor-icons/react";
import { CTAButtons } from "./Navbar";

export default function CTA() {
  return (
    <section className="items-strech mx-4 mb-20 flex w-auto flex-col justify-between gap-8 xl:mx-auto xl:w-[75rem] xl:flex-row">
      <Output />
      <CallToAction />
    </section>
  );
}

function Output() {
  return (
    <div className="flex w-full flex-col items-start gap-12 rounded-3xl bg-white px-6 py-8 drop-shadow-[3px_3px_18px_rgba(0,0,0,0.06)] md:px-6 md:py-6 lg:px-10 lg:py-10">
      <div className="flex w-full flex-col items-start gap-4">
        <h5 className="text-base font-medium">Get the Markdown code</h5>
        <div className="flex w-full items-center gap-2">
          <Input />
          <Button variant="ghost">
            <ClipboardText size={20} />
          </Button>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-4">
        <h5 className="text-base font-medium">Get the HTML code</h5>
        <div className="flex w-full items-center gap-2">
          <Input />
          <Button variant="ghost">
            <ClipboardText size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}

function CallToAction() {
  return (
    <div className="flex h-auto w-full flex-col items-start rounded-3xl border-2 border-green-200 bg-green-100 px-6 py-8 drop-shadow-[3px_3px_18px_rgba(0,0,0,0.06)] md:px-6 md:py-6 lg:px-10 lg:py-10">
      <h5 className="mb-6 text-base font-bold">Support BentoHub</h5>
      <p className="mb-12">
        Give a start on the github repository or if you can and want to then
        sponsor this project.
      </p>
      <CTAButtons />
    </div>
  );
}

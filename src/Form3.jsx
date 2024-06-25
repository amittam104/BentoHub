/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Form3({ onThirdStep }) {
  const [lang1, setLang1] = useState("");

  console.log(lang1);
  console.log(typeof lang1);

  return (
    <div className="flex gap-8">
      <div className="flex w-full flex-col gap-6">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Your Languages</Label>
          <div className="flex gap-2">
            <Input
              id="name"
              placeholder="Paste the image element here"
              value={lang1}
              onChange={(e) => setLang1(e.target.value)}
            />
            <Button className="lg:col-span-1 lg:col-end-12 lg:self-end">
              Add
            </Button>
          </div>
          <p className="text-sm text-rose-600 opacity-0">
            Copy & paste img element from devicon.dev
          </p>
        </div>
        <p className="text-sm text-slate-600">
          Search the language or tool icon on devicon.dev, copy the image
          element, paste it above and click add.
        </p>
        <img
          className="rounded-lg"
          src="/svgiconsmall.png"
          alt="svgicon.dev snap"
        />
      </div>
      <div className="flex w-full flex-wrap rounded-3xl bg-white px-6 py-8 drop-shadow-[3px_3px_18px_rgba(0,0,0,0.06)]">
        {lang1}
      </div>
      <Button
        className="lg:col-span-1 lg:col-end-12 lg:self-end"
        variant={"outline"}
        onClick={onThirdStep}
      >
        Back
      </Button>
    </div>
  );
}

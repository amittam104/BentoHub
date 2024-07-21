/* eslint-disable react/prop-types */
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function Form({
  name,
  onSetName,
  job,
  onSetJob,
  portfolio,
  onSetPortfolio,
  intro,
  onSetIntro,
  primarySkill,
  secondarySkill,
  tertiarySkill,
  onPrimarySkill,
  onSecondarySkill,
  onTertiarySkill,
  onSecondStep,
  xUsername,
  onXUsername,
}) {
  return (
    <form>
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
        <div className="flex w-full flex-col items-stretch gap-8 lg:col-span-5 lg:grid">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => onSetName(e.target.value)}
              maxlength="23"
            />
            <p className="text-sm text-rose-600 opacity-0">
              Please enter your first or full name
            </p>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Role / Job</Label>
            <Input
              id="name"
              placeholder="What do you do?"
              value={job}
              onChange={(e) => onSetJob(e.target.value)}
              maxlength="19"
            />
            <p className="text-sm text-rose-600 opacity-0">
              Please enter your job or role
            </p>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Portfolio</Label>
            <Input
              id="name"
              placeholder="Your portfolio site or personal site"
              value={portfolio}
              onChange={(e) => onSetPortfolio(e.target.value)}
              maxlength="17"
            />
            <p className="text-sm text-rose-600 opacity-0">
              Please enter personal / agency / company url
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col items-stretch gap-6 md:col-span-6 md:grid md:grid-cols-2">
          <div className="col-span-2 flex flex-col space-y-1.5">
            <Label htmlFor="name">Intro</Label>
            <Textarea
              id="name"
              placeholder="Enter your one sentence intro"
              value={intro}
              onChange={(e) => onSetIntro(e.target.value)}
              maxlength="83"
            />
            <p className="text-sm text-rose-600 opacity-0">
              Please enter your oneline intro
            </p>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Primary Skill</Label>
            <Input
              id="name"
              placeholder="Fronted Development"
              value={primarySkill}
              onChange={(e) => onPrimarySkill(e.target.value)}
              maxlength="19"
            />
            <p className="text-sm text-rose-600 opacity-0">
              Please enter your primary skill
            </p>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Secondary Skill</Label>
            <Input
              id="name"
              placeholder="Web Design"
              value={secondarySkill}
              onChange={(e) => onSecondarySkill(e.target.value)}
              maxlength="19"
            />
            <p className="text-sm text-rose-600 opacity-0">
              Please enter your secondary skill
            </p>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Tertiary Skill</Label>
            <Input
              id="name"
              placeholder="Graphics Design"
              value={tertiarySkill}
              onChange={(e) => onTertiarySkill(e.target.value)}
              maxlength="19"
            />
            <p className="text-sm text-rose-600 opacity-0">
              Please enter your tertiary skill
            </p>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">X / Twitter Username</Label>
            <Input
              id="name"
              placeholder="Graphics Design"
              value={xUsername}
              onChange={(e) => onXUsername(e.target.value)}
              maxlength="19"
            />
            <p className="text-sm text-rose-600 opacity-0">
              Please enter your tertiary skill
            </p>
          </div>
        </div>
        <Button
          className="self-end dark:border-[1px] dark:border-[#30363db3] dark:bg-[#1c242d] dark:text-slate-50 dark:hover:bg-gray-950/30"
          onClick={onSecondStep}
        >
          Next
        </Button>
      </div>
    </form>
  );
}

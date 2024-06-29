/* eslint-disable react/prop-types */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload } from "@phosphor-icons/react";
import { Textarea } from "@/components/ui/textarea";

export function Form2({
  onThirdStep,
  onSecondStep,
  avatar,
  onAvatar,
  projectName,
  onProjectName,
  projectLogo,
  onProjectLogo,
  projectIntro,
  onProjectIntro,
  onImage1Upload,
  onImage2Upload,
}) {
  return (
    <form className="flex flex-col items-start gap-8 lg:grid lg:grid-cols-12">
      <div className="flex w-full flex-col items-start gap-8 lg:col-span-5">
        <div className="flex w-[90%] flex-col space-y-2">
          <Label htmlFor="name">Avatar</Label>
          <Input
            id="name"
            placeholder="Copy & Paste your image address"
            value={avatar}
            onChange={(e) => onAvatar(e.target.value)}
          />
          <p className="text-sm text-rose-600 opacity-0">
            Please add your avatar image
          </p>
        </div>
        <div className="flex w-[90%] flex-col space-y-2">
          <Label htmlFor="name">Project Name</Label>
          <Input
            id="name"
            placeholder="Enter capstone project name"
            value={projectName}
            onChange={(e) => onProjectName(e.target.value)}
            maxlength="25"
          />
          <p className="text-sm text-rose-600 opacity-0">
            Please enter your project name
          </p>
        </div>
        <div className="flex w-[90%] flex-col space-y-2">
          <Label htmlFor="name">Project Logo</Label>
          <Input
            id="name"
            placeholder="Copy & Paste your image address"
            value={projectLogo}
            onChange={(e) => onProjectLogo(e.target.value)}
          />
          <p className="text-sm text-rose-600 opacity-0">
            Please add your capstone project logo
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-8 lg:col-span-5">
        <div className="flex w-[90%] flex-col space-y-2">
          <Label htmlFor="name">Project Intro</Label>
          <Textarea
            id="name"
            placeholder="Enter your one sentence project intro"
            value={projectIntro}
            onChange={(e) => onProjectIntro(e.target.value)}
            maxlength="105"
          />
          <p className="text-sm text-rose-600 opacity-0">
            Please enter your capstone project intro
          </p>
        </div>
        <div className="flex w-[90%] flex-col gap-2">
          <Label htmlFor="avatar">A Project Screenshot</Label>
          <div className="relative flex items-center">
            <Input
              id="avatar"
              type="file"
              className="w-full pr-12"
              placeholder="Upload image of your project"
              onChange={onImage1Upload}
            />
            <Button variant="ghost" type="button" className="absolute right-2">
              <Upload size={20} />
            </Button>
          </div>
        </div>
        <div className="flex w-[90%] flex-col gap-2">
          <Label htmlFor="avatar">Another Project Screenshot</Label>
          <div className="relative flex items-center">
            <Input
              id="avatar"
              type="file"
              className="w-full pr-12"
              placeholder="Upload image of your project"
              onChange={onImage2Upload}
            />
            <Button variant="ghost" type="button" className="absolute right-2">
              <Upload size={20} />
            </Button>
          </div>
        </div>
      </div>
      <Button
        className="lg:col-span-1 lg:col-end-12 lg:self-end"
        variant={"outline"}
        onClick={onSecondStep}
      >
        Back
      </Button>
      <Button
        className="lg:col-span-1 lg:col-end-13 lg:self-end"
        onClick={onThirdStep}
      >
        Next
      </Button>
    </form>
  );
}

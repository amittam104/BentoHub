import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Inputs() {
  return (
    <section className="mx-4 mb-8 w-auto rounded-3xl bg-white px-3 py-8 drop-shadow-[3px_3px_18px_rgba(0,0,0,0.06)] sm:px-8 md:p-12 lg:p-4 xl:mx-auto xl:w-[75rem]">
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Enter your details
          </CardTitle>
          <CardDescription>
            Fill out the details below and build your grid.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3 sm:p-6">
          <Form />
        </CardContent>
      </Card>
    </section>
  );
}

function Form() {
  return (
    <form>
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
        <div className="flex w-full flex-col items-stretch gap-8 lg:col-span-5 lg:grid">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter Your Name" />
            <p className="text-sm text-rose-600 opacity-0">
              Please enter your first or full name
            </p>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Role / Job</Label>
            <Input id="name" placeholder="What do you do?" />
            <p className="text-sm text-rose-600 opacity-0">
              Please enter your job or role
            </p>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Portfolio</Label>
            <Input
              id="name"
              placeholder="Your portfolio site or personal site"
            />
            <p className="text-sm text-rose-600 opacity-0">
              Please enter personal / agency / company url
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col items-stretch gap-6 md:col-span-6 md:grid md:grid-cols-2">
          <div className="col-span-2 flex flex-col space-y-1.5">
            <Label htmlFor="name">Intro</Label>
            <Textarea id="name" placeholder="Enter your one sentence intro" />
            <p className="text-sm text-rose-600 opacity-0">
              Please enter your oneline intro
            </p>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Primary Skill</Label>
            <Input id="name" placeholder="Fronted Development" mandatory />
            <p className="text-sm text-rose-600 opacity-0">
              Please enter your primary skill
            </p>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Secondary Skill</Label>
            <Input id="name" placeholder="Web Design" />
            <p className="text-sm text-rose-600 opacity-0">
              Please enter your secondary skill
            </p>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Tertiary Skill</Label>
            <Input id="name" placeholder="Graphics Design" />
            <p className="text-sm text-rose-600 opacity-0">
              Please enter your tertiary skill
            </p>
          </div>
        </div>
        <Button className="self-end">Next</Button>
      </div>
    </form>
  );
}

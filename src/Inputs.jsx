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
    <section className="mx-4 mb-8 w-auto rounded-3xl bg-white px-3 py-8 drop-shadow-[3px_3px_18px_rgba(0,0,0,0.06)] sm:px-8 md:px-12 md:py-12 lg:px-4 lg:py-4 xl:mx-auto xl:w-[75rem]">
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle>Enter your details</CardTitle>
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
        <div className="flex w-full flex-col items-stretch gap-10 lg:col-span-5 lg:grid">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter Your Name" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Role / Job</Label>
            <Input id="name" placeholder="What do you do?" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Portfolio</Label>
            <Input
              id="name"
              placeholder="Your portfolio site or personal site"
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-stretch gap-10 md:col-span-6 md:grid md:grid-cols-2">
          <div className="col-span-2 flex flex-col space-y-1.5">
            <Label htmlFor="name">Intro</Label>
            <Textarea id="name" placeholder="Enter your one sentence intro" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Primary</Label>
            <Input id="name" placeholder="Fronted Development" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Secondary</Label>
            <Input id="name" placeholder="Web Design" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Tertiary</Label>
            <Input id="name" placeholder="Graphics Design" />
          </div>
        </div>
        <Button className="self-end">Next</Button>
      </div>
    </form>
  );
}

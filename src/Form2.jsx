import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload } from "@phosphor-icons/react";

export function Form2() {
  return (
    <form className="grid grid-cols-3 gap-8">
      <div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="avatar">Avatar</Label>
          <div className="relative flex items-center">
            <Input
              id="avatar"
              type="file"
              className="w-full pr-12"
              placeholder="Upload your avatar image"
            />
            <Button variant="ghost" type="button" className="absolute right-2">
              <Upload size={20} />
            </Button>
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="avatar">Avatar</Label>
          <div className="relative flex items-center">
            <Input
              id="avatar"
              type="file"
              className="w-full pr-12"
              placeholder="Upload your avatar image"
            />
            <Button variant="ghost" type="button" className="absolute right-2">
              <Upload size={20} />
            </Button>
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="avatar">Avatar</Label>
          <div className="relative flex items-center">
            <Input
              id="avatar"
              type="file"
              className="w-full pr-12"
              placeholder="Upload your avatar image"
            />
            <Button variant="ghost" type="button" className="absolute right-2">
              <Upload size={20} />
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter Your Name" />
          <p className="text-sm text-rose-600 opacity-0">
            Please enter your first or full name
          </p>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="avatar">Avatar</Label>
          <div className="relative flex items-center">
            <Input
              id="avatar"
              type="file"
              className="w-full pr-12"
              placeholder="Upload your avatar image"
            />
            <Button variant="ghost" type="button" className="absolute right-2">
              <Upload size={20} />
            </Button>
          </div>
        </div>
      </div>
      <Button className="self-end">Next</Button>
    </form>
  );
}

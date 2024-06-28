/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ClipboardText } from "@phosphor-icons/react";
import { useState } from "react";
import { Label } from "@/components/ui/label";

export function Output({ outputView }) {
  const [isUploaded, setIsUploaded] = useState(false);

  function handleImageUpload() {}

  return (
    <div
      ref={outputView}
      className="flex w-full flex-col items-start gap-12 rounded-3xl bg-white px-6 py-8 drop-shadow-[3px_3px_18px_rgba(0,0,0,0.06)] md:px-6 md:py-6 lg:px-10 lg:py-10"
    >
      {!isUploaded ? (
        <UploadGriScreenshot onImageUpload={handleImageUpload} />
      ) : (
        <GetCodeOutput />
      )}
    </div>
  );
}

function UploadGriScreenshot({ onImageUpload }) {
  return (
    <div>
      <h3 className="mb-2 font-bold">Upload Grid Screenshot</h3>
      <p className="font-regular mb-8 text-sm">
        Take the screenshot of your grid above and upload it here.
      </p>
      <div className="mb-2 flex w-[90%] flex-col gap-2">
        <Label htmlFor="avatar" className="mb-2">
          Upload Screenshot
        </Label>
        <div className="relative flex items-center gap-2">
          <Input
            id="avatar"
            type="file"
            className="w-full pr-12"
            placeholder="Upload image of your project"
          />
          <Button onClick={onImageUpload} type="button">
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
}

function GetCodeOutput() {
  return (
    <>
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
    </>
  );
}

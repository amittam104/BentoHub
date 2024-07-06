/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ClipboardText } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { storage } from "./appwrite/config";
import { ID } from "appwrite";

export function Output({ outputView }) {
  const [isUploaded, setIsUploaded] = useState(false);
  const [imageURL, setImageURL] = useState("");

  const uploadImageEL = useRef(null);

  async function handleImageUpload() {
    try {
      if (!uploadImageEL.current.files[0]) return;

      const res = await storage.createFile(
        import.meta.env.VITE_BUCKET_ID,
        ID.unique(),
        uploadImageEL.current.files[0],
      );

      if (!res) throw new Error("Something went wrong. Please try again.");

      const result = storage.getFilePreview(
        import.meta.env.VITE_BUCKET_ID,
        res.$id,
      );

      setImageURL(result.href);
      if (result.href) setIsUploaded(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      ref={outputView}
      className="flex w-full flex-col items-start gap-12 rounded-3xl bg-white px-6 py-8 drop-shadow-[3px_3px_18px_rgba(0,0,0,0.06)] md:px-6 md:py-6 lg:px-10 lg:py-10 dark:border-[1px] dark:border-[#30363db3] dark:bg-[#161b22]"
    >
      {!isUploaded ? (
        <UploadGriScreenshot
          onImageUpload={handleImageUpload}
          uploadImageEL={uploadImageEL}
        />
      ) : (
        <GetCodeOutput imageURL={imageURL} />
      )}
    </div>
  );
}

function UploadGriScreenshot({ onImageUpload, uploadImageEL }) {
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
            ref={uploadImageEL}
          />
          <Button
            onClick={onImageUpload}
            className="dark:border-[1px] dark:border-[#30363db3] dark:bg-[#1c242d] dark:text-slate-50 dark:hover:bg-gray-950/30"
            type="button"
          >
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
}

function GetCodeOutput({ imageURL }) {
  // const [markdown, setMarkdown] = useState("");
  const hrmlLinkCode = `<a href="https://www.amittambulkar.com" target="_blank"><img src="${imageURL}" /></a>`;
  const markdownLinkCode = `[![](https://cloud.appwrite.io/v1/storage/buckets/667d390e003b1971a8be/files/6680068e00362e6ce62b/preview?project=667d35ca0017fb21fc6c)](https://www.amittambulkar.com)`;

  function handleHTMlClick() {
    navigator.clipboard.writeText(hrmlLinkCode);
  }

  function handleMarkdownClick() {
    navigator.clipboard.writeText(markdownLinkCode);
  }

  return (
    <>
      <div className="flex w-full flex-col items-start gap-4">
        <h5 className="text-base font-medium">Get the Markdown code</h5>
        <div className="flex w-full items-center gap-2">
          <Input value={markdownLinkCode} />

          <Button variant="ghost">
            <ClipboardText size={20} onClick={handleMarkdownClick} />
          </Button>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-4">
        <h5 className="text-base font-medium">Get the HTML code</h5>
        <div className="flex w-full items-center gap-2">
          <Input value={hrmlLinkCode} />
          {/* <div className="h-10 w-full rounded-md border-2 border-slate-200/70">
            {`<a href="https://www.amittambulkar.com" target="_blank"> <img src={imageURL} /></a>`}
          </div> */}
          <Button variant="ghost" onClick={handleHTMlClick}>
            <ClipboardText size={20} />
          </Button>
        </div>
      </div>
    </>
  );
}

{
  /* <a href="https://www.amittambulkar.com" target="_blank">
  <img src={imageURL} />
</a>; */
}

/* eslint-disable react/prop-types */
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import { Globe } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { storage } from "./appwrite/config";
import { ID } from "appwrite";

export default function BentoGrid({
  name,
  job,
  portfolio,
  intro,
  primarySkill,
  secondarySkill,
  tertiarySkill,
  avatar,
  projectName,
  projectLogo,
  projectIntro,
  selectProject1Image,
  selectProject2Image,
  elements,
  containerRef,
  gridContainerRef,
  xUsername,
  canvasRef,
  setImageURL,
  selectProjectLogo,
  theme,
  selectAvatar,
}) {
  return (
    <section className="mx-4 mb-8 flex w-auto flex-col items-center rounded-3xl bg-white px-6 py-8 text-center drop-shadow-[3px_3px_18px_rgba(0,0,0,0.06)] md:px-12 md:py-12 lg:px-12 lg:py-12 xl:mx-auto xl:w-[75rem] dark:border-[1px] dark:border-[#30363db3] dark:bg-[#0d1117]">
      <Grid
        name={name}
        job={job}
        portfolio={portfolio}
        intro={intro}
        primarySkill={primarySkill}
        secondarySkill={secondarySkill}
        tertiarySkill={tertiarySkill}
        xUsername={xUsername}
        avatar={avatar}
        projectName={projectName}
        projectLogo={projectLogo}
        projectIntro={projectIntro}
        selectProject1Image={selectProject1Image}
        selectProject2Image={selectProject2Image}
        elements={elements}
        containerRef={containerRef}
        gridContainerRef={gridContainerRef}
        canvasRef={canvasRef}
        setImageURL={setImageURL}
        selectProjectLogo={selectProjectLogo}
        theme={theme}
        selectAvatar={selectAvatar}
      />
    </section>
  );
}

// function Grid({
//   name,
//   job,
//   portfolio,
//   intro,
//   primarySkill,
//   secondarySkill,
//   tertiarySkill,
//   avatar,
//   projectName,
//   projectLogo,
//   projectIntro,
//   selectProject1Image,
//   selectProject2Image,
//   elements,
//   // containerRef,
//   gridContainerRef,
// }) {
//   const [projectImage, setProjectImage] = useState(null);
//   const [projectImage2, setProjectImage2] = useState(null);

//   useEffect(
//     function () {
//       const projectSnap = localStorage.getItem("projectScreenshot");

//       if (projectSnap) {
//         setProjectImage(projectSnap);
//       }
//     },
//     [selectProject1Image],
//   );

//   useEffect(
//     function () {
//       const projectSnap2 = localStorage.getItem("projectScreenshot2");

//       if (projectSnap2) {
//         setProjectImage2(projectSnap2);
//       }
//     },
//     [selectProject2Image],
//   );

//   return (
//     <div
//       ref={gridContainerRef}
//       className="grid max-w-[65rem] grid-cols-2 gap-4 lg:max-h-[35rem] lg:grid-cols-12 lg:grid-rows-12"
//     >
//       <div className="relative col-span-2 flex max-w-full flex-col items-start rounded-3xl border border-slate-300 p-6 pt-6 text-start lg:col-span-8 lg:row-span-6 dark:border-[1px] dark:border-[#30363d]">
//         <div className="absolute right-4 top-4 flex items-center gap-3 rounded-md bg-green-100 px-3 py-1 text-sm dark:bg-green-900">
//           <img className="static h-6 w-6" src="/circle-svgrepo-com.svg" />
//           <p className="static font-medium text-green-900 dark:text-slate-100">
//             {job}
//           </p>
//         </div>
//         <div className="mt-6 pb-6 sm:mt-0">
//           <Avatar>
//             <AvatarImage
//               src={
//                 avatar
//                   ? avatar
//                   : `https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg`
//               }
//             />
//             <AvatarFallback>Avatar</AvatarFallback>
//           </Avatar>
//         </div>
//         <h3 className="mb-4 text-4xl font-black">{name}</h3>
//         <div className="mb-6 flex flex-col gap-2 sm:flex-row">
//           <Badge variant={"primarySkill"}>{primarySkill}</Badge>
//           <Badge variant={"secondarySkill"}>{secondarySkill}</Badge>
//           <Badge variant={"tertiarySkill"}>{tertiarySkill}</Badge>
//         </div>
//         <p className="text-2xl dark:text-slate-300">{intro}</p>
//       </div>
//       <div className="relative col-span-2 flex flex-col items-start justify-end gap-2 rounded-3xl border border-slate-300 p-6 sm:col-span-1 lg:col-span-4 lg:row-span-3 dark:border-[1px] dark:border-[#30363d]">
//         <Globe size={28} className="absolute right-4 top-4" />
//         <p className="text-slate-500">Reach me out</p>
//         <p className="text-2xl font-medium">{portfolio}</p>
//       </div>
//       <div
//         // ref={containerRef}
//         className="col-span-2 grid grid-cols-4 content-center justify-items-center gap-4 rounded-3xl border border-slate-300 p-4 sm:col-span-1 lg:col-span-4 lg:row-span-3 dark:border-[1px] dark:border-[#30363d]"
//       >
//         {elements &&
//           elements.map((element, index) => (
//             <div key={index} className="h-10 w-10">
//               {element.outerHTML && (
//                 <div
//                   dangerouslySetInnerHTML={{ __html: element.outerHTML }}
//                 ></div>
//               )}
//             </div>
//           ))}
//       </div>
//       <div className="col-span-2 flex flex-col items-start justify-center rounded-3xl border border-slate-300 p-6 text-start md:col-span-1 lg:col-span-3 lg:row-span-6 dark:border-[1px] dark:border-[#30363d]">
//         <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg border-slate-200 bg-white p-2 shadow dark:border-[1px] dark:border-[#30363db3] dark:bg-[#1c242d]">
//           <img
//             src={
//               projectLogo
//                 ? projectLogo
//                 : `https://www.amittambulkar.com/logo.svg`
//             }
//             alt="project logo"
//           />
//         </div>
//         <h4 className="mb-6 text-lg font-semibold">{projectName}</h4>
//         <p className="text-sm">
//           {projectIntro
//             ? projectIntro
//             : `Add one line intro for your capstone project here. Showcase the features in few simple words.`}
//         </p>
//       </div>
//       <div className="col-span-2 flex items-center justify-center rounded-3xl border border-slate-300 p-4 md:col-span-1 lg:col-span-4 lg:row-span-6 dark:border-[1px] dark:border-[#30363d]">
//         <img
//           className="max-h-full w-auto rounded-lg border-[3px] border-slate-800 shadow-xl"
//           src={projectImage ? projectImage : `/BentoHubSnap.png`}
//           alt="bento hub app screenshot"
//         />
//       </div>
//       <div className="col-span-2 flex items-center justify-center overflow-hidden rounded-3xl border border-slate-300 p-6 md:col-span-1 lg:col-span-5 lg:row-span-6 dark:border-[1px] dark:border-[#30363d]">
//         <img
//           className="max-h-full w-auto rounded-lg border-[3px] border-slate-800 shadow-xl"
//           src={projectImage2 ? projectImage2 : `/portfolio.png`}
//           alt="Portfolio screenshot"
//         />
//       </div>
//     </div>
//   );
// }

function Grid({
  name,
  intro,
  job,
  primarySkill,
  secondarySkill,
  tertiarySkill,
  xUsername,
  portfolio,
  projectName,
  projectIntro,
  // projectLogo,
  selectProject1Image,
  selectProject2Image,
  canvasRef,
  setImageURL,
  selectProjectLogo,
  selectAvatar,
  theme,
}) {
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  function drawGridStructure(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
  }

  function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(" ");
    let line = "";
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + " ";
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && i > 0) {
        ctx.fillText(line, x, y);
        line = words[i] + " ";
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, y);
  }

  function loadImageWithCors(src, crossOrigin = "anonymous") {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = crossOrigin;
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  }

  // Function to draw images maintaining aspect ratio
  function drawImageScaled(ctx, img, x, y, maxWidth, maxHeight) {
    const aspectRatio = img.width / img.height;
    let drawWidth = maxWidth;
    let drawHeight = maxHeight;

    if (img.width > img.height) {
      // Landscape image
      drawHeight = maxWidth / aspectRatio;
      if (drawHeight > maxHeight) {
        drawHeight = maxHeight;
        drawWidth = maxHeight * aspectRatio;
      }
    } else {
      // Portrait image
      drawWidth = maxHeight * aspectRatio;
      if (drawWidth > maxWidth) {
        drawWidth = maxWidth;
        drawHeight = maxWidth / aspectRatio;
      }
    }

    const offsetX = x + (maxWidth - drawWidth) / 2;
    const offsetY = y + (maxHeight - drawHeight) / 2;

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }

  // Function to handle image download
  async function downloadImage() {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL("image/png");

    // Convert the dataURL to a Blob
    const blob = await fetch(dataURL).then((res) => res.blob());
    const file = new File([blob], "canvas-image.png", { type: "image/png" });

    // Upload the image
    try {
      // setIsLoading(true);
      const fileID = ID.unique();
      const res = await storage.createFile(
        import.meta.env.VITE_BUCKET_ID,
        fileID,
        file,
      );

      if (!res) throw new Error("Upload failed");

      const result = storage.getFilePreview(
        import.meta.env.VITE_BUCKET_ID,
        res.$id,
      );

      // Handle successful upload (optional)
      // console.log("Image uploaded successfully:", result.href);
      setImageURL(result.href);
      if (result) setUploadSuccess(true);
    } catch (error) {
      console.error("Error uploading image:", error);
      if (error) setUploadError(true);
    }
    // finally {
    //   setIsLoading(false);
    // }
  }

  useEffect(function () {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    async function drawCanvasContent() {
      ctx.strokeStyle = theme === "light" ? "#CBD5E1" : "#30363d";
      ctx.lineWidth = "0.4";

      // Load and draw project images maintaining aspect ratio
      ctx.clearRect(310, 335, 300, 210);
      const project1Img = await loadImageWithCors(selectProject1Image);
      drawImageScaled(ctx, project1Img, 320, 339, 290, 200);

      ctx.clearRect(660, 335, 360, 210);
      const project2Img = await loadImageWithCors(selectProject2Image);
      drawImageScaled(ctx, project2Img, 670, 340, 330, 205);
    }

    drawCanvasContent();
    //------- Intro Box ---------
    drawGridStructure(ctx, 20, 20, 657, 289, 20);
    ctx.stroke();

    // Name
    ctx.clearRect(45, 100, 610, 70);
    ctx.fillStyle = theme === "light" ? "#020617" : "#f8fafc";
    ctx.font = "bold 48px sans-serif";
    ctx.fillText(name, 50, 150, 600);

    // Intro text
    ctx.clearRect(45, 200, 610, 95);
    ctx.fillStyle = theme === "light" ? "#1e293b" : "#cbd5e1";
    ctx.font = "32px sans-serif";
    // ctx.fillText(intro, 50, 250, 600);
    drawWrappedText(ctx, intro, 50, 250, 600, 37);

    // job role reactangle and text
    drawGridStructure(ctx, 480, 40, 175, 30, 5);
    ctx.fillStyle = theme === "light" ? "#ECFCCB" : "#365314";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(500, 55, 8, 0, 2 * Math.PI);
    ctx.fillStyle = "#BFDE8C";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(500, 55, 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#729643";
    ctx.fill();

    ctx.font = "14px sans-serif";
    ctx.fillStyle = theme === "light" ? "#365314" : "#ECFCCB";
    ctx.fillText(job, 515, 60, 600);

    // Tags below name
    // Tag 1
    // drawGridStructure(ctx, 50, 170, 150, 25, 5);
    // ctx.fillStyle = "#BFDBFE";
    // ctx.fill();
    // ctx.font = "14px sans-serif";
    // ctx.fillStyle = "#1E3A8A";
    // ctx.fillText(primarySkill, 60, 188, 600);

    // // Tag 2
    // drawGridStructure(ctx, 220, 170, 150, 25, 5);
    // ctx.fillStyle = "#F5D0FE";
    // ctx.fill();
    // ctx.font = "14px sans-serif";
    // ctx.fillStyle = "#701A75";
    // ctx.fillText(secondarySkill, 230, 188, 600);

    // // Tag 3
    // drawGridStructure(ctx, 390, 170, 150, 25, 5);
    // ctx.fillStyle = "#FECDD3";
    // ctx.fill();
    // ctx.font = "14px sans-serif";
    // ctx.fillStyle = "#881337";
    // ctx.fillText(tertiarySkill, 400, 188, 600);

    const skills = [
      {
        text: primarySkill,
        color: theme === "light" ? "#BFDBFE" : "#1E3A8A",
        textColor: theme === "light" ? "#1E3A8A" : "#BFDBFE",
      },
      {
        text: secondarySkill,
        color: theme === "light" ? "#F5D0FE" : "#701A75",
        textColor: theme === "light" ? "#701A75" : "#F5D0FE",
      },
      {
        text: tertiarySkill,
        color: theme === "light" ? "#FECDD3" : "#881337",
        textColor: theme === "light" ? "#881337" : "#FECDD3",
      },
    ];

    ctx.clearRect(50, 170, 180, 25);
    ctx.clearRect(220, 170, 180, 25);
    ctx.clearRect(390, 170, 180, 25);

    const padding = 20;
    let currentX = 50; // Starting position for the first rectangle

    skills.map((skill) => {
      ctx.font = "14px sans-serif";
      const textWidth = ctx.measureText(skill.text).width;

      // Adjust the rectangle width based on the text width
      const rectWidth = textWidth + padding;

      // Draw the rectangle
      drawGridStructure(ctx, currentX, 170, rectWidth, 25, 5);
      ctx.fillStyle = skill.color;
      ctx.fill();

      // Draw the text
      ctx.fillStyle = skill.textColor;
      ctx.fillText(skill.text, currentX + padding / 2, 188);

      // Update the x position for the next rectangle
      currentX += rectWidth + 20; // Adding 10px gap between rectangles

      return null;
    });

    // ---------- Portfolio Box ---------
    drawGridStructure(ctx, 697, 20, 324, 134, 20);
    ctx.stroke();

    ctx.clearRect(700, 75, 300, 40);
    ctx.fillStyle = theme === "light" ? "#1e293b" : "#cbd5e1";
    ctx.font = "18px sans-serif";
    ctx.fillText("Visit for more info", 720, 90, 600);

    ctx.clearRect(700, 105, 305, 40);
    ctx.font = "32px sans-serif";
    ctx.fillStyle = theme === "light" ? "#020617" : "#f8fafc";
    ctx.fillText(portfolio, 720, 130, 600);

    // ---------- Tech Box
    drawGridStructure(ctx, 697, 174, 324, 134, 20);
    ctx.stroke();

    ctx.clearRect(700, 225, 300, 40);
    ctx.font = "18px sans-serif";
    ctx.fillStyle = theme === "light" ? "#1e293b" : "#cbd5e1";
    ctx.fillText("Reach me on X", 720, 240, 600);

    ctx.clearRect(700, 265, 300, 30);
    ctx.font = "32px sans-serif";
    ctx.fillStyle = theme === "light" ? "#020617" : "#f8fafc";
    ctx.fillText(xUsername, 720, 280, 600);

    // --------- Project Box -----------
    drawGridStructure(ctx, 20, 329, 260, 225, 20);
    ctx.stroke();

    // Add logo box
    drawGridStructure(ctx, 45, 350, 60, 60, 10);
    ctx.fillStyle = theme === "light" ? "#f8fafc" : "#020617";
    ctx.fill();
    ctx.fillStyle = theme === "light" ? "#020617" : "#f8fafc";
    ctx.lineWidth = "0.4";
    ctx.stroke();

    ctx.clearRect(40, 430, 230, 50);
    ctx.font = "bold 22px sans-serif";
    ctx.fillStyle = theme === "light" ? "#020617" : "#f8fafc";
    ctx.fillText(projectName, 45, 450, 600);

    ctx.clearRect(40, 455, 230, 85);
    ctx.font = "15px sans-serif";
    ctx.fillStyle = theme === "light" ? "#020617" : "#f8fafc";
    // ctx.fillText(projectIntro, 45, 500, 600);
    drawWrappedText(ctx, projectIntro, 45, 495, 220, 20);

    // ---------- Project Snap 1 Box ------------
    drawGridStructure(ctx, 300, 329, 330, 225, 20);
    ctx.stroke();

    // Project Snap 2 Box
    drawGridStructure(ctx, 650, 329, 372, 225, 20);
    ctx.stroke();

    // --------- Add Images ------------

    // Load and draw images - Globe Icon
    ctx.clearRect(965, 30, 35, 35);
    const websiteIcon = new Image();
    websiteIcon.src = theme === "light" ? "/globe.png" : "/globe-dark.png";
    websiteIcon.onload = () => {
      ctx.drawImage(websiteIcon, 970, 35, 30, 30);
    };

    // Load and draw images - X Icon
    ctx.clearRect(965, 185, 35, 35);
    const xIcon = new Image();
    xIcon.src = theme === "light" ? "/x-logo.png" : "/x-logo-dark.png";
    xIcon.onload = () => {
      ctx.drawImage(xIcon, 970, 190, 30, 30);
    };

    // Load and draw images
    const projectLogoImg = new Image();
    projectLogoImg.src = selectProjectLogo;
    projectLogoImg.onload = () => {
      ctx.drawImage(projectLogoImg, 45, 350, 60, 60);
    };

    ctx.clearRect(35, 35, 55, 55);
    const avatarImage = new Image();
    avatarImage.src = selectAvatar;
    avatarImage.onload = () => {
      // ctx.drawImage(avatarImage, 50, 50, 40, 40);
      // Save the current canvas state
      ctx.save();

      // Define a circular clipping path
      ctx.beginPath();
      ctx.arc(70, 70, 20, 0, Math.PI * 2); // The circle's center is at (70, 70) with a radius of 20
      ctx.closePath();
      ctx.clip();

      // Draw the image within the circular clipping path
      ctx.drawImage(avatarImage, 50, 50, 40, 40);

      // Restore the canvas state to remove the clipping path
      ctx.restore();
    };

    // const project1Img = new Image();
    // project1Img.src = selectProject1Image;
    // project1Img.onload = () => {
    //   ctx.drawImage(project1Img, 310, 339, 310, 205);
    // };

    // const project2Img = new Image();
    // project2Img.src = selectProject2Image;
    // project2Img.onload = () => {
    //   ctx.drawImage(project2Img, 660, 339, 350, 205);
    // };
  });

  return (
    <div>
      <canvas ref={canvasRef} width={1040} height={600}></canvas>
      <Button
        onClick={downloadImage}
        className="text-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700/90"
      >
        Save Your Grid
      </Button>
      {/* {isLoading && } */}
      {uploadSuccess && (
        <p className="mt-4 text-sm text-green-600 dark:text-green-300">
          Grid Saved! Copy the HTML or markdown code from below and paste it on
          top of your GitHub Profile readme.
        </p>
      )}
      {uploadError && (
        <p className="mt-4 text-sm text-red-600 dark:text-red-300">
          Something went wrong. Could not save your grid. Please try again!
        </p>
      )}
    </div>
  );
}

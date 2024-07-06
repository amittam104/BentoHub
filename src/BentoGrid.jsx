/* eslint-disable react/prop-types */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Globe } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

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
        avatar={avatar}
        projectName={projectName}
        projectLogo={projectLogo}
        projectIntro={projectIntro}
        selectProject1Image={selectProject1Image}
        selectProject2Image={selectProject2Image}
        elements={elements}
        containerRef={containerRef}
        gridContainerRef={gridContainerRef}
      />
    </section>
  );
}

function Grid({
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
  // containerRef,
  gridContainerRef,
}) {
  const [projectImage, setProjectImage] = useState(null);
  const [projectImage2, setProjectImage2] = useState(null);

  useEffect(
    function () {
      const projectSnap = localStorage.getItem("projectScreenshot");

      if (projectSnap) {
        setProjectImage(projectSnap);
      }
    },
    [selectProject1Image],
  );

  useEffect(
    function () {
      const projectSnap2 = localStorage.getItem("projectScreenshot2");

      if (projectSnap2) {
        setProjectImage2(projectSnap2);
      }
    },
    [selectProject2Image],
  );

  return (
    <div
      ref={gridContainerRef}
      className="grid max-w-[65rem] grid-cols-2 gap-4 lg:max-h-[35rem] lg:grid-cols-12 lg:grid-rows-12"
    >
      <div className="relative col-span-2 flex max-w-full flex-col items-start rounded-3xl border border-slate-300 p-6 pt-6 text-start lg:col-span-8 lg:row-span-6 dark:border-[1px] dark:border-[#30363d]">
        <div className="absolute right-4 top-4 flex items-center gap-3 rounded-md bg-green-100 px-3 py-1 text-sm dark:bg-green-900">
          <img className="static h-6 w-6" src="/circle-svgrepo-com.svg" />
          <p className="static font-medium text-green-900 dark:text-slate-100">
            {job}
          </p>
        </div>
        <div className="mt-6 pb-6 sm:mt-0">
          <Avatar>
            <AvatarImage
              src={
                avatar
                  ? avatar
                  : `https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg`
              }
            />
            <AvatarFallback>Avatar</AvatarFallback>
          </Avatar>
        </div>
        <h3 className="mb-4 text-4xl font-black">{name}</h3>
        <div className="mb-6 flex flex-col gap-2 sm:flex-row">
          <Badge variant={"primarySkill"}>{primarySkill}</Badge>
          <Badge variant={"secondarySkill"}>{secondarySkill}</Badge>
          <Badge variant={"tertiarySkill"}>{tertiarySkill}</Badge>
        </div>
        <p className="text-2xl dark:text-slate-300">{intro}</p>
      </div>
      <div className="relative col-span-2 flex flex-col items-start justify-end gap-2 rounded-3xl border border-slate-300 p-6 sm:col-span-1 lg:col-span-4 lg:row-span-3 dark:border-[1px] dark:border-[#30363d]">
        <Globe size={28} className="absolute right-4 top-4" />
        <p className="text-slate-500">Reach me out</p>
        <p className="text-2xl font-medium">{portfolio}</p>
      </div>
      <div
        // ref={containerRef}
        className="col-span-2 grid grid-cols-4 content-center justify-items-center gap-4 rounded-3xl border border-slate-300 p-4 sm:col-span-1 lg:col-span-4 lg:row-span-3 dark:border-[1px] dark:border-[#30363d]"
      >
        {elements &&
          elements.map((element, index) => (
            <div key={index} className="h-10 w-10">
              {element.outerHTML && (
                <div
                  dangerouslySetInnerHTML={{ __html: element.outerHTML }}
                ></div>
              )}
            </div>
          ))}
      </div>
      <div className="col-span-2 flex flex-col items-start justify-center rounded-3xl border border-slate-300 p-6 text-start md:col-span-1 lg:col-span-3 lg:row-span-6 dark:border-[1px] dark:border-[#30363d]">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg border-slate-200 bg-white p-2 shadow dark:border-[1px] dark:border-[#30363db3] dark:bg-[#1c242d]">
          <img
            src={
              projectLogo
                ? projectLogo
                : `https://www.amittambulkar.com/logo.svg`
            }
            alt="project logo"
          />
        </div>
        <h4 className="mb-6 text-lg font-semibold">{projectName}</h4>
        <p className="text-sm">
          {projectIntro
            ? projectIntro
            : `Add one line intro for your capstone project here. Showcase the features in few simple words.`}
        </p>
      </div>
      <div className="col-span-2 flex items-center justify-center rounded-3xl border border-slate-300 p-4 md:col-span-1 lg:col-span-4 lg:row-span-6 dark:border-[1px] dark:border-[#30363d]">
        <img
          className="max-h-full w-auto rounded-lg border-[3px] border-slate-800 shadow-xl"
          src={projectImage ? projectImage : `/BentoHubSnap.png`}
          alt="bento hub app screenshot"
        />
      </div>
      <div className="col-span-2 flex items-center justify-center overflow-hidden rounded-3xl border border-slate-300 p-6 md:col-span-1 lg:col-span-5 lg:row-span-6 dark:border-[1px] dark:border-[#30363d]">
        <img
          className="max-h-full w-auto rounded-lg border-[3px] border-slate-800 shadow-xl"
          src={projectImage2 ? projectImage2 : `/portfolio.png`}
          alt="Portfolio screenshot"
        />
      </div>
    </div>
  );
}

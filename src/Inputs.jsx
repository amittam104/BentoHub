/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Inputs({
  children,
  secondStep,
  thirdStep,
  inputsView,
}) {
  return (
    <section
      ref={inputsView}
      className="mx-4 mb-8 w-auto rounded-3xl bg-white px-3 py-8 drop-shadow-[3px_3px_18px_rgba(0,0,0,0.06)] sm:px-8 md:p-12 lg:p-4 xl:mx-auto xl:w-[75rem] dark:border-[1px] dark:border-[#30363db3] dark:bg-[#161b22]"
    >
      <Card className="border-none shadow-none dark:bg-[#161b22]">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Enter your details
          </CardTitle>
          <CardDescription>
            {!secondStep &&
              !thirdStep &&
              `Fill out the details, checkout the grid below.`}
            {secondStep && `Some more details.`}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3 sm:p-6">{children}</CardContent>
      </Card>
    </section>
  );
}

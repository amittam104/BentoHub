/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";

export function Form3({ onThirdStep }) {
  return (
    <div>
      <Button
        className="lg:col-span-1 lg:col-end-12 lg:self-end"
        variant={"outline"}
        onClick={onThirdStep}
      >
        Back
      </Button>
    </div>
  );
}

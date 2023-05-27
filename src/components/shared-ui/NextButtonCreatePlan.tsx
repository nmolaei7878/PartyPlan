import React from "react";
import { useAppSelector } from "../../core/hook/hooks";

interface Props {
  onCLickNext: () => void;
}

const NextButtonCreatePlan: React.FC<Props> = ({ onCLickNext }) => {
  const ui = useAppSelector((state) => state.ui);

  return (
    <div className="h-1/10 flex items-end w-full absolute bottom-5 left-0 px-6 lg:bottom-10">
      <button
        onClick={onCLickNext}
        className={`h-12 w-full rounded-md bg-blue-300 text-lg font-bold uppercase text-white ${
          ui.next ? "opacity-100" : "opacity-50"
        }`}
      >
        {ui.stteper === 100 ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default React.memo(NextButtonCreatePlan);

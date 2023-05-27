import React, { useCallback } from "react";
import { useAppSelector } from "../../core/hook/hooks";
import { PlanKey } from "../../redux/slices/plan-slice";
import QaComponentHeader from "./QaComponentHeader";

interface QAComponenetPorps {
  data: KQA;
  callBack: (invite: string) => void;
  keyType: string;
}

const QAComponenet: React.FC<QAComponenetPorps> = ({
  data,
  callBack,
  keyType,
}) => {
  const plan = useAppSelector((state) => state.plan.newPlan);

  return (
    <div className="flex flex-col mt-5 gap-5">
      <QaComponentHeader icon_path={data.icon} question={data.question} />
      {data.answers.map((e) => (
        <button
          key={e}
          // perevent function creation
          onClick={() => {
            callBack(e);
          }}
          style={{
            border: e === plan![keyType as PlanKey] ? "1px solid #7ca7eb" : "",
            backgroundColor:
              e === plan![keyType as PlanKey] ? "rgb(0, 170, 255,0.2)" : "",
          }}
          className="h-11 w-full rounded-md text-left bg-zinc-800 text-lg font-bold text-white px-5"
        >
          {e}
        </button>
      ))}
    </div>
  );
};

export default React.memo(QAComponenet);

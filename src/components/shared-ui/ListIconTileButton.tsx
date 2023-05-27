import React, { useCallback } from "react";
import { useAppSelector } from "../../core/hook/hooks";
import { PlanKey } from "../../redux/slices/plan-slice";
import Question from "./Question";

interface ListIconTileButtonProps {
  callBack: (value: string) => void;
  data: KQAIcon;
  keyType: string;
}

const ListIconTileButton: React.FC<ListIconTileButtonProps> = ({
  callBack,
  data,
  keyType,
}) => {
  const plan = useAppSelector((state) => state.plan.newPlan);

  return (
    <>
      <Question question={data.question} />
      <div className="grid grid-cols-3 w-full gap-3 mt-4">
        {data.answers.map((e) => {
          return (
            <div
              key={e.title}
              onClick={() => {
                callBack(e.title);
              }}
              className="bg-zinc-900 rounded-md flex items-center flex-col justify-center px-2 py-3 cursor-pointer"
              style={{
                border:
                  e.title === plan![keyType as PlanKey]
                    ? `1px solid ${e.bo_color}`
                    : "",
                backgroundColor:
                  e.title === plan![keyType as PlanKey] ? `${e.bg_color}` : "",
              }}
            >
              <img
                className="h-5/6 w-5/6 sm:w-3/6 sm:h-3/6 md:h-2/6 md:w-2/6 min-[470px]:w-3/6 min-[631px]:w-3/6 px-3 "
                src={e.iconPath}
                alt=""
              />
              <p className="px-2 capitalize text-[0.95rem] ">{e.title}</p>
              <p className="text-[0.7rem] font-light">{e.desription}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default React.memo(ListIconTileButton);

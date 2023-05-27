import React, { useCallback } from "react";
import IconTileButton from "./IconTileButton";
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
  const click = useCallback((e: string) => {
    callBack(e);
  }, []);
  return (
    <>
      <Question question={data.question} />
      <div className="grid grid-cols-3 w-full gap-3 mt-4">
        {data.answers.map((e) => {
          return (
            <IconTileButton
              style={
                e.title === plan![keyType as PlanKey]
                  ? ({
                      backgroundColor: e.bg_color,
                      border: `1px solid ${e.bo_color}`,
                    } as SelectedStyle)
                  : ({} as SelectedStyle)
              }
              description={e.desription}
              onClick={click}
              icon={e.iconPath}
              title={e.title}
              key={e.iconPath}
            />
          );
        })}
      </div>
    </>
  );
};

export default React.memo(ListIconTileButton);

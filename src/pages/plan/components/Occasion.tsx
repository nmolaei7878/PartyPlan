import React, { useCallback, useEffect, useMemo } from "react";
import { KOccasion } from "../../../core/constatnt/KOccasion";
import Tile from "../../../components/shared-ui/Tile";
import { useAppDispatch, useAppSelector } from "../../../core/hook/hooks";
import { updateOccasion } from "../../../redux/plan-slice";
import { NextButton } from "../../../redux/ui-slice";

const Occasion = () => {
  const memoizeOcassion = useMemo(() => KOccasion, []);
  const dispatch = useAppDispatch();
  const plan = useAppSelector((state) => state.plan.newPlan);

  const addOccasion = useCallback((ocassion: string) => {
    dispatch(updateOccasion(ocassion));
    dispatch(NextButton(true));
  }, []);

  useEffect(() => {
    if (plan?.occasion !== "") {
      dispatch(NextButton(true));
    }
  }, []);

  return (
    <>
      <p className="mt-4 ">What is the Occasion?</p>
      <div className="grid grid-cols-3 w-full gap-3 mt-4">
        {memoizeOcassion.map((e) => {
          return (
            <Tile
              style={
                e.title === plan?.occasion
                  ? ({
                      backgroundColor: e.bg_color,
                      border: `1px solid ${e.bo_color}`,
                    } as SelectedStyle)
                  : ({} as SelectedStyle)
              }
              onClick={addOccasion}
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

export default Occasion;

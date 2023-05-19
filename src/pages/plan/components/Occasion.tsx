import React, { useMemo } from "react";
import { KOccasion } from "../../../core/constatnt/KOccasion";
import Tile from "../../home/shared/Tile";
import { useAppDispatch, useAppSelector } from "../../../core/hook/hooks";
import { NextButton, updateOccasion } from "../../../redux/plan-slice";
import { useOutletContext } from "react-router-dom";

const Occasion = () => {
  const memoizeOcassion = useMemo(() => KOccasion, []);
  const dispatch = useAppDispatch();
  const plan = useAppSelector((state) => state.plan.newPlan);

  const addOccasion = (ocassion: string) => {
    dispatch(updateOccasion(ocassion));
    dispatch(NextButton(true));
  };

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
                    } as TileStyle)
                  : ({} as TileStyle)
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

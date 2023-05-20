import React, { useCallback, useEffect, useMemo } from "react";
import Tile from "../../../components/shared-ui/Tile";
import { KGuest } from "../../../core/constatnt/KGuest";
import { useAppDispatch, useAppSelector } from "../../../core/hook/hooks";
import { updateGuest } from "../../../redux/plan-slice";
import { NextButton } from "../../../redux/ui-slice";

const Guest = () => {
  const memoizeKGuest = useMemo(() => KGuest, []);
  const plan = useAppSelector((state) => state.plan.newPlan);
  const dispatch = useAppDispatch();

  const addGuestSize = useCallback((guest: string) => {
    dispatch(updateGuest(guest));
    dispatch(NextButton(true));
  }, []);

  useEffect(() => {
    if (plan?.guestSize !== "") {
      dispatch(NextButton(true));
    }
  }, []);

  return (
    <>
      <p className="mt-4">What is the size of the guest list?</p>
      <div className="grid grid-cols-3 w-full gap-3 mt-4">
        {memoizeKGuest.map((e) => (
          <Tile
            style={
              e.title === plan?.guestSize
                ? ({
                    backgroundColor: e.bg_color,
                    border: `1px solid ${e.bo_color}`,
                  } as SelectedStyle)
                : ({} as SelectedStyle)
            }
            onClick={addGuestSize}
            icon={e.iconPath}
            title={e.title}
            description={e.desription}
            key={e.iconPath}
            height="9rem"
          />
        ))}
      </div>
    </>
  );
};

export default Guest;

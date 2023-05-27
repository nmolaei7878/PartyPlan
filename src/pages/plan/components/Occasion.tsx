import React, { useCallback, useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../../core/hook/hooks";
import { updateOccasion } from "../../../redux/slices/plan-slice";
import { NextButton } from "../../../redux/slices/ui-slice";
import ListIconTileButton from "../../../components/shared-ui/ListIconTileButton";
import { KQAIconOccasion } from "../../../core/constant/KQAIconOccasion";

const Occasion = () => {
  const memoizeOcassion = useMemo(() => KQAIconOccasion, []);
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
    <ListIconTileButton
      callBack={addOccasion}
      data={memoizeOcassion}
      keyType="occasion"
    />
  );
};

export default Occasion;

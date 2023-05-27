import { useCallback, useEffect, useMemo } from "react";
import { KQAIconGuest } from "../../../core/constant/KQAIconGuest";
import { useAppDispatch, useAppSelector } from "../../../core/hook/hooks";
import { updateGuest } from "../../../redux/slices/plan-slice";
import { NextButton } from "../../../redux/slices/ui-slice";
import ListIconTileButton from "../../../components/shared-ui/ListIconTileButton";

const Guest = () => {
  const memoizeKGuest = useMemo(() => KQAIconGuest, []);
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
    <ListIconTileButton
      callBack={addGuestSize}
      data={memoizeKGuest}
      keyType="guestSize"
    />
  );
};

export default Guest;

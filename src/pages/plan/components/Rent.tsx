import React, { useCallback, useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../../core/hook/hooks";
import { updateBoradGame } from "../../../redux/plan-slice";
import { NextButton } from "../../../redux/ui-slice";
import QAComponenet from "../../../components/shared-ui/QAComponenet";
import { KQABoardGames } from "../../../core/constatnt/KQABoardGames";

const Rent = () => {
  const memoizeKQABoardGames = useMemo(() => KQABoardGames, []);
  const dispatch = useAppDispatch();
  const plan = useAppSelector((state) => state.plan.newPlan);

  const addBoradGame = useCallback((invite: string) => {
    dispatch(updateBoradGame(invite));
    dispatch(NextButton(true));
  }, []);

  useEffect(() => {
    if (plan?.boardGame !== "") {
      dispatch(NextButton(true));
    }
  }, []);

  return (
    <QAComponenet
      callBack={addBoradGame}
      data={memoizeKQABoardGames}
      keyType="boardGame"
    />
  );
};

export default Rent;

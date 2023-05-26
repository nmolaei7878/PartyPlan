import { useCallback, useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../../core/hook/hooks";
import { NextButton } from "../../../redux/slices/ui-slice";
import { updateAlcohol } from "../../../redux/slices/plan-slice";
import QAComponenet from "../../../components/shared-ui/QAComponenet";
import { KQAAlcohol } from "../../../core/constant/KQAAlcohol";

const Alcohol = () => {
  const memoizeKQAAlcohol = useMemo(() => KQAAlcohol, []);
  const dispatch = useAppDispatch();
  const plan = useAppSelector((state) => state.plan.newPlan);

  const addAlcohol = useCallback((alcohol: string) => {
    dispatch(updateAlcohol(alcohol));
    dispatch(NextButton(true));
  }, []);

  useEffect(() => {
    if (plan?.alcohol !== "") {
      dispatch(NextButton(true));
    }
  }, []);

  return (
    <QAComponenet
      callBack={addAlcohol}
      data={memoizeKQAAlcohol}
      keyType="alcohol"
    />
  );
};

export default Alcohol;

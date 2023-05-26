import { useCallback, useEffect, useMemo } from "react";
import { KQAFood } from "../../../core/constant/KQAFood";
import { useAppDispatch, useAppSelector } from "../../../core/hook/hooks";
import { updateFood } from "../../../redux/slices/plan-slice";
import { NextButton } from "../../../redux/slices/ui-slice";
import QAComponenet from "../../../components/shared-ui/QAComponenet";

const Food = () => {
  const memoizeKQAFood = useMemo(() => KQAFood, []);
  const dispatch = useAppDispatch();
  const plan = useAppSelector((state) => state.plan.newPlan);

  const addFood = useCallback((food: string) => {
    dispatch(updateFood(food));
    dispatch(NextButton(true));
  }, []);

  useEffect(() => {
    if (plan?.foodArrangment !== "") {
      dispatch(NextButton(true));
    }
  }, []);

  return (
    <QAComponenet
      callBack={addFood}
      data={memoizeKQAFood}
      keyType="foodArrangment"
    />
  );
};

export default Food;

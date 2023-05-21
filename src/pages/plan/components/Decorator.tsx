import React, { useCallback, useEffect, useMemo } from "react";
import { KQADecorator } from "../../../core/constant/KQADecorator";
import QAComponenet from "../../../components/shared-ui/QAComponenet";
import { useAppDispatch, useAppSelector } from "../../../core/hook/hooks";
import { NextButton } from "../../../redux/ui-slice";
import { updateDecorator } from "../../../redux/plan-slice";

const Decorator = () => {
  const memoizeKQADecorator = useMemo(() => KQADecorator, []);
  const dispatch = useAppDispatch();
  const plan = useAppSelector((state) => state.plan.newPlan);

  const addDecorator = useCallback((decorator: string) => {
    dispatch(updateDecorator(decorator));
    dispatch(NextButton(true));
  }, []);

  useEffect(() => {
    if (plan?.decorator !== "") {
      dispatch(NextButton(true));
    }
  }, []);

  return (
    <QAComponenet
      callBack={addDecorator}
      data={memoizeKQADecorator}
      keyType="decorator"
    />
  );
};

export default Decorator;

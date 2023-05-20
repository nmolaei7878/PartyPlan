import { useCallback, useEffect, useMemo } from "react";
import { KQAInvite } from "../../../core/constatnt/KQAInvite";
import { useAppDispatch, useAppSelector } from "../../../core/hook/hooks";
import { updateInvite } from "../../../redux/plan-slice";
import { NextButton } from "../../../redux/ui-slice";
import QAComponenet from "../../../components/shared-ui/QAComponenet";

const Invite = () => {
  const memoizeKQAInvite = useMemo(() => KQAInvite, []);
  const dispatch = useAppDispatch();
  const plan = useAppSelector((state) => state.plan.newPlan);

  const addInvite = useCallback((invite: string) => {
    dispatch(updateInvite(invite));
    dispatch(NextButton(true));
  }, []);

  useEffect(() => {
    if (plan?.eInvite !== "") {
      dispatch(NextButton(true));
    }
  }, []);

  return (
    <QAComponenet
      callBack={addInvite}
      data={memoizeKQAInvite}
      keyType="eInvite"
    />
  );
};

export default Invite;

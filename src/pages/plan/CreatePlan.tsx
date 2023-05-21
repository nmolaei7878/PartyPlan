import React, { useCallback, useEffect, useMemo } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import KPlanRouteNames from "../../core/constant/KRouteNames";
import { useAppDispatch, useAppSelector } from "../../core/hook/hooks";
import {
  NextButton,
  addToStteper,
  removeFromStteper,
} from "../../redux/ui-slice";
import { addPlan, resetPlan } from "../../redux/plan-slice";
import HeaderCreatePlan from "../../components/shared-ui/HeaderCreatePlan";
import NextButtonCreatePlan from "../../components/shared-ui/NextButtonCreatePlan";

const CreatePlan = () => {
  const history = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const plans = useAppSelector((state) => state.plan);
  const ui = useAppSelector((state) => state.ui);

  useEffect(
    useCallback(() => {
      window.onpopstate = () => {
        dispatch(NextButton(true));
        dispatch(removeFromStteper());
      };
    }, []),
    [window.onpopstate]
  );

  const memoizeId = useMemo(() => {
    if (history.state) {
      return history.state.id;
    } else {
      history.state = plans.createdID;
      return plans.createdID;
    }
  }, []);

  const nextStep = useCallback(() => {
    dispatch(NextButton(false));
    dispatch(addToStteper());
    switch (history.pathname.split("/").at(-1)) {
      case KPlanRouteNames.Occasion:
        navigate(KPlanRouteNames.Guest);
        break;

      case KPlanRouteNames.Guest:
        navigate(KPlanRouteNames.Event);
        break;

      case KPlanRouteNames.Event:
        navigate(KPlanRouteNames.Invite);
        break;

      case KPlanRouteNames.Invite:
        navigate(KPlanRouteNames.Food);
        break;

      case KPlanRouteNames.Food:
        navigate(KPlanRouteNames.Alcohol);
        break;

      case KPlanRouteNames.Alcohol:
        navigate(KPlanRouteNames.Decorator);
        break;

      case KPlanRouteNames.Decorator:
        navigate(KPlanRouteNames.Rent);
        break;

      case KPlanRouteNames.Rent:
        dispatch(addPlan());
        dispatch(resetPlan());
        navigate("/", { replace: true });
        break;

      default:
        navigate("/", { replace: true });
        break;
    }
  }, [history.pathname]);

  const onCLickNext = () => {
    if (ui.next) {
      nextStep();
    }
  };

  return (
    <div className="h-full w-full text-white text-lg font-bold flex flex-col justify-between">
      <HeaderCreatePlan />
      <div className=" h-8/10 ">
        <Outlet context={memoizeId} />
      </div>
      <NextButtonCreatePlan onCLickNext={onCLickNext} />
    </div>
  );
};

export default CreatePlan;

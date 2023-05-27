import React, { useCallback, useEffect, useMemo } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import KPlanRouteNames from "../../core/constant/KRouteNames";
import { useAppDispatch, useAppSelector } from "../../core/hook/hooks";
import {
  NextButton,
  addToStteper,
  removeFromStteper,
} from "../../redux/slices/ui-slice";
import { addPlan, resetPlan } from "../../redux/slices/plan-slice";
import HeaderCreatePlan from "../../components/shared-ui/HeaderCreatePlan";
import NextButtonCreatePlan from "../../components/shared-ui/NextButtonCreatePlan";

const CreatePlan = () => {
  const history = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const plans = useAppSelector((state) => state.plan);
  const ui = useAppSelector((state) => state.ui);
  const pathName = history.pathname.split("/").at(-1);
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
    switch (pathName) {
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

  const onCLickNext = useCallback(() => {
    if (ui.next) {
      nextStep();
    }
  }, [ui]);

  const routeIndicator = useMemo(() => {
    let routeList = [];

    for (const key in KPlanRouteNames) {
      if (pathName !== key.toLowerCase()) {
        routeList.push(<div className={`text-gray-500 px-2 py-1`}>{key}</div>);
        continue;
      }

      routeList.push(
        <div className={`px-2 py-2 rounded-md text-white bg-zinc-800`}>
          {key}
        </div>
      );
    }
    return routeList;
  }, [history.pathname]);

  return (
    <div className="h-full w-full text-white text-lg font-bold lg:flex min-h-screen lg:gap-5">
      <div className="lg:flex hidden w-2/12 h-1/2 flex-col gap-5">
        {routeIndicator}
      </div>
      <div className="lg:w-10/12 lg:relative ">
        <HeaderCreatePlan />
        <div className="h-8/10 mt-10">
          <Outlet context={memoizeId} />
        </div>
        <NextButtonCreatePlan onCLickNext={onCLickNext} />
      </div>
    </div>
  );
};

export default CreatePlan;

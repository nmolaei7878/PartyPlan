import React, { useCallback, useEffect, useMemo } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import KPlanRouteNames from "../../core/constant/KRouteNames";
import BackIcon from "../../assets/icons/back_icon.svg";
import { useAppDispatch, useAppSelector } from "../../core/hook/hooks";
import {
  NextButton,
  addToStteper,
  removeFromStteper,
} from "../../redux/ui-slice";
import { addPlan } from "../../redux/plan-slice";

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
        navigate("/", { replace: true });
        break;

      default:
        navigate("/", { replace: true });
        break;
    }
  }, [history.pathname]);

  const goBack = useCallback(() => {
    navigate(-1);
  }, []);

  const onCLickNext = () => {
    if (ui.next) {
      nextStep();
    }
  };

  return (
    <div className="h-full w-full text-white text-lg font-bold flex flex-col justify-between">
      <div className="h-1/20 ">
        <div className="flex items-center gap-3  ">
          <img onClick={goBack} className="w-8" src={BackIcon} alt="" />
          <p className="text-xl">Create a New Event</p>
        </div>
        <div className="w-full bg-gray-600 h-1 mt-3">
          <div
            className="bg-blue-300 h-1 mt-3 "
            style={{
              width: `${ui.stteper}%`,
            }}
          ></div>
        </div>
      </div>
      <div className=" h-8/10 ">
        <Outlet context={memoizeId} />
      </div>
      <div className="h-1/10 flex items-end w-full absolute bottom-5 left-0 px-6">
        <button
          onClick={onCLickNext}
          className={`h-12 w-full rounded-md bg-blue-300 text-lg font-bold uppercase text-white ${
            ui.next ? "opacity-100" : "opacity-50"
          }`}
        >
          {ui.stteper === 100 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default CreatePlan;

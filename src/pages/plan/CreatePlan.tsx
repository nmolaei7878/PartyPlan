import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import KPlanRouteNames from "../../core/constatnt/KRouteNames";
import BackIcon from "../../assets/icons/back_icon.svg";
import { useAppDispatch, useAppSelector } from "../../core/hook/hooks";
import { addToStteper, removeFromStteper } from "../../redux/plan-slice";

const CreatePlan = () => {
  const history = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const plans = useAppSelector((state) => state.plan);

  const memoizeId = useMemo(() => {
    if (history.state) {
      return history.state.id;
    } else {
      history.state = plans.createdID;
      return plans.createdID;
    }
  }, []);

  const route = useCallback(() => {
    switch (history.pathname.split("/").at(-1)) {
      case KPlanRouteNames.Occasion:
        dispatch(addToStteper(24));
        navigate(KPlanRouteNames.Guest);
        break;
      case KPlanRouteNames.Guest:
        dispatch(addToStteper(36));
        navigate(KPlanRouteNames.Event);
        break;
      case KPlanRouteNames.Event:
        dispatch(addToStteper(48));
        navigate(KPlanRouteNames.Invite);
        break;
      case KPlanRouteNames.Invite:
        dispatch(addToStteper(60));
        navigate(KPlanRouteNames.Food);
        break;
      case KPlanRouteNames.Food:
        dispatch(addToStteper(72));
        navigate(KPlanRouteNames.Alcohol);
        break;
      case KPlanRouteNames.Alcohol:
        dispatch(addToStteper(84));
        navigate(KPlanRouteNames.Decorator);
        break;
      case KPlanRouteNames.Decorator:
        dispatch(addToStteper(100));
        navigate(KPlanRouteNames.Rent);
        break;
      case KPlanRouteNames.Rent:
        navigate("/", { replace: true });
        break;
      default:
        navigate("/", { replace: true });
        break;
    }
  }, [history.pathname]);

  const goBack = () => {
    dispatch(removeFromStteper());
    navigate(-1);
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
              width: `${plans.stteper}%`,
            }}
          ></div>
        </div>
      </div>
      <div className=" h-8/10 ">
        <Outlet context={memoizeId} />
      </div>
      <div className="h-1/10 flex items-end w-full">
        <button
          onClick={route}
          className="h-12 w-full rounded-md bg-blue-300 text-lg font-bold text-white"
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default CreatePlan;

import React, { useCallback, useMemo } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import PlanRouteNames from "../../core/constatnt/RouteNames";

const CreatePlan = () => {
  const history = useLocation();
  const navigate = useNavigate();

  const route = useCallback(() => {
    console.log(history.pathname);

    switch (history.pathname.split("/").at(-1)) {
      case PlanRouteNames.Occasion:
        navigate(PlanRouteNames.Guest);
        break;
      case PlanRouteNames.Guest:
        navigate(PlanRouteNames.Event);
        break;
      case PlanRouteNames.Event:
        navigate(PlanRouteNames.Invite);
        break;
      case PlanRouteNames.Invite:
        navigate(PlanRouteNames.Food);
        break;
      case PlanRouteNames.Food:
        navigate(PlanRouteNames.Alcohol);
        break;
      case PlanRouteNames.Alcohol:
        navigate(PlanRouteNames.Decorator);
        break;
      case PlanRouteNames.Decorator:
        navigate(PlanRouteNames.Rent);
        break;
      case PlanRouteNames.Rent:
        navigate("/");
        break;
      default:
        navigate("/");
        break;
    }
  }, [history.pathname]);

  return (
    <div className="h-full w-full  flex flex-col justify-between">
      <div className="h-1/10 bg-blue-500">static</div>
      <div className=" h-8/10 bg-red-200">
        <Outlet />
      </div>
      <div className="h-1/10 flex items-end w-full">
        <button
          onClick={route}
          className="h-14 w-full rounded-md bg-blue-400 text-lg font-bold text-white"
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default CreatePlan;

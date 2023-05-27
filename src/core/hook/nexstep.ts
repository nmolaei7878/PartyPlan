import KPlanRouteNames from "../constant/KRouteNames";
import { useEffect, useState } from "react";

const useNextStep = (pathName: string) => {
  const [goPath, setPath] = useState("");
  useEffect(() => {
    switch (pathName) {
      case KPlanRouteNames.Occasion:
        setPath(KPlanRouteNames.Guest);
        break;
      case KPlanRouteNames.Guest:
        setPath(KPlanRouteNames.Event);
        break;
      case KPlanRouteNames.Event:
        setPath(KPlanRouteNames.Invite);
        break;
      case KPlanRouteNames.Invite:
        setPath(KPlanRouteNames.Food);
        break;
      case KPlanRouteNames.Food:
        setPath(KPlanRouteNames.Alcohol);
        break;
      case KPlanRouteNames.Alcohol:
        setPath(KPlanRouteNames.Decorator);
        break;
      case KPlanRouteNames.Decorator:
        setPath(KPlanRouteNames.Rent);
        break;
      case KPlanRouteNames.Rent:
        setPath("home");
        break;
      default:
        setPath("home");
        break;
    }
  }, [pathName]);
  return goPath;
};

export default useNextStep;

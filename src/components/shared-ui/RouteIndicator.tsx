import React, { useMemo } from "react";
import KPlanRouteNames from "../../core/constant/KRouteNames";
import { useLocation } from "react-router-dom";

interface RouteIndicatorProps {
  pathName: string;
}

const RouteIndicator: React.FC<RouteIndicatorProps> = ({ pathName }) => {
  const history = useLocation();

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
    <div className="lg:flex hidden w-2/12 h-1/2 flex-col gap-5">
      {routeIndicator}
    </div>
  );
};

export default React.memo(RouteIndicator);

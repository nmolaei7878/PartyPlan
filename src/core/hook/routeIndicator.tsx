import KPlanRouteNames from "../constant/KRouteNames";

const useRouteIndicator = (pathName: string) => {
  let routeList = [];

  for (const key in KPlanRouteNames) {
    if (pathName !== key.toLowerCase()) {
      routeList.push(<div className={`text-gray-500 px-2 py-1`}>{key}</div>);
      continue;
    }

    routeList.push(
      <div className={`px-2 py-2 rounded-md text-white bg-zinc-800`}>{key}</div>
    );
  }
  return routeList;
};

export default useRouteIndicator;

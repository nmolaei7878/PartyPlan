import UpComingCard from "./components/UpComingCard";
import Header from "./components/Header";
import { useAppSelector } from "../../core/hook/hooks";
import NoUpComingCard from "./components/NoUpComingCard";
import PervListTile from "./components/PervListTile";
import usePlanHook from "../../core/hook/planhook";

const HomePage = () => {
  const plans = useAppSelector((state) => state.plan);

  const { pervPlans, upComingPlans } = usePlanHook(plans.plans);

  return (
    <div className="text-white font-bold text-xl flex flex-col gap-5 capitalize bg-black max-h-min">
      <Header isShow={upComingPlans.length > 0 ? true : false} />

      {upComingPlans.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {upComingPlans.map((plan, index) => (
            <UpComingCard plan={plan} index={index} key={plan.eventName} />
          ))}
        </div>
      ) : (
        <NoUpComingCard />
      )}

      <p className="mt-4">pervious house parties</p>

      <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-full gap-5 h-full mb-20 items-center ">
        {pervPlans.map((plan) => (
          <PervListTile
            key={plan.id}
            iconPath={plan.occasion}
            date={plan.eventDate}
            time={plan.eventTime}
            title={plan.eventName}
          />
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

import UpComingCard from "./components/UpComingCard";
import Header from "./components/Header";
import { useAppSelector } from "../../core/hook/hooks";
import NoUpComingCard from "./components/NoUpComingCard";
import PervListTile from "./components/PervListTile";
import { useEffect, useState } from "react";

const HomePage = () => {
  const plans = useAppSelector((state) => state.plan);

  const [pervPlans, setPervPlans] = useState(Array<Plan>);
  const [upComingPlans, setUpComingPlans] = useState(Array<Plan>);

  useEffect(() => {
    //check to posibly wrap with useCallBack
    let pervv = [];
    let coming = [];
    // iterate over all plans
    for (const plan of plans.plans) {
      const diffrence =
        new Date(plan.eventDate).getDate() - new Date().getDate();
      if (diffrence >= 0) {
        //coming plan
        coming.push(plan);
      } else {
        // passed plan
        pervv.push(plan);
      }
    }
    console.log(plans.plans);
    coming.sort(function (a, b) {
      return new Date(a.eventDate).getDate() - new Date(b.eventDate).getDate();
    });
    setPervPlans(pervv);
    setUpComingPlans(coming);
  }, [plans.plans]);

  return (
    <div className="text-white font-bold text-xl flex flex-col gap-5 capitalize bg-black max-h-min">
      <Header isShow={upComingPlans.length > 0 ? true : false} />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {upComingPlans.length > 0 ? (
          upComingPlans.map((plan, index) => (
            <UpComingCard plan={plan} index={index} key={plan.id} />
          ))
        ) : (
          <NoUpComingCard />
        )}
      </div>

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

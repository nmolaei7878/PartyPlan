import UpComingCard from "./components/UpComingCard";
import Header from "./components/Header";
import { useAppSelector } from "../../core/hook/hooks";
import NoUpComingCard from "./components/NoUpComingCard";
import { KIcons } from "../../core/constatnt/KIcons";
import PervListTile from "./components/PervListTile";
import { useEffect, useState } from "react";

const HomePage = () => {
  const plans = useAppSelector((state) => state.plan);

  const [pervPlans, setPervPlans] = useState(Array<Plan>);
  const [upComingPlans, setUpComingPlans] = useState(Array<Plan>);

  useEffect(() => {
    console.log("runnig");
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

    setPervPlans(pervv);
    setUpComingPlans(coming);
  }, [plans.plans]);

  return (
    <div className="text-white font-bold text-xl flex flex-col gap-5 capitalize bg-black max-h-min">
      <Header isShow={upComingPlans.length > 0 ? true : false} />

      {upComingPlans.length > 0 ? (
        upComingPlans.map((plan) => <UpComingCard plan={plan} />)
      ) : (
        <NoUpComingCard />
      )}

      <p className="mt-4">pervious house parties</p>

      <ul className="grid grid-cols-2 w-full gap-5 h-full mb-20 items-center ">
        {pervPlans.map((plan) => (
          <PervListTile
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

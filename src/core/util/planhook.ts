import { useEffect, useState } from "react";

const usePlanHook = (planList: Array<Plan>) => {
  const [pervPlans, setPervPlans] = useState(Array<Plan>);
  const [upComingPlans, setUpComingPlans] = useState(Array<Plan>);

  useEffect(() => {
    let pervv = [];
    let coming = [];
    // iterate over all plans
    for (const plan of planList) {
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
    coming.sort(function (a, b) {
      return new Date(a.eventDate).getDate() - new Date(b.eventDate).getDate();
    });
    setPervPlans(pervv);
    setUpComingPlans(coming);
  }, [planList]);

  return { pervPlans, upComingPlans };
};

export default usePlanHook;

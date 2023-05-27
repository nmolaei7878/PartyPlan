import { useEffect, useState } from "react";

const usePlanSeperator = (planList: Array<Plan>) => {
  const [pervPlans, setPervPlans] = useState(Array<Plan>);
  const [upComingPlans, setUpComingPlans] = useState(Array<Plan>);

  useEffect(() => {
    let pervv = [];
    let coming = [];
    // iterate over all plans
    for (const plan of planList) {
      let date1 = new Date();
      let date2 = new Date(plan.eventDate);

      let Difference_In_Time = date2.getTime() - date1.getTime();
      let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      if (Difference_In_Days >= 0) {
        //coming plan
        coming.push(plan);
      } else {
        // passed plan
        pervv.push(plan);
      }
    }

    setPervPlans(pervv);
    setUpComingPlans(coming);
  }, [planList]);

  return { pervPlans, upComingPlans };
};

export default usePlanSeperator;

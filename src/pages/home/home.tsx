import React from "react";
import ListTile from "./components/ListTile";
import Cacke from "../../assets/icons/cake.svg";
import UpComingCard from "./components/UpComingCard";
import Header from "./components/Header";
import { useAppSelector } from "../../core/hook/hooks";
import NoUpComingCard from "./components/NoUpComingCard";
import { useDispatch } from "react-redux";
import { resetStteper } from "../../redux/plan-slice";

const HomePage = () => {
  const plans = useAppSelector((state) => state.plan);

  return (
    <div className="text-white font-bold text-xl flex flex-col gap-5 capitalize bg-black max-h-min">
      <Header />

      {plans.plans.length > 0 ? (
        Array(1)
          .fill(null)
          .map((i) => <UpComingCard />)
      ) : (
        <NoUpComingCard />
      )}

      <p className="mt-4">pervious house parties</p>

      <ul className="flex flex-wrap w-full gap-5 h-full mb-20 items-center ">
        {Array(3)
          .fill(null)
          .map((i) => (
            <ListTile
              iconPath={Cacke}
              date="asdad"
              time="asdasd"
              title="mamad BirthDay"
            />
          ))}
      </ul>
    </div>
  );
};

export default HomePage;

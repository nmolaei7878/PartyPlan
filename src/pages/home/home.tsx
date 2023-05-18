import React from "react";
import ListTile from "./components/ListTile";
import Cacke from "../../assets/icons/cake.svg";
import UpComingCard from "./components/UpComingCard";
import Header from "./components/Header";

const HomePage = () => {
  return (
    <div className="text-white font-bold text-xl flex flex-col gap-10 capitalize bg-black max-h-min">
      <Header />
      <UpComingCard />

      <p className="">pervious house parties</p>

      <ul className="flex flex-wrap w-full gap-5 h-full mb-20 items-center ">
        {Array(2)
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

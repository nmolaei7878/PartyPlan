import React from "react";
import Sayl from "../../../assets/icons/sayl.svg";

const UpComingCard = () => {
  return (
    <div className="bg-gradient-to-r from-slate-500 to-slate-800 rounded-md h-40 p-6 relative">
      <p className="mb-2">no upcoming house party</p>
      <p className="text-sm mb-3 font-normal">Plan your house party</p>
      <button className="bg-blue-400 px-6 py-3 rounded-md uppercase text-sm">
        create a new event
      </button>

      <img
        className="absolute top-1/2 right-10 -translate-y-2/4 w-24"
        src={Sayl}
        alt=""
      />
    </div>
  );
};

export default UpComingCard;

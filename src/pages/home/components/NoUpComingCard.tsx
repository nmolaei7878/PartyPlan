import React, { useId } from "react";
import Sayl from "../../../assets/icons/sayl.svg";
import { useNavigate } from "react-router-dom";
import { createPlan, resetPlan } from "../../../redux/plan-slice";
import { useAppDispatch } from "../../../core/hook/hooks";
import { NextButton, resetStteper } from "../../../redux/ui-slice";

const NoUpComingCard = () => {
  const navigate = useNavigate();
  const id = useId();

  function goToCreatePlan() {
    dispatch(resetStteper());
    dispatch(resetPlan());
    dispatch(NextButton(false));
    dispatch(createPlan(id));
    navigate("/create-plan/occasion", { state: { id } });
  }
  const dispatch = useAppDispatch();

  return (
    <div className="bg-gradient-to-r from-slate-500 to-slate-800 rounded-md h-40 p-6 relative">
      <p className="mb-2 text-lg">no upcoming house party</p>
      <p className="text-sm mb-3 font-normal">Plan your house party</p>
      <button
        onClick={goToCreatePlan}
        className="bg-blue-400 px-6 py-3 rounded-md uppercase text-sm"
      >
        create a new event
      </button>

      <img
        className="absolute top-1/2 right-3 -translate-y-2/4 w-20"
        src={Sayl}
        alt=""
      />
    </div>
  );
};

export default NoUpComingCard;

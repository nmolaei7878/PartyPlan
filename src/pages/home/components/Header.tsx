import React from "react";
import Profile from "../../../assets/icons/profile.svg";
import { useAppSelector } from "../../../core/hook/hooks";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const plans = useAppSelector((state) => state.plan);
  const navigate = useNavigate();

  function goToCreatePlan() {
    navigate("/create-plan");
  }
  return (
    <>
      <header className="flex justify-between ">
        <div className="">hi, ishita 👋</div>
        <img src={Profile} alt="" />
      </header>
      {plans.plans.length > 0 && (
        <div className="flex justify-between items-center mt-2">
          <div className="">upcoming</div>
          <button
            onClick={goToCreatePlan}
            className="bg-gray-800 px-4 py-2 rounded-md capitalize text-sm "
          >
            create new
          </button>
        </div>
      )}
    </>
  );
};

export default Header;

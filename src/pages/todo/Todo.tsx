import React, { useCallback, useEffect } from "react";
import BackIcon from "../../assets/icons/back_icon.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../core/hook/hooks";

const Todo = () => {
  const { state } = useLocation();
  const { id } = state;
  const navigate = useNavigate();
  const plans = useAppSelector((state) => state.plan);

  useEffect(() => {
    const foundedPlan = plans.plans.find((e) => e.id === id);
  }, []);

  const goBack = useCallback(() => {
    navigate(-1);
  }, []);
  return (
    <div className="h-full w-full text-white text-lg font-bold flex flex-col justify-between">
      <div className="h-1/20 ">
        <div className="flex items-center gap-3  ">
          <img onClick={goBack} className="w-8" src={BackIcon} alt="" />
          <p className="text-xl">Checklist</p>
        </div>
      </div>
    </div>
  );
};

export default Todo;

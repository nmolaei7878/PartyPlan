import React, { useCallback } from "react";
import BackIcon from "../../assets/icons/back_icon.svg";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../core/hook/hooks";

const HeaderCreatePlan = () => {
  const navigate = useNavigate();
  const ui = useAppSelector((state) => state.ui);

  const goBack = useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <div className="h-1/20">
      <div className="flex items-center gap-3">
        <img onClick={goBack} className="w-8" src={BackIcon} alt="" />
        <p className="text-xl">Create a New Event</p>
      </div>
      <div className="w-full bg-gray-600 h-1 mt-3">
        <div
          className="bg-blue-300 h-1 mt-3 "
          style={{
            width: `${ui.stteper}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default React.memo(HeaderCreatePlan);

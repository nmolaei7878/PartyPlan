import { useMemo } from "react";
import Saly2 from "../../../assets/icons/Saly2.svg";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  plan: Plan;
}

const UpComingCard: React.FC<Props> = ({ plan }) => {
  const diffrenceDays = useMemo(() => {
    return new Date(plan.eventDate).getDate() - new Date().getDate();
  }, [plan]);

  const navigate = useNavigate();
  const goToTodo = () => {
    navigate(`/todo/${plan.id}`, {
      state: { id: plan.id },
    });
  };

  return (
    <div
      onClick={goToTodo}
      className="bg-gradient-to-r from-slate-500 to-slate-800 rounded-md h-40 p-6 relative"
    >
      <p className="mb-2 text-lg">{plan.eventName}</p>
      <p className="text-sm mb-3 font-normal">{`${diffrenceDays} days to go`}</p>
      <div></div>

      <img
        className="absolute top-1/2 right-3 -translate-y-2/4 w-28"
        src={Saly2}
        alt=""
      />
      <div className="flex items-center justify-between w-1/2 ">
        <div>
          <p className="text-md">0</p>
          <p className="text-sm text-gray-300">done</p>
        </div>
        <div>
          <p className="text-md">5</p>
          <p className="text-sm text-gray-300">To Do</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(UpComingCard);

import { useCallback, useEffect, useMemo } from "react";
import Saly2 from "../../../assets/icons/Saly2.svg";
import React from "react";
import { useNavigate } from "react-router-dom";
import TodoCount from "../../../components/shared-ui/TodoCount";
import useDiffrenceDateTime from "../../../core/hook/dateTime";

interface Props {
  plan: Plan;
  index: number;
}

const UpComingCard: React.FC<Props> = ({ plan, index }) => {
  const diffrenceDays = useDiffrenceDateTime(plan.eventDate);

  const navigate = useNavigate();
  const goToTodo = () => {
    navigate(`/todo/${plan.eventName}`, {
      state: {
        index: index,
        diffrenceDays: diffrenceDays,
        title: plan.eventName,
      },
    });
  };

  return (
    <div
      onClick={goToTodo}
      className="cursor-pointer bg-gradient-to-r from-slate-500 to-slate-800 rounded-md h-40 p-6 relative"
    >
      <p className="mb-2 text-lg">{plan.eventName}</p>
      <p className="text-sm mb-3 font-normal">{`${diffrenceDays} days to go`}</p>

      <img
        className="absolute top-1/2 right-3 -translate-y-2/4 w-28"
        src={Saly2}
        alt=""
      />
      <TodoCount width="w-1/2" planIndex={index} />
    </div>
  );
};

export default UpComingCard;

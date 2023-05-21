import { useCallback, useEffect, useMemo } from "react";
import Saly2 from "../../../assets/icons/Saly2.svg";
import React from "react";
import { useNavigate } from "react-router-dom";
import TodoCount from "../../../components/shared-ui/TodoCount";

interface Props {
  plan: Plan;
  index: number;
}

const UpComingCard: React.FC<Props> = ({ plan, index }) => {
  console.log(index);
  const diffrenceDays = useMemo(() => {
    return new Date(plan.eventDate).getDate() - new Date().getDate();
  }, [plan]);

  const navigate = useNavigate();
  const goToTodo = () => {
    navigate(`/todo/${plan.eventName}`, {
      state: { index: index },
    });
  };

  return (
    <div
      onClick={goToTodo}
      className="bg-gradient-to-r from-slate-500 to-slate-800 rounded-md h-40 p-6 relative"
    >
      <p className="mb-2 text-lg">{plan.eventName}</p>
      <p className="text-sm mb-3 font-normal">{`${diffrenceDays} days to go`}</p>

      <img
        className="absolute top-1/2 right-3 -translate-y-2/4 w-28"
        src={Saly2}
        alt=""
      />
      <TodoCount
        width="w-1/2"
        doneTodos={plan.doneTodos.length}
        remainingTodo={plan.remainingTodos.length}
      />
    </div>
  );
};

export default React.memo(UpComingCard);

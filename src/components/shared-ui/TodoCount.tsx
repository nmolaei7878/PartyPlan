import React, { useCallback, useEffect } from "react";
import { useAppSelector } from "../../core/hook/hooks";

interface Props {
  width: string;
  gap?: string;
  planIndex: number;
}

const TodoCount: React.FC<Props> = ({ width, gap, planIndex }) => {
  const plans = useAppSelector((state) => state.plan);

  let done = [];
  let remaining = [];

  const todos = useCallback(() => {
    for (const todo of plans.plans[planIndex].todos) {
      if (todo.status) {
        done.push(todo);
      } else {
        remaining.push(todo);
      }
    }
  }, [plans.plans[planIndex].todos]);

  useEffect(() => {
    todos();
  }, [plans.plans[planIndex].todos]);

  return (
    <div className={`flex items-center justify-between ${width}`}>
      <div>
        <p className="text-md">{done.length}</p>
        <p className="text-sm text-gray-300">done</p>
      </div>
      <div>
        <p className="text-md">{remaining.length}</p>
        <p className="text-sm text-gray-300">To Do</p>
      </div>
    </div>
  );
};

export default React.memo(TodoCount);

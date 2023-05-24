import React, { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "../../core/hook/hooks";

interface Props {
  width: string;
  gap?: string;
  planIndex: number;
}

const TodoCount: React.FC<Props> = ({ width, planIndex }) => {
  const plans = useAppSelector((state) => state.plan);

  const [done, setDone] = useState(0);
  const [remaining, setRemaining] = useState(0);

  const todos = useCallback(() => {
    let done = 0;
    let remaining = 0;

    for (const todo of plans.plans[planIndex].todos) {
      if (todo.status) {
        done += 1;
      } else {
        remaining += 1;
      }
    }
    setDone(done);
    setRemaining(remaining);
  }, [plans.plans[planIndex].todos]);

  useEffect(() => {
    todos();
  }, [plans.plans[planIndex].todos]);

  return (
    <div className={`flex items-center justify-between ${width} `}>
      <div>
        <p className="text-md">{done}</p>
        <p className="text-sm text-gray-300">done</p>
      </div>
      <div>
        <p className="text-md">{remaining}</p>
        <p className="text-sm text-gray-300">To Do</p>
      </div>
    </div>
  );
};

export default React.memo(TodoCount);

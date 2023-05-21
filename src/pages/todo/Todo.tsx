import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../core/hook/hooks";
import TodoTile from "./components/TodoTile";
import NewTodo from "./components/NewTodo";
import TodoHeader from "./components/TodoHeader";
import { useMemo } from "react";

const Todo = () => {
  const { state } = useLocation();
  const { index }: { index: number } = state;
  const plans = useAppSelector((state) => state.plan);

  // after debug implement it with useMemo
  const todos = useMemo(() => {
    return plans.plans[index].doneTodos.concat(
      plans.plans[index].remainingTodos
    );
  }, [plans.plans[index]]);

  return (
    <div className="h-full w-full text-white text-lg font-bold flex flex-col justify-between gap-4">
      <TodoHeader
        doneLength={plans.plans[index].doneTodos.length}
        remainingLength={plans.plans[index].remainingTodos.length}
      />

      {todos.map((e) => (
        <TodoTile todo={e} />
      ))}

      <NewTodo planIndex={index} />
    </div>
  );
};

export default Todo;

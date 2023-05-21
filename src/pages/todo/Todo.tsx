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

  return (
    <div className="h-full w-full text-white text-lg font-bold flex flex-col justify-between gap-4">
      <TodoHeader planIndx={index} />

      {plans.plans[index].todos.map((todo, index) => (
        <TodoTile todoIndex={index} planIndex={index} key={todo.id} />
      ))}

      <NewTodo planIndex={index} />
    </div>
  );
};

export default Todo;

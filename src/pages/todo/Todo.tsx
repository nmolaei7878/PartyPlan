import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../core/hook/hooks";
import TodoTile from "./components/TodoTile";
import NewTodo from "./components/NewTodo";
import TodoHeader from "./components/TodoHeader";

const Todo = () => {
  const { state } = useLocation();
  const { plan }: { plan: Plan } = state;

  const plans = useAppSelector((state) => state.plan);

  return (
    <div className="h-full w-full text-white text-lg font-bold flex flex-col justify-between gap-4">
      <TodoHeader />

      {Array(4)
        .fill(null)
        .map((e) => (
          <TodoTile />
        ))}

      <NewTodo />
    </div>
  );
};

export default Todo;

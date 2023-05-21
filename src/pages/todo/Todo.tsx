import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../core/hook/hooks";
import TodoTile from "./components/TodoTile";
import NewTodo from "./components/NewTodo";
import TodoHeader from "./components/TodoHeader";
import { useMemo } from "react";

const Todo = () => {
  const { state } = useLocation();
  const { plan }: { plan: Plan } = state;

  const plans = useAppSelector((state) => state.plan);

  const todos: Array<TodoType> = useMemo(() => {
    return Array().concat(plan.doneTodos, plan.remainingTodos);
  }, [plan]);

  return (
    <div className="h-full w-full text-white text-lg font-bold flex flex-col justify-between gap-4">
      <TodoHeader
        doenLength={plan.doneTodos.length}
        remainingLength={plan.remainingTodos.length}
      />

      {todos.map((e) => (
        <TodoTile todo={e} />
      ))}

      <NewTodo />
    </div>
  );
};

export default Todo;

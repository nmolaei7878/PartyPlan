import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../core/hook/hooks";
import TodoTile from "./components/TodoTile";
import NewTodo from "./components/NewTodo";
import TodoHeader from "./components/TodoHeader";

const Todo = () => {
  const { state } = useLocation();
  const { index, diffrenceDays } = state;
  const plans = useAppSelector((state) => state.plan);

  return (
    <div className="h-full w-full text-white text-lg font-bold flex flex-col justify-between gap-4">
      <TodoHeader
        planIndex={index}
        diffrenceDays={diffrenceDays}
        title={plans.plans[index].eventName}
      />

      {plans.plans[index].todos.map((todo, i) => (
        <TodoTile todoIndex={i} planIndex={index} key={todo.id} />
      ))}

      <NewTodo planIndex={index} />
    </div>
  );
};

export default Todo;

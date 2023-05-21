import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../core/hook/hooks";
import TodoTile from "./components/TodoTile";
import NewTodo from "./components/NewTodo";
import TodoHeader from "./components/TodoHeader";

const Todo = () => {
  const { state } = useLocation();
  const { index } = state;
  const plans = useAppSelector((state) => state.plan);
  console.log(plans.plans[index]);

  return (
    <div className="h-full w-full text-white text-lg font-bold flex flex-col justify-between gap-4">
      <TodoHeader planIndx={index} />

      {plans.plans[index].todos.map((todo, i) => (
        <TodoTile todoIndex={i} planIndex={index} key={todo.id} />
      ))}

      <NewTodo planIndex={index} />
    </div>
  );
};

export default Todo;

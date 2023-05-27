import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../core/hook/hooks";
import TodoTile from "./components/TodoTile";
import NewTodo from "./components/NewTodo";
import TodoHeader from "./components/TodoHeader";

const Todo = () => {
  const { state } = useLocation();
  const { index, diffrenceDays, title } = state;
  const plans = useAppSelector((state) => state.plan);

  return (
    <div className="h-full w-full text-white text-lg font-bold flex flex-col justify-between gap-4">
      <TodoHeader
        planIndex={index}
        diffrenceDays={diffrenceDays}
        title={title}
      />

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {plans.plans[index].todos.map((todo, i) => (
          <TodoTile
            todoIndex={i}
            planIndex={index}
            key={todo.id}
            defaultCheck={plans.plans[index].todos[i].status}
            defaultValue={plans.plans[index].todos[i].title}
          />
        ))}
      </div>

      <NewTodo planIndex={index} />
    </div>
  );
};

export default Todo;

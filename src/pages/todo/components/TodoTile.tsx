import React, { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../core/hook/hooks";
import { editTodo, toggleTodo } from "../../../redux/plan-slice";

interface Props {
  todoIndex: number;
  planIndex: number;
}
const TodoTile: React.FC<Props> = ({ planIndex, todoIndex }) => {
  const dispatch = useAppDispatch();
  const plans = useAppSelector((state) => state.plan);

  const handleCheckBox = (e: any) => {
    console.log(e.target.checked);

    dispatch(
      toggleTodo({
        planIndex: planIndex,
        todoIndex: todoIndex,
        value: e.target.checked,
      })
    );
  };

  const handleInput = (e: any) => {
    if (e.key === "Enter") {
      console.log(e.target.value);

      dispatch(
        editTodo({
          planIndex: planIndex,
          todoIndex: todoIndex,
          title: e.target.value,
        })
      );

      e.target.blur();
    }
  };

  return (
    <div className="bg-zinc-800 p-3 rounded-md flex gap-3">
      <input
        defaultChecked={plans.plans[planIndex].todos[todoIndex].status}
        id="myinput"
        type="checkbox"
        className=""
        onChange={handleCheckBox}
      />
      <input
        onKeyDown={handleInput}
        className="bg-transparent border-transparent focus:outline-none w-full"
        defaultValue={plans.plans[planIndex].todos[todoIndex].title}
      />
    </div>
  );
};

export default React.memo(TodoTile);

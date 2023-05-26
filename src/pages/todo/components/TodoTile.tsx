import React, { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../core/hook/hooks";
import { editTodo, toggleTodo } from "../../../redux/slices/plan-slice";

interface Props {
  todoIndex: number;
  planIndex: number;
}
const TodoTile: React.FC<Props> = ({ planIndex, todoIndex }) => {
  const dispatch = useAppDispatch();
  const plans = useAppSelector((state) => state.plan);
  const titleRef = useRef<any>(null);

  const handleCheckBox = (e: any) => {
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
      dispatch(
        editTodo({
          planIndex: planIndex,
          todoIndex: todoIndex,
          title: e.target.value,
        })
      );
      titleRef.current?.blur();
    }
  };

  return (
    <div className="bg-zinc-800 p-3 rounded-md flex gap-3">
      <input
        defaultChecked={plans.plans[planIndex].todos[todoIndex].status ?? false}
        id="myinput"
        type="checkbox"
        className=""
        onChange={handleCheckBox}
      />
      <input
        ref={titleRef}
        tabIndex={-1}
        onKeyDown={handleInput}
        className="bg-transparent border-transparent focus:outline-none w-full"
        defaultValue={plans.plans[planIndex].todos[todoIndex].title ?? ""}
      />
    </div>
  );
};

export default React.memo(TodoTile);

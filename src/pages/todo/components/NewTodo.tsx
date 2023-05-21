import React, { useId, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../core/hook/hooks";
import { addTodo } from "../../../redux/plan-slice";

interface Props {
  planIndex: number;
}

const NewTodo: React.FC<Props> = ({ planIndex }) => {
  const dispatch = useAppDispatch();
  const id = useId();
  const titleRef = useRef<HTMLInputElement>(null);
  const handleKeyDown = (e: any) => {
    const data = {
      todo: {
        id: id,
        title: e.target.value,
        status: false,
      },
      planIndex: planIndex,
    };

    if (e.key === "Enter") {
      dispatch(addTodo(data));
      titleRef.current!.value = "";
      e.target.blur();
    }
  };

  return (
    <div className="bg-zinc-800 p-3 rounded-md group">
      <div className="flex gap-3 items-center">
        <input
          id="myinput"
          type="checkbox"
          className=""
          readOnly
          disabled={true}
        />
        <input
          onKeyDown={handleKeyDown}
          ref={titleRef}
          defaultValue={titleRef.current?.value}
          className="font-light text-sm bg-transparent border-transparent focus:outline-none"
          placeholder="Tap to add new item to the list"
        />
      </div>
    </div>
  );
};

export default React.memo(NewTodo);

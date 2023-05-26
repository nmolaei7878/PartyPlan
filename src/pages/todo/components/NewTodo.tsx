import React, { useRef } from "react";
import { useAppDispatch } from "../../../core/hook/hooks";
import { addTodo } from "../../../redux/slices/plan-slice";

interface Props {
  planIndex: number;
}

const NewTodo: React.FC<Props> = ({ planIndex }) => {
  const dispatch = useAppDispatch();
  const titleRef = useRef<HTMLInputElement>(null);
  const handleKeyDown = (e: any) => {
    const data = {
      todo: {
        id: new Date().getTime(),
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
    <div className="bg-zinc-800 p-3 rounded-md">
      <div className="flex gap-3 items-center">
        <input
          id="myinput"
          type="checkbox"
          className=""
          readOnly
          disabled={true}
        />
        <input
          tabIndex={-1}
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

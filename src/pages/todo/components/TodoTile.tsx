import React from "react";

interface Props {
  todo: TodoType;
}
const TodoTile: React.FC<Props> = ({ todo }) => {
  const handleCheckBox = (e: any) => {
    console.log(e.target.checked);

    // check wehter event was false add todo to remaining else add item to done
  };

  return (
    <div className="bg-zinc-800 p-3 rounded-md flex gap-3">
      <input
        checked={todo.status}
        id="myinput"
        type="checkbox"
        className=""
        onChange={handleCheckBox}
      />
      <input
        onChange={handleCheckBox}
        className="bg-transparent border-transparent focus:outline-none "
        defaultValue={todo.title}
      />
    </div>
  );
};

export default React.memo(TodoTile);

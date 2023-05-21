import React from "react";

const NewTodo = () => {
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
          className="font-light text-sm bg-transparent border-transparent focus:outline-none"
          placeholder="Tap to add new item to the list"
        />
      </div>
    </div>
  );
};

export default React.memo(NewTodo);

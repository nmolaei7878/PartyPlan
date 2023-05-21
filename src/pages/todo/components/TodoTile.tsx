import React from "react";

const TodoTile = () => {
  const handleCheckBox = (e: any) => {
    console.log(e.target.checked);
  };

  return (
    <div className="bg-zinc-800 p-3 rounded-md ">
      <div className="flex gap-3 items-baseline">
        <input
          id="myinput"
          type="checkbox"
          className=""
          onChange={handleCheckBox}
        />
        <div className="flex flex-col font-semibold text-white  ">
          <input
            className=" bg-transparent border-transparent focus:outline-none "
            defaultValue={"Create an e-invite"}
          />
          <p className="font-light text-sm text-gray-500">
            Tap to view vendors
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodoTile);

import React from "react";

interface Props {
  iconPath: string;
  title: string;
  date: string;
  time: string;
}
const ListTile: React.FC<Props> = ({ iconPath, title, date, time }) => {
  return (
    <div className="basis-nesf  bg-gray-800 rounded-md flex flex-col justify-center p-2  gap-2">
      <div className="">
        <img className="h-8" src={iconPath} alt="" />
      </div>
      <p className="">{title}</p>
      <p className=" font-medium text-sm text-gray-400">14/12/2222</p>
      <p className=" font-medium text-sm text-gray-400">8:00pm</p>
    </div>
  );
};

export default React.memo(ListTile);

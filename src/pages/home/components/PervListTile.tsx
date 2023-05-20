import React from "react";
import { IconKey, KIcons } from "../../../core/constatnt/KIcons";

interface Props {
  iconPath: string;
  title: string;
  date: string;
  time: string;
}
const PervListTile: React.FC<Props> = ({ iconPath, title, date, time }) => {
  return (
    <div className=" bg-gray-800 rounded-md flex flex-col justify-center p-2  gap-2">
      <div className="">
        <img className="h-8" src={KIcons[iconPath as IconKey]} alt="" />
      </div>
      <p className="text-lg">{title}</p>
      <p className=" font-medium text-sm text-gray-400">{date}</p>
      <p className=" font-medium text-sm text-gray-400">{time}</p>
    </div>
  );
};

export default React.memo(PervListTile);

import React from "react";

type TileProps = {
  icon: string;
  title: string;
  description?: string;
};

const Tile: React.FC<TileProps> = ({ title, icon, description }) => {
  return (
    <div className="bg-zinc-900 h-28 rounded-md flex items-center flex-col justify-center px-2">
      <img className="h-12" src={icon} alt="" />
      <p className="px-2 text- ">{title}</p>
      <p className="text-sm font-light">{description}</p>
    </div>
  );
};

export default Tile;

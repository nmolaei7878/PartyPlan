import React from "react";

type TileProps = {
  icon: string;
  title: string;
};

const Tile: React.FC<TileProps> = ({ title, icon }) => {
  return (
    <div className="bg-zinc-900 h-28 rounded-md flex items-center flex-col justify-center gap-2 px-2">
      <img className="h-12" src={icon} alt="" />
      <p className="px-2">{title}</p>
    </div>
  );
};

export default Tile;

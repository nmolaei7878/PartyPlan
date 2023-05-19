import React from "react";

type TileProps = {
  icon: string;
  title: string;
  description?: string;
  height?: string;
};

const Tile: React.FC<TileProps> = ({ title, icon, description, height }) => {
  return (
    <div
      className="bg-zinc-900 rounded-md flex items-center gap-1 flex-col justify-center px-2"
      style={{
        height: height || "7rem",
      }}
    >
      <img className="h-12" src={icon} alt="" />
      <p className="px-2 text- ">{title}</p>
      <p className="text-[0.8rem] font-light">{description}</p>
    </div>
  );
};

export default Tile;

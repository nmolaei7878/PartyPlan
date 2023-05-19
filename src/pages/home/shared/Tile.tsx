import React from "react";

type TileProps = {
  icon: string;
  title: string;
  description?: string;
  height?: string;
  style?: TileStyle;
  onClick: (value: string) => void;
};

const Tile: React.FC<TileProps> = ({
  title,
  icon,
  description,
  height,
  style,
  onClick,
}) => {
  function onClickP() {
    onClick(title);
  }

  return (
    <div
      onClick={onClickP}
      className="bg-zinc-900 rounded-md flex items-center gap-1 flex-col justify-center px-2"
      style={{
        height: height || "7rem",
        border: style?.border,
        backgroundColor: style?.backgroundColor,
      }}
    >
      <img className="h-12" src={icon} alt="" />
      <p className="px-2 text- ">{title}</p>
      <p className="text-[0.8rem] font-light">{description}</p>
    </div>
  );
};

export default Tile;

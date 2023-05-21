import React from "react";

type TileProps = {
  icon: string;
  title: string;
  description?: string;
  height?: string;
  style?: SelectedStyle;
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
  const click = () => {
    onClick(title);
  };

  return (
    <div
      onClick={click}
      className="bg-zinc-900 rounded-md flex items-center  flex-col justify-center px-2 py-3"
      style={{
        height: height || "7rem",
        border: style?.border,
        backgroundColor: style?.backgroundColor,
      }}
    >
      <img className="h-full w-full px-3" src={icon} alt="" />
      <p className="px-2 capitalize text-[0.95rem] ">{title}</p>
      <p className="text-[0.7rem] font-light">{description}</p>
    </div>
  );
};

export default React.memo(Tile);

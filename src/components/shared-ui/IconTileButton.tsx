import React, { useCallback } from "react";

type IconTileButtonProps = {
  icon: string;
  title: string;
  description?: string;
  height?: string;
  style?: SelectedStyle;
  onClick: (value: string) => void;
};

const IconTileButton: React.FC<IconTileButtonProps> = ({
  title,
  icon,
  description,
  height,
  style,
  onClick,
}) => {
  const click = useCallback(() => {
    onClick(title);
  }, [onClick]);

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
      <img
        className="h-5/6 w-5/6 sm:w-4/6 sm:h-4/6 md:h-3/6 md:w-3/6 min-[470px]:w-4/6 min-[631px]:w-3/6 px-3 "
        src={icon}
        alt=""
      />
      <p className="px-2 capitalize text-[0.95rem] ">{title}</p>
      <p className="text-[0.7rem] font-light">{description}</p>
    </div>
  );
};

export default React.memo(IconTileButton);

import React from "react";

interface Props {
  width: string;
  gap?: string;
}

const TodoCount: React.FC<Props> = ({ width, gap }) => {
  return (
    <div className={`flex items-center justify-between ${width}`}>
      <div>
        <p className="text-md">0</p>
        <p className="text-sm text-gray-300">done</p>
      </div>
      <div>
        <p className="text-md">5</p>
        <p className="text-sm text-gray-300">To Do</p>
      </div>
    </div>
  );
};

export default React.memo(TodoCount);

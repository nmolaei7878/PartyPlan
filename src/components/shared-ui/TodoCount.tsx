import React from "react";

interface Props {
  width: string;
  gap?: string;
  remainingTodo: number;
  doneTodos: number;
}

const TodoCount: React.FC<Props> = ({
  width,
  gap,
  remainingTodo,
  doneTodos,
}) => {
  return (
    <div className={`flex items-center justify-between ${width}`}>
      <div>
        <p className="text-md">{doneTodos}</p>
        <p className="text-sm text-gray-300">done</p>
      </div>
      <div>
        <p className="text-md">{remainingTodo}</p>
        <p className="text-sm text-gray-300">To Do</p>
      </div>
    </div>
  );
};

export default React.memo(TodoCount);

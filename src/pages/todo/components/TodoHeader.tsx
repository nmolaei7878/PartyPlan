import React, { useCallback } from "react";
import BackIcon from "../../../assets/icons/back_icon.svg";
import TodoCount from "../../../components/shared-ui/TodoCount";
import { useNavigate } from "react-router-dom";

interface Props {
  planIndex: number;
  diffrenceDays: number;
  title: string;
}

const TodoHeader: React.FC<Props> = ({ planIndex, diffrenceDays, title }) => {
  const navigate = useNavigate();

  const goBack = useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <div className="h-1/20 ">
      <div className="flex items-center gap-3">
        <img onClick={goBack} className="w-8" src={BackIcon} alt="" />
        <p className="text-xl">Checklist</p>
      </div>
      <div className="flex mt-4 justify-between items-center">
        <div>
          <p className=" text-lg">{title}</p>
          <p className="mt-2 text-sm mb-3 font-normal">{`${diffrenceDays} days to go`}</p>
        </div>
        <div>
          <TodoCount width="w-28" planIndex={planIndex} />
        </div>
      </div>
    </div>
  );
};

export default TodoHeader;

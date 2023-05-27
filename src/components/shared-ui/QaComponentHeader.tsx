import React from "react";
import Question from "./Question";

interface QaComponentHeaderPorps {
  question: string;
  icon_path: string;
}

const QaComponentHeader: React.FC<QaComponentHeaderPorps> = ({
  icon_path,
  question,
}) => {
  return (
    <>
      {" "}
      <div className="flex flex-col items-center">
        <img src={icon_path} alt="" />
      </div>
      <Question question={question} />
    </>
  );
};

export default React.memo(QaComponentHeader);

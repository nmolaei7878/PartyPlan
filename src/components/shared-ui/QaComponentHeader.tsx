import React from "react";

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
      <p>{question}</p>
    </>
  );
};

export default React.memo(QaComponentHeader);

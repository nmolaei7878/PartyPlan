import React from "react";

interface QuestionProps {
  question: string;
}

const Question: React.FC<QuestionProps> = ({ question }) => {
  return <div>{question}</div>;
};

export default React.memo(Question);

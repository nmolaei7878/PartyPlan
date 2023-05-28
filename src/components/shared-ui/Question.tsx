import React from "react";

interface QuestionProps {
  question: string;
}

const Question: React.FC<QuestionProps> = ({ question }) => {
  return <p>{question}</p>;
};

export default React.memo(Question);

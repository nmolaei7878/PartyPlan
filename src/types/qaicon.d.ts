type KQAIconAnswerType = {
  desription?: string;
  title: string;
  iconPath: string;
  bg_color: string;
  bo_color: string;
};

type KQAIcon = {
  question: string;
  answers: Array<KQAIconAnswerType>;
};

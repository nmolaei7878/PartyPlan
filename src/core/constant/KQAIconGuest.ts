import { KIcons } from "./KIcons";

export const KQAIconGuest: KQAIcon = {
  question: "What is the size of the guest list",
  answers: [
    {
      title: "Small",
      desription: "(4-20 guests)",
      iconPath: KIcons.small,
      bg_color: "black",
      bo_color: "pink",
    },
    {
      title: "Medium",
      desription: "(20-60 guests)",
      iconPath: KIcons.medium,
      bg_color: "black",
      bo_color: "red",
    },
    {
      title: "Large",
      desription: "(60+ guests)",
      iconPath: KIcons.large,
      bg_color: "black",
      bo_color: "green",
    },
  ],
};

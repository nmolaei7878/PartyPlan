import { KIcons } from "./KIcons";

type KOcassionType = {
  title: string;
  iconPath: string;
  bg_color: string;
  bo_color: string;
};

export const KOccasion: Array<KOcassionType> = [
  {
    title: "Birthday",
    iconPath: KIcons.birthday,
    bg_color: "rgb(38,27,39)",
    bo_color: "pink",
  },
  {
    title: "Anniversary",
    iconPath: KIcons.anniversary,
    bg_color: "black",
    bo_color: "red",
  },
  {
    title: "Dinner",
    iconPath: KIcons.dinner,
    bg_color: "black",
    bo_color: "green",
  },
  {
    title: "Meet Up",
    iconPath: KIcons.meetup,
    bg_color: "black",
    bo_color: "blue",
  },
  {
    title: "Other",
    iconPath: KIcons.other,
    bg_color: "black",
    bo_color: "yellow",
  },
];

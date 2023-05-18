import { KIcons } from "./KIcons";

type KGuestType = {
  title: string;
  desription: string;
  iconPath: string;
};

export const KGuest: Array<KGuestType> = [
  { title: "Small", desription: "(4-20 guests)", iconPath: KIcons.small },
  {
    title: "Medium",
    desription: "(20-60 guests)",
    iconPath: KIcons.medium,
  },
  { title: "Large", desription: "(60+ guests)", iconPath: KIcons.large },
];

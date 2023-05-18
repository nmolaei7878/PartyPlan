import { KIcons } from "./KIcons";

type KOcassionType = {
  title: string;
  iconPath: string;
};

export const KOccasion: Array<KOcassionType> = [
  { title: "Birthday", iconPath: KIcons.birthday },
  { title: "Anniversary", iconPath: KIcons.anniversary },
  { title: "Dinner", iconPath: KIcons.dinner },
  { title: "Meet Up", iconPath: KIcons.meetup },
  { title: "Other", iconPath: KIcons.other },
];

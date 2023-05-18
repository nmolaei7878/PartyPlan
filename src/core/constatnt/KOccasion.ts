import birthday from "../../assets/icons/cake.svg";
import anniversary from "../../assets/icons/heart.svg";
import dinner from "../../assets/icons/dinner.svg";
import meetup from "../../assets/icons/meetup.svg";
import other from "../../assets/icons/other.svg";

type KOcassionType = {
  title: string;
  iconPath: string;
};

export const KOccasion: Array<KOcassionType> = [
  { title: "Birthday", iconPath: birthday },
  { title: "Anniversary", iconPath: anniversary },
  { title: "Dinner", iconPath: dinner },
  { title: "Meet Up", iconPath: meetup },
  { title: "Other", iconPath: other },
];

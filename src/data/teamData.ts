// src/data/teamData.ts
import team1 from "/public/images/executive-team/team-1.png";
import team2 from "/public/images/executive-team/team-2.png";
import team3 from "/public/images/executive-team/team-3.png";
import { StaticImageData } from "next/image";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: StaticImageData;
};

export const teamMembers: TeamMember[] = [
  {
    id: "mokshad-sharma",
    name: "Dr. Mokshad Sharma",
    role: "Director",
    image: team1,
  },
  {
    id: "yasheel-aukhojee",
    name: "Dr. Yasheel Aukhojee",
    role: "CEO",
    image: team2,
  },
  {
    id: "khushyant-mungar",
    name: "Dr. Khushyant Mungar",
    role: "Director",
    image: team3,
  },
];

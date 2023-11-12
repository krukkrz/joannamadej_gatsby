//@ts-ignore
import omantelXL from "../assets/projects/omantel/omantel_xl.png";
//@ts-ignore
import omantelXXL from "../assets/projects/omantel/omantel_xxl.png";
//@ts-ignore
import guildXL from "../assets/projects/guild/guild_xl.png";
//@ts-ignore
import guildXXL from "../assets/projects/guild/guild_xxl.png";
//@ts-ignore
import desklyXL from "../assets/projects/deskly/deskly_xl.png";
//@ts-ignore
import desklyXXL from "../assets/projects/deskly/deskly_xxl.png";
//@ts-ignore
import healthymeXL from "../assets/projects/healthyme/healthyme_xl.png";
//@ts-ignore
import healthymeXXL from "../assets/projects/healthyme/healthyme_xxl.png";
// @ts-ignore
import tiloXL from "../assets/projects/tilo/tilo_xl.png";
// @ts-ignore
import tiloXXL from "../assets/projects/tilo/tilo_xxl.png";

//@ts-ignore
import deskly_tile from "../assets/my_projects_tiles/deskly_tile.png";
//@ts-ignore
import guild_tile from "../assets/my_projects_tiles/guild_tile.png";
//@ts-ignore
import healthyme_tile from "../assets/my_projects_tiles/healthyme_tile.png";
//@ts-ignore
import omantel_tile from "../assets/my_projects_tiles/omantel_tile.png";
//@ts-ignore
import tilo_tile from "../assets/my_projects_tiles/tilo_tile.png";
//@ts-ignore
import placeholder from "../assets/my_projects_tiles/placeholder.svg";

import {
  CASE_STUDY,
  COMMERCIAL, DARE_IT_CHALLENGE,
  DESK_BOOKING_APP,
  ECOMMERCE,
  EDUCATIONAL_PLATFORM,
  Tag,
  UI,
  UX_AUDIT,
  UX_UI
} from "./tags";

export const getProjects = (): Project[] => {
  return [
    {
      name: "tilo",
      title: "My design journey: login and sign-up process for an online course platform",
      description:
          "To demonstrate booth my UI and UX skills I have designed a login and sign-up process to the educational platform with online courses, called Tilo.",
      tile: tilo_tile,
      url: "/tilo",
      heroXL: tiloXL,
      heroXXL: tiloXXL,
      type: "Personal created for portfolio purposes",
      figmaFile:
          "https://www.figma.com/file/Jw3x7RgdcxGZBOHXTnPBYO/Edu-platform?type=design&node-id=0%3A1&mode=design&t=67C6faUG2nhowvhy-1",
      projectOverview:
          'To showcase my UI and UX skills, I created a login and sign-up process for a web app that offers online video courses, named "Tilo." I made designs for both desktop and mobile screens. Tilo is a fictional brand I made up for this portfolio.',
      tags: [CASE_STUDY, UX_UI, EDUCATIONAL_PLATFORM],
    },
    {
      name: "guild",
      title: "How I designed a new poll conversation feature for the Guild App?",
      description:
          "The guild app is a social app created to make networking easier. While working at Monterail Software House, I had the opportunity to design new features for the Guild app and redesign old ones.",
      tile: guild_tile,
      url: "/guild",
      heroXL: guildXL,
      heroXXL: guildXXL,
      type: "Commercial",
      figmaFile:
          "https://www.figma.com/file/I7GdLv9k80cEmmJ6Ko8mb4/Guild---Poll-conversation?type=design&node-id=29-690288&mode=design",
      tags: [COMMERCIAL, UX_UI],
    },
    {
      name: "omantel",
      title: "How I designed the new outlet pickup feature that redefined the Omantel online store experience?",
      description:
          "Omantel is the largest telecommunications company in Oman. In addition to telecommunications services, they also have an online store with electronics. While working at the Unriddl agency, I had the opportunity to work on the Omantel store project and design new features for it.",
      tile: omantel_tile,
      heroXL: omantelXL,
      heroXXL: omantelXXL,
      url: "/omantel",
      type: "Commercial",
      figmaFile:
          "https://www.figma.com/file/2IbjXBrTFRmJGBGSf5qGYh/Omantel---Outlet-Pickup?type=design&node-id=0%3A1&mode=design&t=gZm6KGg4fgbo0hqu-1",
      tags: [COMMERCIAL, UX_UI, ECOMMERCE],
    },
    {
      name: "deskly",
      title: "How I designed a platform for desk booking?",
      description:
        "UX case study, created to showcase my design process and UX skills. As part of the project, I conducted a UX audit and in-depth interviews with users, and I designed screens for Deskly - a desk booking application.",
      tile: deskly_tile,
      url: "/deskly",
      heroXL: desklyXL,
      heroXXL: desklyXXL,
      type: "Personal created for portfolio purposes",
      figmaFile:
        "https://www.figma.com/file/mjir1U2RbWz0mqUSGUChf8/Desk-booking-app?type=design&node-id=0%3A1&mode=design&t=no20rg3tREC66Dfb-1",
      tags: [CASE_STUDY, UX_UI, UX_AUDIT, DESK_BOOKING_APP]
    },
    {
      name: "healthyme",
      title: "I received an honorable mention in the Dare IT UI Challenge",
      description:
        "HealthyMe is an app that aims to support users in implementing healthy habits into their daily routines. I created an interface design for it based on the provided lo-fi mockups. Designs were made for the Dare IT UI Challenge competition in which I recived an honorable mention.",
      tile: healthyme_tile,
      url: "/healthyme",
      heroXL: healthymeXL,
      heroXXL: healthymeXXL,
      type: "Personal for Dare IT UI Challenge Competition",
      tags: [UI, DARE_IT_CHALLENGE],
    },
  ];
};

export const getProject = (name: ProjectName): Project => {
  const project = getProjects().find((project) => project.name === name);
  return project as Project;
};

export type ProjectName = "omantel" | "guild" | "deskly" | "healthyme" | "tilo";

export type Project = {
  name: ProjectName;
  title: string;
  description: string;
  tile: any;
  heroXL?: any;
  heroXXL?: any;
  url: string;
  figmaFile?: string;
  type?: string;
  projectOverview?: string;
  tags?: Tag[];
};
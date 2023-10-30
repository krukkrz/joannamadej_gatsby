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

//@ts-ignore
import deskly_tile from "../assets/my_projects_tiles/deskly_tile.png";
//@ts-ignore
import guild_tile from "../assets/my_projects_tiles/guild_tile.png";
//@ts-ignore
import healthyme_tile from "../assets/my_projects_tiles/healthyme_tile.png";
//@ts-ignore
import omantel_tile from "../assets/my_projects_tiles/omantel_tile.png";

export const getProjects = (): Project[] => {
  return [
    {
      name: "guild",
      title: "Guild",
      description:
        "The guild app is a social app created to make networking easier. While working at Monterail Software House, I had the opportunity to design new features for the Guild app and redesign old ones.",
      tile: guild_tile,
      url: "/guild",
      heroXL: guildXL,
      heroXXL: guildXXL,
      type: "Commercial",
    },
    {
      name: "omantel",
      title: "Omantel online store",
      description:
        "Omantel is the largest telecommunications company in Oman. In addition to telecommunications services, they also have an online store with electronics. While working at the Unriddl agency, I had the opportunity to work on the Omantel store project and design new features for it.",
      tile: omantel_tile,
      heroXL: omantelXL,
      heroXXL: omantelXXL,
      url: "/omantel",
      type: "Commercial",
    },
    {
      name: "deskly",
      title: "Deskly",
      description:
        "UX case study, created to showcase my design process and UX skills. As part of the project, I conducted a UX audit and in-depth interviews with users, and I designed screens for Deskly - a desk booking application.",
      tile: deskly_tile,
      url: "/deskly",
      heroXL: desklyXL,
      heroXXL: desklyXXL,
      type: "Personal created for portfolio purposes",
    },
    {
      name: "healthyme",
      title: "HealthyMe",
      description:
        "HealthyMe is an app that aims to support users in implementing healthy habits into their daily routines. I created an interface design for it based on the provided lo-fi mockups. Designs were made for the Dare IT UI Challenge competition in which I recived an honorable mention.",
      tile: healthyme_tile,
      url: "/healthyme",
      heroXL: healthymeXL,
      heroXXL: healthymeXXL,
      type: "Personal for Dare IT UI Challenge Competition",
    },
  ];
};

export const getProject = (name: ProjectName): Project => {
  const project = getProjects().find((project) => project.name === name);
  return project as Project;
};

export type ProjectName = "omantel" | "guild" | "deskly" | "healthyme";

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
};

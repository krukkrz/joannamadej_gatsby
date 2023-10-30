import placeholder from "../assets/my_projects_tiles/placeholder.svg";
import omantelXL from "../assets/projects/omantel/omantel_xl.svg";
import omantelXXL from "../assets/projects/omantel/omantel_xxl.svg";
import guildXL from "../assets/projects/guild/guild_xl.svg";
import guildXXL from "../assets/projects/guild/guild_xxl.svg";
import desklyXL from "../assets/projects/deskly/deskly_xl.svg";
import desklyXXL from "../assets/projects/deskly/deskly_xxl.svg";
import healthymeXL from "../assets/projects/healthyme/healthyme_xl.svg";
import healthymeXXL from "../assets/projects/healthyme/healthyme_xxl.svg";

export const getProjects = (): Project[] => {
  return [
    {
      name: "guild",
      title: "Guild",
      description:
        "The guild app is a social app created to make networking easier. While working at Monterail Software House, I had the opportunity to design new features for the Guild app and redesign old ones.",
      tile: placeholder,
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
      tile: placeholder,
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
      tile: placeholder,
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
      tile: placeholder,
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

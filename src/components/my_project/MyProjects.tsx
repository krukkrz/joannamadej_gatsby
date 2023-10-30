import Card from "./card/Card";
import { getProjects } from "../../services/projects";
//@ts-ignore
import * as styles from "./MyProjects.module.scss";
import React from "react";

const MyProjects = () => {
  const projects = getProjects();
  return (
    <div>
      <h1>My Projects</h1>
      <div className={styles.cards}>
        {projects.map((project) => (
          <Card {...project} />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;

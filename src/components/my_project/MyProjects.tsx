import Card from "./card/Card";
import { getProjects } from "../../services/projects";
//@ts-ignore
import * as styles from "./MyProjects.module.scss";
import React from "react";

const MyProjects = () => {
  const projects = getProjects();
  return (
    <div id="my_projects">
      <h1>My projects</h1>
      <div className={styles.cards}>
        {projects.map((project, index) => (
          <Card {...project} key={`project_${index}`} />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;

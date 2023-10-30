import { Project } from "../../services/projects";
import Page from "../page/Page";
//@ts-ignore
import * as styles from "./ProjectPage.module.scss";
import React from "react";

type Props = {
  project: Project;
  children: React.ReactNode;
};
const ProjectPage = ({ project, children }: Props) => {
  return (
    <Page>
      <img src={project.heroXXL} alt="hero" className={styles.heroXXL} />
      <img src={project.heroXL} alt="hero" className={styles.heroXL} />
      <div className={styles.content}>
        <h1>{project.title}</h1>
        <div className={styles.projectData}>
          <div>
            <span>Project type: </span>
            {project.type}
          </div>
          {project.figmaFile && (
            <div>
              <a rel="noreferrer" target="_blank" href={project.figmaFile}>
                Click here to open Figma file
              </a>
            </div>
          )}
        </div>
        {children}
      </div>
    </Page>
  );
};

export default ProjectPage;

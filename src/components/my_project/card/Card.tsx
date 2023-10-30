import { Project } from "../../../services/projects";
//@ts-ignore
import * as styles from "./Card.module.scss";
import Button from "../../button/Button";
import React from "react";

const Card = (project: Project) => {
  return (
    <a href={project.url} className={styles.card}>
      <div>
        <img src={project.tile} alt={project.title} />
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
      <Button text="Read more" url={project.url} />
    </a>
  );
};
export default Card;

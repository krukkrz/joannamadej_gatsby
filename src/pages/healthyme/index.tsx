import React from "react";
import ProjectPage from "../../components/project/ProjectPage";
import { getProject } from "../../services/projects";
//@ts-ignore
import * as styles from "./Healthme.module.scss";
//@ts-ignore
import healthyme_0 from "../../assets/projects/healthyme/works/healthyme_0.png";
//@ts-ignore
import healthyme_1 from "../../assets/projects/healthyme/works/healthyme_1.png";
//@ts-ignore
import healthyme_2 from "../../assets/projects/healthyme/works/healthyme_2.png";
//@ts-ignore
import healthyme_3 from "../../assets/projects/healthyme/works/healthyme_3.png";
//@ts-ignore
import healthyme_4 from "../../assets/projects/healthyme/works/healthyme_4.png";
//@ts-ignore
import healthyme_5 from "file-loader!../../assets/projects/healthyme/works/healthyme_5.mov";
//@ts-ignore
import healthyme_6 from "../../assets/projects/healthyme/works/healthyme_6.png";
//@ts-ignore
import healthyme_7 from "../../assets/projects/healthyme/works/healthyme_7.png";
//@ts-ignore
import healthyme_8 from "../../assets/projects/healthyme/works/healthyme_8.png";
//@ts-ignore
import healthyme_9 from "../../assets/projects/healthyme/works/healthyme_9.png";
//@ts-ignore
import healthyme_10 from "../../assets/projects/healthyme/works/healthyme_10.png";

const Index = () => {
  const healthymeProject = getProject("healthyme");
  return (
    <ProjectPage project={healthymeProject}>
      <p>
        I took part in the Dare IT UI Challenge competition. The task was to
        design a user interface (UI) for a mobile application called “HealthyMe”
        based on the provided lo-fi mockups. I am really honored because my
        design received an honorable mention in this competition.
        <br />
        <br />
        Below you can see lo-fi mockups provided by Dare IT. Based on them I
        have prepared a user interface design for the “HealthyMe” application.
      </p>
      <img className={styles.image} src={healthyme_0} alt="healthyme_0" />
      <p style={{textAlign:"center"}}>
        You can find my user interface design for the "HealthyMe" application
        below.
      </p>
      <img className={styles.image} src={healthyme_1} alt="healthyme_1" />
      <img className={styles.image} src={healthyme_2} alt="healthyme_2" />
      <img className={styles.image} src={healthyme_3} alt="healthyme_3" />
      <img className={styles.image} src={healthyme_4} alt="healthyme_4" />
      <img className={styles.image} src={healthyme_6} alt="healthyme_6" />
      <img className={styles.image} src={healthyme_7} alt="healthyme_7" />
      <img className={styles.image} src={healthyme_8} alt="healthyme_8" />
      <img className={styles.image} src={healthyme_9} alt="healthyme_9" />
      <img className={styles.image} src={healthyme_10} alt="healthyme_10" />
    </ProjectPage>
  );
};

export default Index;

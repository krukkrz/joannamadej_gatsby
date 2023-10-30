import ProjectPage from "../../components/project/ProjectPage";
import { getProject } from "../../services/projects";
//@ts-ignore
import healthyme_1 from "../../assets/projects/healthyme/works/healthyme_1.svg";
//@ts-ignore
import healthyme_2 from "../../assets/projects/healthyme/works/healthyme_2.svg";
import React from "react";

const Index = () => {
  const healthymeProject = getProject("healthyme");
  return (
    <ProjectPage project={healthymeProject}>
      <p>
        I took part in the Dare IT UI Challenge competition. The task was to
        design a user interface (UI) for a mobile application called “HealthyMe”
        based on the provided lo-fi mockups. I am really honored because my
        design received an honorable mention in this competition.
      </p>
      <p>
        Below you can see lo-fi mockups provided by Dare IT. Based on them I
        have prepared a user interface design for the “HealthyMe” application.
      </p>
      <img src={healthyme_1} alt="healthyme_1" />
      <p>
        You can find my user interface design for the "HealthyMe" application
        below, along with a video demonstrating the clickable prototype.
      </p>
      {/*todo tutaj jeden z ekranów zawiera video - trzeba je rozbić na osobne i to video wstawić*/}
      <img src={healthyme_2} alt="healthyme_2" />
    </ProjectPage>
  );
};

export default Index;

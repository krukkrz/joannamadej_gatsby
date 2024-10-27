//@ts-ignore
import * as styles from "./AboutMe.module.scss";
import React from "react";

const AboutMe = () => {
  return (
    <div id="about_me" className={styles.aboutme}>
      <h1>About me</h1>
      <p>
          I’m a Product Designer with over 3 years of experience. My journey has led me through diverse projects, from designing features for a British social media application to redesigning an analytic tool for an international consulting firm.
      </p>
      <p>
          I have experience working with international clients, including those from the Near East. I have presented designs in meetings and recommended the best solutions. I have worked with advanced design systems and collaborated with developers. My experience also includes conducting usability tests and UX audits to ensure optimal user experiences.

      </p>
      <p>
          I am passionate about making users’ lives easier by improving the products they rely on. I'm open to new challenges. If you're looking for someone to work on a UX/UI-related project, feel free to contact me.
      </p>
    </div>
  );
};

export default AboutMe;

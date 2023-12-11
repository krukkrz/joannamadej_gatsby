//@ts-ignore
import * as styles from "./AboutMe.module.scss";
import React from "react";

const AboutMe = () => {
  return (
    <div id="about_me" className={styles.aboutme}>
      <h1>About Me</h1>
      <p>
        I am a UX/UI Designer with 2 years of experience. I have designed new
        features for the Guild app and Omantel online store and together with
        another designer I have redesigned the internal analytical
        platform for consulting firm.
      </p>
      <p>
        I have experience in developing wireframes, and prototypes, working with
        design systems, and conducting usability tests and UX audits.
        I am passionate about making users lives easier by improving the products they use, and I am always eager to learn new tools and techniques to enhance my design skills and knowledge.
      </p>
      <p>
        I'm open to new challenges. If you're looking for someone to work on a
        UX/UI-related project, feel free to contact me.
      </p>
    </div>
  );
};

export default AboutMe;

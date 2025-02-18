import Page from "../components/page/Page";
import Hero from "../components/hero/Hero";
import MyProjects from "../components/my_project/MyProjects";
import AboutMe from "../components/about_me/AboutMe";
//@ts-ignore
import * as styles from "./index.module.scss";
import Testimonials from "../components/testimonials/Testimonials";
import Contact from "../components/contact/Contact";
import React from "react";

const Index = () => {
  return (
    <Page>
      <Hero />
      <div className={styles.home}>
        <AboutMe />
        <Testimonials />
        <Contact />
      </div>
    </Page>
  );
};

export default Index;

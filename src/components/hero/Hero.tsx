//@ts-ignore
import joannaxl from "../../assets/hero/xl.svg";
//@ts-ignore
import * as styles from "./Hero.module.scss";
import React from "react";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.headline}>
        <p>
            Hi, Jo here 👋
            <br />
            Product
            <br />
            designer 👩‍💻
            <br />
            with 4 years
            <br/>
            of experience
        </p>
      </div>
      <img src={joannaxl} alt="Joanna" />
    </div>
  );
};

export default Hero;

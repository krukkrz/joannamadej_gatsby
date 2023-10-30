//@ts-ignore
import * as styles from "./Footer.module.scss";
import React from "react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        designed with love by Joanna
        <span className={styles.kris}>
          , coded because she asked him by Krzysztof
        </span>
      </p>
    </footer>
  );
};

export default Footer;

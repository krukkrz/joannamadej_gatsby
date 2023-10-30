//@ts-ignore
import phone from "../../assets/icons/phone.svg";
//@ts-ignore
import paperPlane from "../../assets/icons/paper_plane.svg";
//@ts-ignore
import linkedin from "../../assets/icons/linkedin.svg";

//@ts-ignore
import * as styles from "./Contact.module.scss";
import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <h1>Contact</h1>
      <div className={styles.contact}>
        <hr />
        <div className={styles.item}>
          <img src={phone} alt="phone" /> +48 795 597 310
        </div>
        <hr />
        <div className={styles.item}>
          <img src={paperPlane} alt="paper_plane" /> joannamonikamadej@gmail.com
        </div>
        <hr />
        <a href="https://www.linkedin.com/in/jomadej/" target="_blank" className={styles.item}>
          <img src={linkedin} alt="paper_plane" /> /jomadej
        </a>
        <hr />
      </div>
    </div>
  );
};

export default Contact;

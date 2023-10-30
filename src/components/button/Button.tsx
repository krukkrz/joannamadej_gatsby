//@ts-ignore
import * as styles from "./Button.module.scss";
import React from "react";
import {Link} from "gatsby";

type Props = {
  text: string;
  url: string;
};
const Button = ({ text, url }: Props) => {
  return (
    <Link to={url}>
      <div className={styles.button}>
        <div>{text}</div>
      </div>
    </Link>
  );
};

export default Button;

//@ts-ignore
import * as styles from "./Button.module.scss";
import React from "react";
import { Link } from "gatsby";

type Props = {
  text: string;
  url: string;
};

const Button = ({ text, url }: Props) => {
  return (
      <div className={styles.wrapper}>
        <Link to={url}>
          <div className={styles.button}>
            {text}
          </div>
        </Link>
      </div>
  );
};

export default Button;

import React from "react";

// @ts-ignore
import buttonLeft from "../../assets/icons/button_left.png";
// @ts-ignore
import buttonRight from "../../assets/icons/button_right.png";
// @ts-ignore
import * as styles from "./Arrow.module.scss";

type ArrowProps = {
  className: string;
  direction: Direction;
  style: any;
  onClick: any;
};

const Arrow = ({ style, className, direction, onClick }: ArrowProps) => {
  console.log(className);

  return (
    <div className={styles.arrow}>
      <img
        className={className}
        style={{
          ...style,
          display: "block",
          height: "auto",
          width: "auto",
        }}
        onClick={onClick}
        src={direction === "left" ? buttonLeft : buttonRight}
        alt="buttonLeft"
      />
    </div>
  );
};

type Direction = "left" | "right";

export default Arrow;

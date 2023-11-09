//@ts-ignore
import * as styles from "./Menu.module.scss";
//@ts-ignore
import close from "../../../assets/icons/close.svg";
import { Link } from "gatsby";
import React from "react";

type Props = {
  onClose: () => void;
  links: any[];
};

const Menu = (props: Props) => {
  return (
    <div className={styles.widget}>
      <div className={styles.background}></div>
      <div className={styles.menu}>
        <div className={styles.items_wrapper}>
          <div className={styles.items}>
            {props.links.map((link, index) => {
              return (
                <>
                  {index == 0 ? null : <hr />}
                  {link}
                </>
              );
            })}
          </div>
        </div>
        <img src={close} alt="close" onClick={props.onClose} />
      </div>
    </div>
  );
};

export default Menu;

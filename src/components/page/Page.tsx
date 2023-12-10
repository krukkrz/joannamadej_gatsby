import Navbar from "../navbar/Navbar";
//@ts-ignore
import * as styles from "./Page.module.scss";
import Footer from "../footer/Footer";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Page = ({ children }: Props) => {
  return (
    <div className={styles.wrapper}>
      <title>Joanna Madej - UX/UI Designer</title>
        <Navbar />
      <div className={styles.page}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Page;

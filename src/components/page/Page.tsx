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
      <div className={styles.page}>
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Page;

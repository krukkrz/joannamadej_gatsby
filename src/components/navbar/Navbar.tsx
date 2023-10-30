//@ts-ignore
import * as styles from "./Navbar.module.scss";
//@ts-ignore
import hamburger from "../../assets/icons/hamburger.svg";
import React, { useState } from "react";
import Menu from "./menu/Menu";
import {Link} from "gatsby";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={styles.navbar}>
        <Link to={"/"}>Home</Link>
        <Link to={"/#my_projects"}>My projects</Link>
        <Link to={"/#about_me"}>About me</Link>
        <Link to={"/#testimonials"}>Testimonials</Link>
        <Link to={"/#contact"}>Contact</Link>
      </div>
      <div className={styles.hamburger} onClick={handleHamburgerClick}>
        <img src={hamburger} alt="hamburger" />
      </div>
      {isMenuOpen && <Menu onClose={handleHamburgerClick} />}
    </>
  );
};

export default Navbar;

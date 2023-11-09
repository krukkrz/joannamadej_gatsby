//@ts-ignore
import * as styles from "./Navbar.module.scss";
//@ts-ignore
import hamburger from "../../assets/icons/hamburger.svg";
import React, { useState } from "react";
import Menu from "./menu/Menu";
import { Link } from "gatsby";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    <Link onClick={handleHamburgerClick} to={"/"}>
      Home
    </Link>,
    <Link onClick={handleHamburgerClick} to={"/#my_projects"}>
      My projects
    </Link>,
    <Link onClick={handleHamburgerClick} to={"/#about_me"}>
      About me
    </Link>,
    <Link onClick={handleHamburgerClick} to={"/#testimonials"}>
      Testimonials
    </Link>,
    <Link onClick={handleHamburgerClick} to={"/#contact"}>
      Contact
    </Link>,
  ];
  return (
    <>
      <div className={styles.navbar}>{links}</div>
      <div className={styles.hamburger} onClick={handleHamburgerClick}>
        <img src={hamburger} alt="hamburger" />
      </div>
      {isMenuOpen && <Menu links={links} onClose={handleHamburgerClick} />}
    </>
  );
};

export default Navbar;

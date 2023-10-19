import React from "react";
import "./Navbar.css";
import mainLogo from "../assets/placeholder-colored.png"; //porting the logo from assets folder to be used here
import contactBtnIcon from "../assets/letter-icon-png-10.jpg";
import { Link } from "react-scroll"; //Using links for page navigation

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={mainLogo} alt="myLogo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Projects</Link>
        <Link className="desktopMenuListItem">Education</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={contactBtnIcon} alt="" className="desktopMenuImg" />Contact Me
      </button>
    </nav>
  );
};

export default Navbar;

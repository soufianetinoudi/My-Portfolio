import React, { useState } from "react";
import "./Navbar.css";
import mainLogo from "../assets/placeholder-colored.png"; //porting the logo from assets folder to be used here
import contactBtnIcon from "../assets/letter-icon-png-10.jpg";
import { Link } from "react-scroll"; //Using links for page navigation
import menuLogo from "../assets/better_burger_icon.png"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={mainLogo} alt="myLogo" className="logo" />
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Projects</Link>
        <Link activeClass='active' to='education' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Education</Link>
        {/*Explaining activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500}:

        I create an active class and a direction to where it will be heading with "to=''"
        All this is what we call silky smooth scrolling with spy={true} smooth={true} offset={-50} duration={500}
        helping us set the smoothness, the position as well as the time it takes to scroll to the section
        */}
      </div>

      {/*The making of burger menu for mobile devices*/}
      <img src={menuLogo} alt="burger_menu" className="myBurgerMenu" onClick={()=>setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
        <Link activeClass='active' to='education' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Education</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>

      <button className="desktopMenuBtn" onClick={() => {
        document.getElementById("Contact").scrollIntoView({behavior: 'smooth'});
      }}>
        <img src={contactBtnIcon} alt="" className="desktopMenuImg" />Contact Me
      </button>
    </nav>
  );
};

export default Navbar;

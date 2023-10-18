import React from "react";
import "./Intro.css";
import devImg from "../assets/img_intro_security.png";
import { Link } from "react-scroll";
import btnBagIcon from "../assets/3198621-200.png"

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="helloTxt">Hello,</span>
        <span className="myText">
          I'm <span className="myName">Soufiane</span>
          <br />
        </span>
        <p className="paragraph">
          Former QA tester, currently learning web design development.
        </p>
        <Link>
          <button className="btn">
            <img src={btnBagIcon} alt="bagIcon" className="btnImg" /> Hire Me
          </button>
        </Link>
      </div>
      <img src={devImg} alt="devImg" className="introImg" />
    </section>
  );
};

export default Intro;

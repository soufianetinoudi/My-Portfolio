import React from "react";
import "./Contact.css";
import offptLogo from "../assets/ofppt-logo-ACD755B3D2-seeklogo.com.png";
import fstLogo from "../assets/fstsettat.couleur-min-206x206.png"

const Contact = () => {
  return (
    <section id="contactPage">
      <div id="education">
        <h1 className="contactTitle">My Education</h1>
        <p className="educationDesc">
          For my education I studied Programming in different areas, giving me
          the opportunity to learn more and expand my skills and knowledge
        </p>
        <div className="educationImgs">
          <img src={offptLogo} alt="offpt_logo" className="educationImg"></img>
          <img src={fstLogo} alt="fst_settat_logo" className="educationImg"></img>
        </div>
      </div>
      <div id="Contact"></div>
    </section>
  );
};

export default Contact;

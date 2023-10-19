import React from "react";
import "./Contact.css";
import offptLogo from "../assets/ofppt-logo-ACD755B3D2-seeklogo.com.png";
import fstLogo from "../assets/fstsettat.couleur-min-206x206.png"
import linkedInIcon from "../assets/LinkedIn_icon_circle.svg.png"
import twitterIcon from "../assets/52-523784_circle-twitter-logo-png-clipart.png"
import youTubeIcon from "../assets/YouTube_social_red_circle_(2017).svg.png"

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
          <img src={fstLogo} alt="fst_settat_logo" className="educationImg"
          ></img>
        </div>
      </div>
      
      <div id="Contact">
        <h1 className="contactTitle">Contact</h1>
        <span className="contactDesc">Please fill your details below</span>
        <form className="contactForm">
          <input type="text" className="userName" placeholder="Please fill your name" />
          <input type="email" className="userEmail" placeholder="Pleas fill Your email" />
          <textarea className="textMessage" name="message" rows="5" placeholder="your message here"></textarea>
          <button type="submit" value="send" className="submitBtn">Submit</button>
          <div className="links">
            <img src={linkedInIcon} alt="" className="link"/>
            <img src={twitterIcon} alt="" className="link"/>
            <img src={youTubeIcon} alt="" className="link"/>
          </div>
        </form>
      </div>

    </section>
  );
};

export default Contact;

import React, { useRef } from "react";
import "./Contact.css";
import offptLogo from "../assets/ofppt-logo-ACD755B3D2-seeklogo.com.png";
import fstLogo from "../assets/fstsettat.couleur-min-206x206.png"
import linkedInIcon from "../assets/LinkedIn_icon_circle.svg.png"
import twitterIcon from "../assets/52-523784_circle-twitter-logo-png-clipart.png"
import youTubeIcon from "../assets/YouTube_social_red_circle_(2017).svg.png"
import emailjs from "@emailjs/browser";

const Contact = () => {
  /*I used ReactJs in order to generate emails with a message template and send it to the user who commented on the contact section*/
  /*I replaced the values inside .sendForm() with generated values made in EmailJs, the new values are template IDs*/
  const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_73puk9o",
          "template_oyo5u3j",
          form.current,
          "itDZH2lTTozxlFh9F"
        )
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset();
            alert("Email sent successfully!")
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
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
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="userName" placeholder="Please fill your name" name='from_name' />
          <input type="email" className="userEmail" placeholder="Please fill Your email" name='from_email' />
          <textarea className="textMessage" name='message' rows="5" placeholder="your message here" />
          {/*In text inputs & text area, I added name='' and a value inside each, these are found inside the email template form emailJs and they will be replaced by user inputs aka user details and his message*/}
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

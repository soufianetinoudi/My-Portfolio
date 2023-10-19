import React from "react";
import "./Works.css";
import paulLogo from "../assets/paul.jpg";
import livryLogo from "../assets/livry_logo.png";
import coopVtcLogo from "../assets/coopvtc_logoEE.jpg";
// import inwiLogo from "../assets/inwi_logo.jpg";

const Works = () => {
  return (
    <section id="works">
      <h2 className="workTitle">Projects</h2>
      <span className="workDesc">
        I worked on different projects across different platforms, from
        hand held devices to backend side
      </span>
      <div className="workImgs">
        <img src={paulLogo} alt="paulLogo" className="workImg" />
        {/* <img src={inwiLogo} alt="inwiLogo" className="workImg" /> */}
        <img src={livryLogo} alt="livryLogo" className="workImg" />
        <img src={coopVtcLogo} alt="coopVtcLogo" className="workImg" />
      </div>
      <button className="workBtn">See more</button>
    </section>
  );
};

export default Works;

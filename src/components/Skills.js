import React from "react";
import "./Skills.css";
import reactLogo from "../assets/react_logo.png";
import designLogo from "../assets/responsive_web_design11.png";
import gitHubLogo from "../assets/github-octocat-logo-png-transparent.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I'm learning and developing my skills and knowledge on React JS, as well
        as obtaining good development practices
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={reactLogo} alt="reactIcon" className="skillBarImg" />
          <div className="skillBarText">
            <h2>React Js Programming</h2>
            <p>
              This is a Placeholder Text and it's going be changed later on down
              the line once the project is near its end
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={designLogo} alt="designIcon" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Learn Web design and responsive</h2>
            <p>
              This is a Placeholder Text and it's going be changed later on down
              the line once the project is near its end
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={gitHubLogo} alt="gitHubIcon" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Learn GitHub utility</h2>
            <p>
              This is a Placeholder Text and it's going be changed later on down
              the line once the project is near its end
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

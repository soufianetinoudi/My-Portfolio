import React from "react";
import "./Skills.css";
import reactLogo from "../assets/react_logo.png";
import designLogo from "../assets/responsive-icon-9.png";
import gitHubLogo from "../assets/github-octocat-logo-png-transparent.png";
import appTestIcon from "../assets/test_mobile_app.png"
import backendTestIcon from "../assets/backend_test.png"
import reportIcon from "../assets/call-report-icon-3.png"

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

      <span className="skillTitle">What I did</span>
      <span className="skillDesc">
        I worked as a Quality Assurance tester for two years, testing on a
        variety of projects and support the development team by creating details
        reports
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={appTestIcon} alt="reactIcon" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Testing mobile and web applications</h2>
            <p>
              This is a Placeholder Text and it's going be changed later on down
              the line once the project is near its end
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={backendTestIcon} alt="designIcon" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Backend testing</h2>
            <p>
              This is a Placeholder Text and it's going be changed later on down
              the line once the project is near its end
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={reportIcon} alt="gitHubIcon" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Creating detailed reports for the team</h2>
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

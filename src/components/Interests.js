import React from "react";
import Code from "../assets/code.svg";
import Gear from "../assets/gears.svg";
import Cloud from "../assets/cloud.svg";
import Infra from "../assets/infra.svg";

export default function Interests() {
  return (
    <div id="interests" className="section">
      <div className="content-container">
        <div className="title">
          <div className="title-name">What I Do</div>
          <h1 className="title-intro-md">
            I enjoy being across the entire stack. Everything I don't know is a
            learning opportunity.
          </h1>
        </div>
        <div className="interests-overview">
          <div className="interest-card">
            <div className="interest-img blue">
              <Code className="svg-icon" />
            </div>
            <div className="interest-title">Development</div>
            <div className="interest-text">
              Development is my craft. I love that it allows me to be creative,
              solve complex problems, and ultimately build something great. I
              always strive to develop clean, clear, performant, responsive and
              high quality code.
            </div>
          </div>
          <div className="interest-card">
            <div className="interest-img purple">
              <Gear className="svg-icon" />
            </div>
            <div className="interest-title">Operations</div>
            <div className="interest-text">
              Creation is core to the human experience, and I am incredibly
              passionate about producing work that hits the aesthetic sweet
              spot, and hopefully inspires others in their own creative
              endeavours.
            </div>
          </div>
          <div className="interest-card">
            <div className="interest-img cyan">
              <Cloud className="svg-icon" />
            </div>
            <div className="interest-title">Architecture</div>
            <div className="interest-text">
              There is no point making a product if no one can see how awesome
              it is! I love architecting scalable, highly performant and fault
              tolerant solutions, or developing tooling to assist with the
              deployment process.
            </div>
          </div>
          <div className="interest-card">
            <div className="interest-img pink">
              <Infra className="svg-icon" />
            </div>
            <div className="interest-title">Infrastructure</div>
            <div className="interest-text">
              Team work makes the dream work! I am super passionate about
              sharing knowledge, collaborating, learning from or mentoring
              others and ultimately just working together as a team to make
              great things.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

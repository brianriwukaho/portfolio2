import React from "react";
import swyftx from "../assets/swyftx.png";

export default function About() {
  return (
    <div id="about" className="section">
      <div className="content-container">
        <div className="title">
          <div className="title-name">About Me</div>
          <h1 className="title-intro-md">
            As a kid I played with legos. In my teens I played minecraft. I
            still do those things, but now I code as well. Same vibe you feel?
          </h1>
        </div>
        <div className="about-me">
          I am a Full-Stack Software Engineer (Java / Node / React) with great
          frontend skills and a keen interest in deployments and infrastructure.
          I am highly proficient in Javascript ES6+ fundamentals and have worked
          professionally and personally on React and Angular.
          <br />
          <br /> Knowledgable in TDD and BDD. Have written over 1000 jest tests
          and am experienced with Enzyme / React Testing Libary integration
          tests and Cypress E2E. Often thinking about:
          https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications
          <br />
          <br />
          I am also experienced with various backend Java backend frameworks
          (Java EE, Spring, Quarkus). I have developed restful APIs, k8s
          microservices and lambdas in java (don't do lambdas in java please).
          Consistently with high unit testing coverage with the help of Jacoco
          Test reports and Sonarqube.
          <br />
          <br />I have experience working with event-driven FaaS architectures,
          writing CloudFormation templates, setting up CI/CD pipelines and
          configuring Kubernetes Clusters. I am a big believer of declarative
          pipelines, infrastructure and making deployments as easy as possible.
        </div>
        <div className="skills-container">
          <div className="languages">
            <h2>I currently work at Australia's leading Crypto Exchange</h2>
            <div className="icon-container">
              <img className="icon" src={swyftx} />
            </div>
          </div>
        </div>
      </div>

      <div className="top-bar-1" />
      <div className="top-bar-2" />
      <div className="top-bar-3" />
      <div className="bottom-bar-1" />
      <div className="bottom-bar-2" />
      <div className="bottom-bar-3" />
    </div>
  );
}

import React from "react";
import JS from "./js.svg";
import TS from "./ts.svg";
import JAVA from "./java.svg";
import NODEJS from "./nodejs.svg";
import AWS from "./aws.svg";
import Cfn from "./cloudformation.svg";
import Docker from "./docker.svg";
import Git from "./git.svg";
import ReactLogo from "./reactlogo.svg";
import Kubernetes from "./kubernetes.svg";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-title">
        <div className="about-title-name">About Me</div>
        <h1 className="about-title-intro">
          As a kid I played with legos. In my teens I played minecraft. <br /> I
          still do those things, but now I code as well. <br />
          Same vibe you feel?
        </h1>
      </div>
      <div className="about-content-container">
        <div className="about-skills-container">
          <div className="languages">
            <h2>Languages</h2>
            <div className="icon-container">
              <JS />
              <TS />
              <JAVA />
              <NODEJS />
            </div>
          </div>
          <div className="tools">
            <h2>Tools</h2>
            <div className="icon-container">
              <ReactLogo />
              <Docker />
              <Kubernetes />
              <AWS />
              <Cfn />
              <Git />
            </div>
          </div>
        </div>
        <div className="about-info">
          I am a Full-Stack Software Engineer (Java / Node / React) with great
          frontend skills and a keen interest in deployments and infrastructure.
          I am highly proficient in Javascript ES6+ fundamentals and have worked
          professionally and personally on React and Angular.
          <br />
          <br />I have experience working with event-driven FaaS architectures,
          writing CloudFormation templates, setting up CI/CD pipelines and
          configuring Kubernetes Clusters. I am a big believer of declarative
          pipelines, infrastructure and making deployments as easy as possible.
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

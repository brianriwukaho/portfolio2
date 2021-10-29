import React from "react";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-title-container">
        <div className="about-title">
          <div className="about-title-name">About Me</div>
          <h1 className="about-title-intro">
            As a kid I played with legos.
            <br />
            <br />
            In my teens I played minecraft.
            <br />
            <br />
            I still do those things,
            <br />
            <br />
            but now I code as well.
            <br />
            <br />
            Same vibe you feel?
          </h1>
        </div>
      </div>
      <div className="about-info">
        I am a Full-Stack Software Engineer (Java / Node / React) with great
        frontend skills and a keen interest in deployments and infrastructure. I
        am highly proficient in Javascript ES6+ fundamentals and have worked
        professionally and personally on React and Angular.
        <br />
        <br />I have experience working with event-driven FaaS architectures,
        writing CloudFormation templates, setting up CI/CD pipelines and
        configuring Kubernetes Clusters. I am a big believer of declarative
        pipelines, infrastructure and making deployments as easy as possible.
      </div>
    </div>
  );
}

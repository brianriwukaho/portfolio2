import React from "react";
import gif from "./gif.gif";

export default function Contact() {
  return (
    <div id="main" className="section">
      <div className="content-container">
        <div className="title-container">
          <div className="title-name">Get in touch</div>
          <h1 className="title-intro-lg">Contact</h1>
        </div>
        <img className="main-img" src={gif} />
      </div>
    </div>
  );
}

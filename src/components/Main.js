import React from "react";
import gif from "./gif.gif";

export default function Main() {
  return (
    <div id="main" className="section">
      <div className="content-container">
        <div className="title-container">
          <div className="title-name">Brian Riwu Kaho</div>
          <h1 className="title-intro-lg">
            Hello, my name's Brian. I'm a Software Engineer
          </h1>
        </div>
        <img className="main-img" src={gif} />
      </div>
      <div className="bottom-bar-1" />
      <div className="bottom-bar-2" />
      <div className="bottom-bar-3" />
      <div className="top-bar-1" />
      <div className="top-bar-2" />
      <div className="top-bar-3" />
    </div>
  );
}

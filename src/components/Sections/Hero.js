import React from "react";
import BackgroundAnimation from "../SVG/BackgroundAnimation";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Welcome To&nbsp;
          <br />
           My Personal Portfolio
        </h1>
        <p>
          I am a front-end developer specalizing in building (and
          occasionally designing) exceptionaly digital experiences.
          Currently I am focused on creating responsive front-end
          applications while learning backend technologies.
        </p>
        <button className="learn-more-btn">
          <a href="#projects">Learn More</a>
        </button>
      </div>
      <BackgroundAnimation />
    </section>
  );
}

export default Hero;

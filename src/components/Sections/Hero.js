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
          I am a web developer specalizing in building exceptionaly
          digital experiences. I am focused on creating websites and 
          web apps which are easy for clients to use.
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

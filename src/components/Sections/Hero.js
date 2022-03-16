import React from "react";
import BackgroundAnimation from "../SVG/BackgroundAnimation";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Welcome To
          <br />
          My Personal Portfolio
        </h1>
        <p>
          I am a Full Stack Developer who is always learning new technologies
          with a love for explaining development to other people.
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

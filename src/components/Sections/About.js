import TimelineSvg from "../SVG/TimelineSvg";

function About() {
  return (
    <section className="about" id="about">
      <div className="divider-2"></div>
      <h2 className="section-heading">About Me</h2>
      <p className="about-description">
        I am a self taught Full Stack Developer who overtime really fell in love
        with the process of creating a full web application. I started my
        journey late 2019 where I knew I enjoyed technology and decided to teach
        myself at freecodecamp. in 2020 I created my first app and in 2021 I
        went head first into Full Stack Development. It is 2022 and I am still
        learning, improving, and more excited than ever to build more amazing
        apps.
      </p>
      <ul className="timeline">
        <li className="timeline-item">
          <h4>
            2019
            <TimelineSvg />
          </h4>
          <p className="timeline-description">Started My Journey</p>
        </li>
        <li className="timeline-item">
          <h4>
            2020
            <TimelineSvg />
          </h4>
          <p className="timeline-description">
            Created My First App. Rock, Paper, Scissors
          </p>
        </li>
        <li className="timeline-item">
          <h4>
            2021
            <TimelineSvg />
          </h4>
          <p className="timeline-description">
            Dove Into Fullstack Dev With MERN Stack
          </p>
        </li>
        <li className="timeline-item">
          <h4>
            2022
            <TimelineSvg />
          </h4>
          <p className="timeline-description">
            Learning New Things. More To Come
          </p>
        </li>
      </ul>
      <div className="divider"></div>
    </section>
  );
}

export default About;

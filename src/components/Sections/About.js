import TimelineSvg from "../SVG/TimelineSvg";

function About() {
  return (
    <section className="about" id="about">
      <div className="divider-2"></div>
      <h2 className="section-heading">About Me</h2>
      <p className="about-description">
        I am a self taught front-end developer who has always had a knack for
        technology and working with computers. I started making small edits to 
        webpages for fun in 2019 where my simple changes turned into a love for 
        programming. 
    
        Fascinated by how intricate programming can be I was quickly drawn to learn
        more. I started learning javascript to make websites more interactive. Then 
        I started to find designs online or ideas for web apps and build them on my
        own. I am spending most of my time now learning new techologies and sharpening 
        my skills on the front-end.
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

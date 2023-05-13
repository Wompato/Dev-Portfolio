import TimelineSvg from "../SVG/TimelineSvg";

function About() {
  return (
    <section className="about" id="about">
      <div className="divider-2"></div>
      <h2 className="section-heading">About Me</h2>
      <p className="about-description">
        I am a self taught web developer who has always had a knack for
        technology and working with computers. I started making small edits to 
        webpages for fun in 2020 where my simple changes turned into a love for 
        programming. 
    
        Fascinated by how intricate programming can be I was quickly drawn to learn
        more. I started learning javascript to make websites more interactive. Then 
        I started to learn PHP and WordPress so I could build websites other people
        could use and love. I am spending most of my time now learning new techologies
        to build even more impressive stuff!
      </p>
      <ul className="timeline">
        <li className="timeline-item">
          <h4>
            2020
            <TimelineSvg />
          </h4>
          <p className="timeline-description">Started my journey</p>
        </li>
        <li className="timeline-item">
          <h4>
            2021
            <TimelineSvg />
          </h4>
          <p className="timeline-description">
            Created my first app. Rock, Paper, Scissors
          </p>
        </li>
        <li className="timeline-item">
          <h4>
            2022
            <TimelineSvg />
          </h4>
          <p className="timeline-description">
            Started working with agencies to create amazing websites and apps
          </p>
        </li>
        <li className="timeline-item">
          <h4>
            2023
            <TimelineSvg />
          </h4>
          <p className="timeline-description">
            Learning new things. more to come
          </p>
        </li>
      </ul>
      <div className="divider"></div>
    </section>
  );
}

export default About;

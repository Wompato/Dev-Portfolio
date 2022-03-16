function Project() {
  return (
    <section id="projects" className="projects">
      <div className="divider"></div>
      <h2 className="section-heading">Projects</h2>
      <section className="projects-container">
        <article className="project-card">
          <img src="/images/glitter.jpg" className="project-card-img"></img>
          <div className="project-card-title-content">
            <h3 className="project-card-title">Final Fantasy API</h3>
            <hr></hr>
          </div>
          <p className="project-card-description">
            A completely open to use REST API for getting data back on all
            things pertaining to the game series Final Fantasy. Inspired by
            PokeAPI.
          </p>
          <div className="project-stack-container">
            <h6>Stack</h6>
            <ul className="project-stack-list">
              <li>Mongo</li>
              <li>Mongoose</li>
              <li>Node</li>
              <li>Express</li>
            </ul>
          </div>
          <ul className="project-source-list">
            <a target="blank" href="https://github.com/Wompato/FF-Api">
              Live Demo
            </a>
            <a target="blank" href="https://github.com/Wompato/FF-Api">
              GitHub
            </a>
          </ul>
        </article>
        <article className="project-card">
          <img src="/images/glitter.jpg" className="project-card-img"></img>
          <div className="project-card-title-content">
            <h3 className="project-card-title">Voice Powered News</h3>
            <hr></hr>
          </div>
          <p className="project-card-description">
            A Front-End news searching app which combines the news-API with
            AlanAI to allow users to interact with the interface with only their
            voice.
          </p>
          <div className="project-stack-container">
            <h6>Stack</h6>
            <ul className="project-stack-list">
              <li>React</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <ul className="project-source-list">
            <a
              target="blank"
              href="https://622bab387855d03a242161ee--upbeat-lamarr-9ba669.netlify.app/"
            >
              Live Demo
            </a>
            <a target="blank" href="https://github.com/Wompato/AlanAi-News">
              GitHub
            </a>
          </ul>
        </article>
        <article className="project-card">
          <img src="/images/glitter.jpg" className="project-card-img"></img>
          <div className="project-card-title-content">
            <h3 className="project-card-title">Bad Checklist</h3>
            <hr></hr>
          </div>
          <p className="project-card-description">
            A desktop app I made for Lakeland Community College to automate
            looking through the lists of people who owed the school money
          </p>
          <div className="project-stack-container">
            <h6>Stack</h6>
            <ul className="project-stack-list">
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>Electron.js</li>
            </ul>
          </div>
          <ul className="project-source-list">
            <a
              target="blank"
              href="https://github.com/Wompato/Bad-Checklist-Work"
            >
              Live Demo
            </a>
            <a
              target="blank"
              href="https://github.com/Wompato/Bad-Checklist-Work"
            >
              GitHub
            </a>
          </ul>
        </article>
        <article className="project-card">
          <img src="/images/glitter.jpg" className="project-card-img"></img>
          <div className="project-card-title-content">
            <h3 className="project-card-title">Goal Tracker</h3>
            <hr></hr>
          </div>
          <p className="project-card-description">
            A Fullstack application to keep track of my long and short term
            goals. Includes user authentication and redux
          </p>
          <div className="project-stack-container">
            <h6>Stack</h6>
            <ul className="project-stack-list">
              <li>React</li>
              <li>Node</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <ul className="project-source-list">
            <a target="_blank" href="https://github.com/Wompato/Goal-Tracker">
              Live Demo
            </a>
            <a target="_blank" href="https://github.com/Wompato/Goal-Tracker">
              GitHub
            </a>
          </ul>
        </article>
      </section>
    </section>
  );
}

export default Project;

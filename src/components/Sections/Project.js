function Project() {
  return (
    <section id="projects" className="projects">
      <div className="divider"></div>
      <h2 className="section-heading">Projects</h2>
      <section className="projects-container">
        <article className="project-card">
          <img src="/images/FFDex.webp" className="project-card-img"></img>
          <div className="project-card-title-content">
            <h3 className="project-card-title">Delivery Website</h3>
            <hr></hr>
          </div>
          <p className="project-card-description">
            A fully responsive mock delivery website landing
            page with light and dark mode features.
          </p>
          <div className="project-stack-container">
            <h6>Stack</h6>
            <ul className="project-stack-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>SASS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <ul className="project-source-list">
            <a target="blank" href="https://app.netlify.com/sites/marvelous-fairy-dd9669/overview">
              Live Demo
            </a>
            <a target="blank" href="https://github.com/Wompato/Delivery-Design">
              GitHub
            </a>
          </ul>
        </article>
        <article className="project-card">
          <img src="/images/alanai.webp" className="project-card-img"></img>
          <div className="project-card-title-content">
            <h3 className="project-card-title">Laragigs</h3>
            <hr></hr>
          </div>
          <p className="project-card-description">
            A full-stack job searching application for finding jobs specific to
            PHP/Laravel. Inspired by Indeed.com this website allows users to sign-up
            create job listings, search and filter job queries, and even message 
            companies they find.
          </p>
          <div className="project-stack-container">
            <h6>Stack</h6>
            <ul className="project-stack-list">
              <li>PHP</li>
              <li>Laravel</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <ul className="project-source-list">
            <a
              target="blank"
              href="http://peaceful-depths-09862.herokuapp.com/"
            >
              Live Demo
            </a>
            <a target="blank" href="https://github.com/Wompato/Laragigs">
              GitHub
            </a>
          </ul>
        </article>
        <article className="project-card">
          <img
            src="/images/badchecklist.webp"
            className="project-card-img"
          ></img>
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
          <img
            src="/images/goaltracker.webp"
            className="project-card-img"
          ></img>
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

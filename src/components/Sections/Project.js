function Project() {
  return (
    <section id="projects" className="projects">
      <div className="divider"></div>
      <h2 className="section-heading">Projects</h2>
      <section className="projects-container">
        <article className="project-card">
          <img src="/images/DeliveryDesign.png" className="project-card-img"></img>
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
            <a target="blank" href="https://marvelous-fairy-dd9669.netlify.app/">
              Live Demo
            </a>
            <a target="blank" href="https://github.com/Wompato/Delivery-Design">
              GitHub
            </a>
          </ul>
        </article>
        <article className="project-card">
          <img src="/images/Laragigs.png" className="project-card-img"></img>
          <div className="project-card-title-content">
            <h3 className="project-card-title">Laragigs</h3>
            <hr></hr>
          </div>
          <p className="project-card-description">
            A full-stack job searching application for finding jobs specific to
            PHP/Laravel.
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
            <a target="blank" href="https://github.com/Wompato/Laragigs">
              GitHub
            </a>
          </ul>
        </article>
        <article className="project-card">
          <img
            src="/images/Petitti.png"
            className="project-card-img"
          ></img>
          <div className="project-card-title-content">
            <h3 className="project-card-title">Petitti Family Farms</h3>
            <hr></hr>
          </div>
          <p className="project-card-description">
            A website redesign of Petitti Garden Center's three nursery websites
            with a blog, custom animated icons, and a password protected downloadable
            inventory spreadsheet.
          </p>
          <div className="project-stack-container">
            <h6>Stack</h6>
            <ul className="project-stack-list">
              <li>PHP</li>
              <li>SASS</li>
              <li>WordPress</li>
            </ul>
          </div>
          <ul className="project-source-list">
            <a target="_blank" href="https://petittifamilyfarms.com">
              Live Demo
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
      </section>
    </section>
  );
}

export default Project;

import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiWordpress
} from "react-icons/si";

function Technologies() {
  return (
    <section className="skills" id="technologies">
      <div className="divider"></div>
      <h2 className="section-heading">Technologies</h2>
      <p>
        Here are some of the technologies I use for my projects. From Front-End
        to Back-End
      </p>
      <ul className="skills-list">
        <li className="skill">
          <div className="skill-content">
            <div className="skill-heading">
              <h4 className="skill-title">React.js</h4>
              <SiReact size="30px" />
            </div>
            <p className="skill-description">
              Modern React with hooks and state management with Redux
            </p>
          </div>
        </li>
        <li className="skill">
          <div className="skill-content">
            <div className="skill-heading">
            <h4 className="skill-title">Node.js</h4>
            <SiNodedotjs size="30px" />
            </div>
            <p className="skill-description">
              Taking Javascript to the backend to create REST APIs
              with Express
            </p>
          </div>
        </li>
        <li className="skill">
          <div className="skill-content">
            <div className="skill-heading">
              <h4 className="skill-title">Express</h4>
              <SiWordpress size="30px" />
            </div>
            <p className="skill-description">
              Building custom themes, plugins, and working with popular 
              plugins like ACF and YoastSEO
            </p>
          </div>
        </li>
        <li className="skill">
          <div className="skill-content">
            <div className="skill-heading">
              <h4 className="skill-title">MongoDB</h4>
              <SiPhp size="30px" />
            </div>
            <p className="skill-description">
              Creating backend services, working with different CMS, and 
              integrating 3rd party APIs
            </p>
          </div>
        </li>
        <li className="skill">
          <div className="skill-content">
            <div className="skill-heading">
              <h4 className="skill-title">JavaScript ES6+</h4>
              <SiJavascript size="30px" />
            </div>
            <p className="skill-description">
              Using all modern Javasript features such as fetch, async await,
              and classes
            </p>
          </div>
        </li>
        <li className="skill">
          <div className="skill-content">
          <div className="skill-heading">
              <h4 className="skill-title">HTML/ CSS</h4>
              <SiHtml5 size="30px" />
              <SiCss3 size="30px" />
            </div>
            <p className="skill-description">
              Focus on responsive layouts, accessibility, and SEO best practices
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Technologies;

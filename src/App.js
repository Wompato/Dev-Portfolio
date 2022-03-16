import BackgroundAnimation from "./components/SVG/BackgroundAnimation";
import TimelineSvg from "./components/SVG/TimelineSvg";
import {
  SiGithub,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { GiAbstract118 } from "react-icons/gi";

function App() {
  return (
    <div className="app-container">
      <header>
        <div className="portfolio-logo-container">
          <a
            target="blank"
            href="https://github.com/Wompato?tab=repositories"
            className="logo-link"
          >
            <span>
              <GiAbstract118 size="30px" />
            </span>
            <span>Portfolio</span>
          </a>
        </div>
        <nav>
          <ul className="navigation">
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Technologies</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>

        <div className="social-icons-container">
          <a href="https://github.com/Wompato?tab=repositories" target="blank">
            <SiGithub size="30px" />
          </a>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="hero-left">
            <h1>
              Welcome To
              <br />
              My Personal Portfolio
            </h1>
            <p>
              I am a Full Stack Developer who is always learning new
              technologies with a love for explaining development to other
              people.
            </p>
            <button className="learn-more-btn">Learn More</button>
          </div>
          <BackgroundAnimation />
        </section>
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
                AlanAI to allow users to interact with the interface with only
                their voice.
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
                <a
                  target="_blank"
                  href="https://github.com/Wompato/Goal-Tracker"
                >
                  Live Demo
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Wompato/Goal-Tracker"
                >
                  GitHub
                </a>
              </ul>
            </article>
          </section>
        </section>
        <section className="skills">
          <div className="divider"></div>
          <h2 className="section-heading">Technologies</h2>
          <p>
            Here are some of the technologies I use for my projects. From
            Front-End to Back-End
          </p>
          <ul className="skills-list">
            <li className="skill">
              <div className="skill-content">
                <h4 className="skill-title">React.js</h4>
                <SiReact size="30px" />
                <p className="skill-description">
                  Modern React with hooks and state management with Redux
                </p>
              </div>
            </li>
            <li className="skill">
              <div className="skill-content">
                <h4 className="skill-title">Node.js</h4>
                <SiNodedotjs size="30px" />
                <p className="skill-description">
                  Taking Javascript to the backend to create REST APIs
                </p>
              </div>
            </li>
            <li className="skill">
              <div className="skill-content">
                <h4 className="skill-title">Express</h4>
                <SiExpress size="30px" />
                <p className="skill-description">
                  Extending Node.js to make easy fullstack applications with
                  authentication
                </p>
              </div>
            </li>
            <li className="skill">
              <div className="skill-content">
                <h4 className="skill-title">MongoDB</h4>
                <SiMongodb size="30px" />
                <p className="skill-description">
                  Used with Mongoose to store data for backends
                </p>
              </div>
            </li>
            <li className="skill">
              <div className="skill-content">
                <h4 className="skill-title">ES6+ JavaScript</h4>
                <SiJavascript size="30px" />
                <p className="skill-description">
                  Using all modern Javasript features such as fetch, async
                  await, and classes
                </p>
              </div>
            </li>
            <li className="skill">
              <div className="skill-content">
                <h4 className="skill-title">HTML5 / CSS3</h4>
                <SiHtml5 size="30px" /> <SiCss3 size="30px" />
                <p className="skill-description">
                  Focus on responsive layouts, accessibility, and SEO best
                  practices
                </p>
              </div>
            </li>
          </ul>
          <div className="divider-2"></div>
        </section>
        <section className="about">
          <h2 className="section-heading">About Me</h2>
          <p className="about-description">
            I am a self taught Full Stack Developer who overtime really fell in
            love with the process of creating a full web application. I started
            my journey late 2019 where I knew I enjoyed technology and decided
            to teach myself at freecodecamp. in 2020 I created my first app and
            in 2021 I went head first into Full Stack Development. It is 2022
            and I am still learning, improving, and more excited than ever to
            build more amazing apps.
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
      </main>
      <footer>
        <div className="contact-container">
          <h4>EMAIL</h4>
          <div>
            <a href="mailto:alexshelton1999@gmail.com">
              alexshelton1999@gmail.com
            </a>
            <a
              target="blank"
              href="https://github.com/Wompato?tab=repositories"
            >
              <SiGithub size="30px" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

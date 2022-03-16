import { SiGithub } from "react-icons/si";

function Footer() {
  return (
    <footer>
      <div className="contact-container">
        <h4>EMAIL</h4>
        <div>
          <a href="mailto:alexshelton1999@gmail.com">
            alexshelton1999@gmail.com
          </a>
          <a id="f-github" target="blank" href="https://github.com/Wompato?tab=repositories">
            <SiGithub size="30px" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

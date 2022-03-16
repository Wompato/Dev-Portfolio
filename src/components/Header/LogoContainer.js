import { GiAbstract118 } from "react-icons/gi";

function LogoContainer() {
  return (
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
  );
}

export default LogoContainer;

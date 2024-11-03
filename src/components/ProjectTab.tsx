import "../styles/ProjectsPage.css";
import Logo from "./logo";

interface Props {
  projectImage: string;
  projectDescription: string;
  projectDemo?: string;
  projectGitHub: string;
}

function ProjectTab({
  projectImage,
  projectDescription,
  projectDemo,
  projectGitHub,
}: Props) {
  return (
    <div className="project-tab">
      <img
        className="project-image-div"
        src={`${process.env.PUBLIC_URL}/images/${projectImage}`}
      ></img>
      <div className="project-description-links-container">
        <h1 className="project-description">{projectDescription}</h1>
        <div className="project-demo-div">
          <Logo
            logoLink={projectGitHub}
            logoClass="logo-small"
            logoImage="github-logo.png"
          ></Logo>

          <a href={projectDemo} className="demo-link">
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectTab;

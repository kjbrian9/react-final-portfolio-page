import { Display } from "phaser";
import "../styles/ProjectsPage.css";
import Logo from "./logo";
import Project from "./Project";
import { useState } from "react";
import youtubeProjectImg from "../images/Youtube.png";
import bachelorsImg from "../images/bachelorsProgram.png";
import gamingShopImg from "../images/gamingEshop.png";

function ProjectsPage() {
  const [currentProject, setCurrentProject] = useState("gaming webshop");
  return (
    <div className="projects-section" id="projectsSection">
      <div className="projects-page-title">Projects</div>
      <div className="projects-div">
        {currentProject === "gaming webshop" ? (
          <Project
            projectImage={gamingShopImg}
            projectDescription={"A gaming webshop demo,showcasing the products and the brand itself"}
            projectDemo={"https://kjbrian9.github.io/gaming-webapp/"}
            projectGitHub={"https://github.com/kjbrian9/gaming-webapp"}
          ></Project>
        ) : (
          <></>
        )}
        {currentProject === "bachelors thesis project" ? (
          <Project
            projectImage={bachelorsImg}
            projectDescription={
              "My bachelors thesis program focused on gathering information about GitHub repositories and evaluation these informationsf"
            }
            projectDemo={"https://kjbrian9.github.io/gaming-webapp/"}
            projectGitHub={"https://github.com/kjbrian9/gaming-webapp"}
          ></Project>
        ) : (
          <></>
        )}
        {currentProject === "youtube front page" ? (
          <Project
            projectImage={youtubeProjectImg}
            projectDescription={"A gaming webshop demo,showcasing the products and the brand itself"}
            projectDemo={"https://kjbrian9.github.io/gaming-webapp/"}
            projectGitHub={"https://github.com/kjbrian9/gaming-webapp"}
          ></Project>
        ) : (
          <></>
        )}
        <div className="projects-buttons-div">
          <button className="project-button" onClick={() => setCurrentProject("gaming webshop")}>
            Premium gaming shop
          </button>
          <button className="project-button" onClick={() => setCurrentProject("bachelors thesis project")}>
            Bachelors thesis project
          </button>
          <button className="project-button" onClick={() => setCurrentProject("youtube front page")}>
            Youtube webpage
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;

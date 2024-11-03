import "../styles/ProjectsPage.css";
import ProjectTab from "./ProjectTab";
import { useState } from "react";

function ProjectsPage() {
  const [currentProject, setCurrentProject] = useState("gaming webshop");
  return (
    <div className="projects-section" id="projectsSection">
      <div className="projects-page-title">Projects</div>
      <div className="projects-div">
        <div className="projects-buttons-div">
          <button
            className={
              currentProject === "gaming webshop"
                ? "active-project-button"
                : "project-button"
            }
            onClick={() => setCurrentProject("gaming webshop")}
          >
            Premium gaming shop
          </button>
          <button
            className={
              currentProject === "bachelors thesis project"
                ? "active-project-button"
                : "project-button"
            }
            onClick={() => setCurrentProject("bachelors thesis project")}
          >
            Bachelors thesis project
          </button>
          <button
            className={
              currentProject === "youtube front page"
                ? "active-project-button"
                : "project-button"
            }
            onClick={() => setCurrentProject("youtube front page")}
          >
            Youtube webpage
          </button>
          <button
            className={
              currentProject === "clothing eshop"
                ? "active-project-button"
                : "project-button"
            }
            onClick={() => setCurrentProject("clothing eshop")}
          >
            Clothing eshop
          </button>
        </div>
        {currentProject === "gaming webshop" ? (
          <ProjectTab
            projectImage={"gamingEshop.png"}
            projectDescription={
              "A gaming webshop demo,showcasing the products and the brand itself"
            }
            projectDemo={"https://kjbrian9.github.io/gaming-webapp/"}
            projectGitHub={"https://github.com/kjbrian9/gaming-webapp"}
          ></ProjectTab>
        ) : (
          <></>
        )}
        {currentProject === "bachelors thesis project" ? (
          <ProjectTab
            projectImage={"bachelorsProgram.png"}
            projectDescription={
              "My bachelors thesis program focused on gathering information about GitHub repositories and evaluation these informationsf"
            }
            projectGitHub={"https://github.com/kjbrian9/Bachelors-program"}
          ></ProjectTab>
        ) : (
          <></>
        )}
        {currentProject === "youtube front page" ? (
          <ProjectTab
            projectImage={"Youtube.png"}
            projectDescription={
              "Replication of the Youtube main-page  using css and html only "
            }
            projectGitHub={"https://github.com/kjbrian9/YouTube-mainpage"}
          ></ProjectTab>
        ) : (
          <></>
        )}
        {currentProject === "clothing eshop" ? (
          <ProjectTab
            projectImage={"ClothingEshop.png"}
            projectDescription={
              "My bachelors thesis program focused on gathering information about GitHub repositories and evaluation these informationsf"
            }
            projectGitHub={"https://github.com/kjbrian9/Bachelors-program"}
          ></ProjectTab>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ProjectsPage;

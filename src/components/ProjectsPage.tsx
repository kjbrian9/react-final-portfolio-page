import "../styles/ProjectsPage.css";
import ProjectTab from "./ProjectTab";
import { useState } from "react";

function ProjectsPage() {
  const [currentProject, setCurrentProject] = useState("clothing eshop");
  return (
    <div className="projects-section" id="projectsSection">
      <div className="projects-page-title">Projects</div>
      <div className="projects-div">
        <div className="projects-buttons-div">
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
          <button
            className={
              currentProject === "fullstack task manager"
                ? "active-project-button"
                : "project-button"
            }
            onClick={() => setCurrentProject("fullstack task manager")}
          >
            Todo maker
          </button>
          <button
            className={
              currentProject === "gaming eshop"
                ? "active-project-button"
                : "project-button"
            }
            onClick={() => setCurrentProject("gaming eshop")}
          >
            Gaming eshop
          </button>

          <button
            className={
              currentProject === "bachelors project"
                ? "active-project-button"
                : "project-button"
            }
            onClick={() => setCurrentProject("bachelors project")}
          >
            Bachelors project
          </button>
          <button
            className={
              currentProject === "youtube front page"
                ? "active-project-button"
                : "project-button"
            }
            onClick={() => setCurrentProject("youtube front page")}
          >
            Youtube page
          </button>
        </div>
        {currentProject === "fullstack task manager" ? (
          <ProjectTab
            projectImage={"ListFlow.png"}
            projectDescription={`A fullstack todo maker webpage. The frontend is made via CSS, HTML and JavaScript, and the backend 
               uses PHP and mySQL.
              `}
            projectGitHub={"https://github.com/kjbrian9/TaskManager"}
          ></ProjectTab>
        ) : (
          <></>
        )}
        {currentProject === "gaming eshop" ? (
          <ProjectTab
            projectImage={"gamingEshop.png"}
            projectDescription={
              "A gaming webshop demo,showcasing the products and the brand itself. The page is responsive"
            }
            projectDemo={"https://kjbrian9.github.io/gaming-webapp/"}
            projectGitHub={"https://github.com/kjbrian9/gaming-webapp"}
          ></ProjectTab>
        ) : (
          <></>
        )}
        {currentProject === "bachelors project" ? (
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
              "Replication of the Youtube main-page  using CSS and HTML only, the page is non responsive "
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
              "A clothing eshop demo,showcasing the products and the brand itself. The page is responsive"
            }
            projectGitHub={"https://github.com/kjbrian9/clothing-eshop"}
            projectDemo={"https://kjbrian9.github.io/clothing-eshop/"}
          ></ProjectTab>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ProjectsPage;

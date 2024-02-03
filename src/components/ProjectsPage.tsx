import "../styles/ProjectsPage.css";

function ProjectsPage() {
  return (
    <div className="projects-section" id="projectsSection">
      <div className="projects-page-title">Projects</div>
      <div className="projects-div">
        <div className="project-image-div">
          <img className="project-image" src="./images/gamingEshop.png"></img>
        </div>
        <div className="projects-buttons-div">
          <button className="project-button">Premium gaming shop</button>
          <button className="project-button">Bachelors thesis project</button>
          <button className="project-button">Youtube webpage</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;

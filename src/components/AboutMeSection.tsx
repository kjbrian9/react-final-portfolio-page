import Card from "../components/card";
import Logo from "./logo";

function AboutMeSection() {
  return (
    <div className="about-me-section" id="aboutMeSection">
      <p className="about-me-section-title">About me</p>
      <div className="about-me-cards">
        <div>
          <Card>
            <p className="objective-title">CAREER OBJECTIVE</p>
            <p className="info-text">
              Computer Science Graduate, Seeking Entry-Level Opportunities in
              Software Development
            </p>
          </Card>
          <Card>
            <p className="objective-title">Brian Julius Kiss</p>
            <p className="info-text">
              brian.julius.k@gmail.com<br></br>Košice Slovakia<br></br> 11.
              September 2000
            </p>
          </Card>
          <Card>
            <Logo
              logoLink="https://www.linkedin.com/in/brian-julius-kiss-256680280/"
              logoClass="logo-small"
              logoImage="linkedin-logo.webp"
            ></Logo>
            <Logo
              logoLink="https://github.com/kjbrian9"
              logoClass="logo-small github-inverted"
              logoImage="github-logo.png"
            ></Logo>
          </Card>
        </div>
        <div>
          <Card>
            <p className="objective-title">LANGUAGES</p>
            <p className="info-text">
              English(C1), Slovak(native), Hungarian(native), Czech(B2)
            </p>
          </Card>
          <Card>
            <p className="objective-title">Education</p>
            <p className="info-text">
              Bachelor of Computer Science<br></br> Technical University of
              Kosice
            </p>
          </Card>
          <Card>
            <p className="objective-title">SKILLS</p>
            <p className="info-text">
              Intermediate: C#, JavaScript, HTML, CSS <br></br>Familiar: Java,
              Python, PostgreSQL
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;

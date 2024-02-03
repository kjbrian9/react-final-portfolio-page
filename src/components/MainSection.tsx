import "../styles/MainSection.css";
import useSound from "use-sound";
import Circle from "./Circle";
import Logo from "./logo";

function MainSection() {
  const video = require("./MainSectionVideo.mp4");
  const video2 = require("./MainSectionVideo2.mp4");
  return (
    <div className="page-section" id="mainSection">
      <div className="home-section-main-div">
        <video className="home-page-video" loop autoPlay muted playsInline>
          <source src={video} type="video/mp4" />
        </video>
        <div className="image-border-div">
          <img src="./images/me2.JPG" className="me-image" alt="Me"></img>

          <Circle scale={"1.1"} strokeDash={30} animationClass={"svg-circle-opposite"}></Circle>
          <Circle scale={"1.2"} strokeDash={20} animationClass={"svg-circle"}></Circle>
          <Circle scale={"1.3"} strokeDash={22} animationClass={"svg-circle-opposite"}></Circle>
          <Circle scale={"1.4"} strokeDash={15} animationClass={"svg-circle"}></Circle>
        </div>
        <div className="goal-logo-div">
          <p className="my-name">Brian Julius Kiss</p>
          <p className="goal-text">
            Computer Science Graduate, seeking entry-level opportunities in software development
          </p>

          <div className="logo-div">
            <Logo
              logoLink="https://www.linkedin.com/in/brian-julius-kiss-256680280/"
              logoClass="logo-small"
              logoImage="./images/linkedin-logo.webp"
            ></Logo>
            <Logo
              logoLink="https://github.com/kjbrian9"
              logoClass="logo-small github-inverted"
              logoImage="./images/github-logo.png"
            ></Logo>
          </div>
        </div>
      </div>
      {/*
      <div className="lighstaber-div">
        <img className="lightsaber" src="./images/lightsaber.webp"></img>
        <div
          onMouseEnter={() => {
            play();
            console.log("played");
          }}
          className="lightsaber-blade"
        >
          hello
        </div>
      </div>
        */}
    </div>
  );
}

export default MainSection;

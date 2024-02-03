import React, { useState } from "react";
import Logo from "./components/logo";
import Header from "./components/Header";
import "./styles/global.css";
import "./styles/heroPage.css";
import "./styles/aboutMeSection.css";
import MainSection from "./components/MainSection";
import AboutMeSection from "./components/AboutMeSection";
import ProjectsPage from "./components/ProjectsPage";
import MobileHeader from "./components/MobileHeader";
import ContactsSection from "./components/ContactsSection";

function App() {
  const [getScreenWidth, setScreenWidth] = useState(window.innerWidth);

  window.addEventListener("resize", handleResize);
  function handleResize() {
    setScreenWidth(window.innerWidth);
  }

  return (
    <>
      {getScreenWidth > 740 ? <Header></Header> : <MobileHeader></MobileHeader>}
      <div className="page-content">
        <MainSection></MainSection>
        <AboutMeSection></AboutMeSection>
        <ProjectsPage></ProjectsPage>
        <ContactsSection></ContactsSection>
      </div>
    </>
  );
}

export default App;

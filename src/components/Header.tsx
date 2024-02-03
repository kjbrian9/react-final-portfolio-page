import "../styles/Header.css";

const scrollToTarget = (targetId: string) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    // Use scrollIntoView to scroll to the target element
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};
function Header() {
  return (
    <header className="header">
      <nav style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <ul className="header-tabs-container">
          <li className="header-tab" onClick={() => scrollToTarget("mainSection")}>
            Home
          </li>
          <li className="header-tab" onClick={() => scrollToTarget("aboutMeSection")}>
            About me
          </li>
          <li className="header-tab" onClick={() => scrollToTarget("projectsSection")}>
            Projects
          </li>
          <li className="header-tab">Contacts</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

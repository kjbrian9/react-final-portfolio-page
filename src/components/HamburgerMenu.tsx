import "../styles/Header.css";

const scrollToTarget = (targetId: string) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    // Use scrollIntoView to scroll to the target element
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};

interface Props {
  visibilityClass: string;
}

function HamburgerMenu({ visibilityClass }: Props) {
  return (
    <div className={"hamburger-menu-div " + visibilityClass}>
      <ul>
        <li>
          <div className="mobile-header-tab" onClick={() => scrollToTarget("mainSection")}>
            Home
          </div>
        </li>

        <li>
          <div className="mobile-header-tab" onClick={() => scrollToTarget("aboutMeSection")}>
            About me
          </div>
        </li>
        <li>
          <div className="mobile-header-tab" onClick={() => scrollToTarget("projectsSection")}>
            Projects
          </div>
        </li>
        <li className="header-tab" onClick={() => scrollToTarget("contactsSection")}>
          Contacts
        </li>
      </ul>
    </div>
  );
}

export default HamburgerMenu;

import { useState, useEffect } from "react";
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
  const [isVisible, setVisible] = useState("");

  // Sync the internal state with the visibilityClass prop
  useEffect(() => {
    setVisible(visibilityClass);
  }, [visibilityClass]); // Only re-run when visibilityClass changes

  return (
    <div className={"hamburger-menu-div " + isVisible}>
      <ul>
        <li>
          <div
            className="mobile-header-tab"
            onClick={() => {
              scrollToTarget("mainSection");
              setVisible("invisible");
            }}
          >
            Home
          </div>
        </li>

        <li>
          <div
            className="mobile-header-tab"
            onClick={() => {
              scrollToTarget("aboutMeSection");
              setVisible("invisible");
            }}
          >
            About me
          </div>
        </li>
        <li>
          <div
            className="mobile-header-tab"
            onClick={() => {
              scrollToTarget("projectsSection");
              setVisible("invisible");
            }}
          >
            Projects
          </div>
        </li>
        <li
          className="header-tab"
          onClick={() => {
            scrollToTarget("contactsSection");
            setVisible("invisible");
          }}
        >
          Contacts
        </li>
      </ul>
    </div>
  );
}

export default HamburgerMenu;

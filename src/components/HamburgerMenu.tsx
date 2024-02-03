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
          <div className="page-tab" onClick={() => scrollToTarget("mainSection")}>
            Main Section
          </div>
        </li>

        <li>
          <div className="page-tab" onClick={() => scrollToTarget("mainSection")}>
            About me
          </div>
        </li>
        <li>
          <div className="page-tab" onClick={() => scrollToTarget("mainSection")}>
            Projects
          </div>
        </li>
      </ul>
    </div>
  );
}

export default HamburgerMenu;

import "../styles/global.css";
import "../styles/Header.css";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
function MobileHeader() {
  const [isHamburgerMenuVisible, setHamburgerMenuVisible] = useState("start");

  return (
    <>
      <HamburgerMenu visibilityClass={isHamburgerMenuVisible} />

      <header>
        <nav className="mobile-header">
          <div className="header__right-side-div">
            <ul>
              <li>
                <img
                  src={`${process.env.PUBLIC_URL}/images/HamburgerMenu.svg`}
                  className="hamburger-menu-image"
                  onClick={() => {
                    isHamburgerMenuVisible === "visible"
                      ? setHamburgerMenuVisible("invisible")
                      : setHamburgerMenuVisible("visible");
                  }}
                ></img>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default MobileHeader;

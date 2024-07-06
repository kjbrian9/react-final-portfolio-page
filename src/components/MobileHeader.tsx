import "../styles/global.css";
import "../styles/Header.css";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import HamburgerMenuImg from "../images/HamburgerMenu.svg";
function MobileHeader() {
  const [isHamburgerMenuVisible, setHamburgerMenuVisible] = useState(false);

  return (
    <>
      <HamburgerMenu visibilityClass={isHamburgerMenuVisible === true ? "visible" : "invisible"} />

      <header>
        <nav className="mobile-header">
          <div className="header__right-side-div">
            <ul>
              <li>
                <img
                  src={HamburgerMenuImg}
                  className="hamburger-menu-image"
                  onClick={() => {
                    isHamburgerMenuVisible === false ? setHamburgerMenuVisible(true) : setHamburgerMenuVisible(false);
                    console.log("hello");
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

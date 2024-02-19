import Logo from "./logo";
import "../styles/ContactsSection.css";

import gitHubLogo from "../images/github-logo.png";
import linkedInLogo from "../images/linkedin-logo.webp";
import locationLogo from "../images/LocationLogo.svg";

function ContactsSection() {
  return (
    <div className="contacts-div" id="contactsSection">
      <div>
        <div className="title-div">Contacts</div>
        <div>
          <Logo
            logoLink="https://www.linkedin.com/in/brian-julius-kiss-256680280/"
            logoClass="logo-small"
            logoImage={linkedInLogo}
          ></Logo>
          <Logo logoLink="https://github.com/kjbrian9" logoClass="logo-small" logoImage={gitHubLogo}></Logo>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img className="location-logo" src={locationLogo}></img>
          <p
            className="
              location"
          >
            Košice, Slovakia
          </p>
        </div>
        <a href="mailto:brian.julius.k@gmail.com" className="email-text">
          brian.julius.k@gmail.com
        </a>
      </div>
    </div>
  );
}

export default ContactsSection;

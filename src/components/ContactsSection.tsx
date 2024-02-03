import Logo from "./logo";
import "../styles/ContactsSection.css";

function ContactsSection() {
  return (
    <div className="contacts-div" id="contactsSection">
      <div>
        <div className="title-div">Contacts</div>
        <div>
          <Logo
            logoLink="https://www.linkedin.com/in/brian-julius-kiss-256680280/"
            logoClass="logo-small"
            logoImage="./images/linkedin-logo.webp"
          ></Logo>
          <Logo
            logoLink="https://github.com/kjbrian9"
            logoClass="logo-small"
            logoImage="./images/github-logo.png "
          ></Logo>
        </div>
        <p
          className="
              location"
        >
          Košice, Slovakia
        </p>

        <a href="mailto:brian.julius.k@gmail.com" className="email-text">
          brian.julius.k@gmail.com
        </a>
      </div>
    </div>
  );
}

export default ContactsSection;

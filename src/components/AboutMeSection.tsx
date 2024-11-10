import Card from "../components/card";
import Logo from "./logo";
import { motion } from "framer-motion";

function AboutMeSection() {
  return (
    <div className="about-me-section" id="aboutMeSection">
      <p className="about-me-section-title">About me</p>
      <div className="about-me-cards">
        <div>
          <motion.div
            whileInView={{ animation: "slide-in-left 1s forwards" }}
            viewport={{ once: true }}
          >
            <Card>
              <p className="objective-title">CAREER OBJECTIVE</p>
              <p className="info-text">
                Computer Science Graduate, Seeking Entry-Level Opportunities in
                Software Development
              </p>
            </Card>
          </motion.div>
          <motion.div
            whileInView={{ animation: "slide-in-left 2s" }}
            viewport={{ once: true }}
          >
            <Card>
              <p className="objective-title">Brian Julius Kiss</p>
              <p className="info-text">
                brian.julius.k@gmail.com<br></br>Košice Slovakia<br></br> 11.
                September 2000
              </p>
            </Card>
          </motion.div>
          <motion.div
            whileInView={{ animation: "slide-in-left 3s" }}
            viewport={{ once: true }}
          >
            <Card>
              <Logo
                logoLink="https://www.linkedin.com/in/brian-julius-kiss-256680280/"
                logoClass="logo-small"
                logoImage="linkedin-logo.webp"
              ></Logo>
              <Logo
                logoLink="https://github.com/kjbrian9"
                logoClass="logo-small github-inverted"
                logoImage="github-logo.png"
              ></Logo>
            </Card>
          </motion.div>
        </div>
        <div>
          <motion.div
            whileInView={{ animation: "slide-in-right 1s" }}
            viewport={{ once: true }}
          >
            <Card>
              <p className="objective-title">LANGUAGES</p>
              <p className="info-text">
                English(C1), Slovak(native), Hungarian(native), Czech(B2)
              </p>
            </Card>
          </motion.div>
          <motion.div
            whileInView={{ animation: "slide-in-right 2s" }}
            viewport={{ once: true }}
          >
            <Card>
              <p className="objective-title">Education</p>
              <p className="info-text">
                Bachelor of Computer Science<br></br> Technical University of
                Kosice
              </p>
            </Card>
          </motion.div>
          <motion.div
            whileInView={{ animation: "slide-in-right 3s" }}
            viewport={{ once: true }}
          >
            <Card>
              <p className="objective-title">SKILLS</p>
              <p className="info-text">
                Intermediate: C#, JavaScript, HTML, CSS <br></br>Familiar: Java,
                Python, PostgreSQL
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;

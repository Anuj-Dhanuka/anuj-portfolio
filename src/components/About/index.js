import { TiHtml5 } from "react-icons/ti";
import { SiCss3, SiExpress, SiSqlite } from "react-icons/si";
import { FaBootstrap, FaNodeJs } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { BiLogoReact, BiLogoPython } from "react-icons/bi";

import { Link } from "react-router-dom";

import NavBar from "../NavBar";
import LandingPage2 from "../LandingPage2";
import Footer from "../Footer";

import "./index.css";

const About = () => {
  console.log("About");
  return (
    <div>
      <NavBar />
      <LandingPage2 heading="ABOUT" text="Im a friendly Full Stack developer" />
      <div className="about-bg-container">
        <h1 className="about-main-heading">Who Am I</h1>
        <div className="about-inner-container">
          <div className="about-right-sm-container">
            <div className="about-profile-img-container">
              <img
                src="https://i.ibb.co/XpNbJFs/IMG-20231022-142209.png"
                alt="profile"
                className="about-sm-profile-image"
              />
            </div>
          </div>
          <div className="about-left-container">
            <p className="about-para-1">
              👋 Hello there! I'm a passionate and dedicated Full Stack Web
              Developer. With a love for turning ideas into functional and
              user-friendly digital experiences, I thrive on creating solutions
              that make an impact.
            </p>
            <p className="about-para-1">
              Constantly learning and adapting to new technologies to stay at
              the forefront of the ever-evolving web development landscape.
            </p>
            <p className="about-para-1">
              Completed my Bachelor's from Satya Institute of Technology and
              Management.
            </p>
            <Link to="/contact">
              <button type="button" className="about-btn">
                Contact
              </button>
            </Link>
          </div>
          <div className="about-right-container">
            <div className="about-profile-img-container">
              <img
                src="https://i.ibb.co/XpNbJFs/IMG-20231022-142209.png"
                alt="profile"
                className="about-profile-pic"
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="about-main-heading about-text-decoration">SKILLS</h1>
          <div className="about-technology-container">
            <h3>Frontend:</h3>
            <ul className="about-skills-ul-container">
              <li className="html-about-skill-container">
                <TiHtml5 className="about-skill-icon" />
                <p className="about-skill-name">HTML</p>
              </li>

              <li className="html-about-skill-container">
                <SiCss3 className="about-skill-icon" />
                <p className="about-skill-name">CSS</p>
              </li>

              <li className="html-about-skill-container">
                <FaBootstrap className="about-skill-icon" />
                <p className="about-skill-name">Bootstrap</p>
              </li>

              <li className="html-about-skill-container">
                <DiJavascript1 className="about-skill-icon" />
                <p className="about-skill-name">JavaScript</p>
              </li>

              <li className="html-about-skill-container">
                <BiLogoReact className="about-skill-icon" />
                <p className="about-skill-name">React.Js</p>
              </li>
            </ul>

            <h3>Backend:</h3>
            <ul className="about-skills-ul-container">
              <li className="html-about-skill-container">
                <BiLogoPython className="about-skill-icon" />
                <p className="about-skill-name">Python</p>
              </li>

              <li className="html-about-skill-container">
                <SiExpress className="about-skill-icon" />
                <p className="about-skill-name">Express</p>
              </li>

              <li className="html-about-skill-container">
                <FaNodeJs className="about-skill-icon" />
                <p className="about-skill-name">Node.Js</p>
              </li>
            </ul>

            <h3>Databases:</h3>
            <ul className="about-skills-ul-container">
              <li className="html-about-skill-container">
                <SiSqlite className="about-skill-icon" />
                <p className="about-skill-name"> SQLite</p>
              </li>
            </ul>
          </div>
        </div>
        <h1 className="about-main-heading">OTHER SKILLS</h1>
        <p className="about-other-skill-para">
          Apart from this, I am also a chess player and have had the honor of
          serving as the captain of my college team in university games.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;

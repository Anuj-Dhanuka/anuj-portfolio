import { Link } from "react-router-dom";

import "./index.css";

import Button from "./styledComponent";

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="landing-mask">
        <img
          src="http://www.intertech.ps/images1/home_sec.jpg"
          alt="landing view"
          className="landing-image"
        />
      </div>
      <div className="landing-content">
        <h1 className="landing-page-description">
          Hey there! I'm Anuj Dhanuka, a passionate and detail-oriented
          full-stack web developer with a knack for turning ideas into powerful,
          user-friendly applications. Welcome to my corner of the web, where
          code meets creativity.
        </h1>
        <div>
          <Link to="/projects">
            <Button type="button">Projects</Button>
          </Link>
          <Link to="/contact">
            <Button type="button" contact>
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

import { Link } from "react-router-dom";

import "./index.css";

import Button from "./styledComponent";

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="landing-mask">
        <img
          src="https://i0.wp.com/levashove.ru/wp-content/uploads/2018/11/dark-wallpapers.jpg?fit=1680%2C840&ssl=1"
          alt="landingView"
          className="landing-image"
        />
      </div>
      <div className="landing-content">
        <p className="landing-page-para">
          Welcome to Anuj's Web Development Portfolio!
        </p>
        <h1 className="landing-page-description">
          I am a passionate and results-driven web developer seeking exciting
          opportunities in the tech industry.
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

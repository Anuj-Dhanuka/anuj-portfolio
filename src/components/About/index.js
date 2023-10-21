import NavBar from "../NavBar";
import LandingPage2 from "../LandingPage2";

const About = () => {
  console.log("About");
  return (
    <div>
      <NavBar />
      <LandingPage2 heading="ABOUT" text="Im a friendly Full-Stack_developer" />
    </div>
  );
};

export default About;

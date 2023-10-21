import "./index.css";

const LandingPage2 = (props) => {
  const { heading, text } = props;
  return (
    <div className="lp2-bg-container">
      <div className="lp2-description-container">
        <h1 className="lp2-heading">{heading}</h1>
        <p className="lp2-para">{text}</p>
      </div>
    </div>
  );
};

export default LandingPage2;

import "./index.css";
import { NavLink } from "react-router-dom";

const ProjectCard = (props) => {
  const { projectListData } = props;
  const {
    title,
    imgUrl,
    description,
    technologyUsed,
    webLink,
  } = projectListData;
  return (
    <li className="project-card">
      <img src={imgUrl} alt={title} className="project-card-img" />
      <h2 className="project-card-title">{title}</h2>
      <div className="project-details">
        <div className="project-description-text-container">
          <p className="project-description-text">{description}</p>
        </div>
        <div className="project-technology-text-container">
          <p className="project-description-text">
            <span className="projects-technology-span">Technologies used:</span>{" "}
            {technologyUsed}
          </p>
        </div>

        <NavLink to={webLink} target="_blank">
          <button type="button" className="project-navigation-btn">
            View
          </button>
        </NavLink>
      </div>
    </li>
  );
};

export default ProjectCard;

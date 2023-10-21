import NavBar from "../NavBar";
import LandingPage2 from "../LandingPage2";
import ProjectCard from "../ProjectCard";
import Footer from "../Footer";

import "./index.css";

const projectListData = [
  {
    id: 1,
    title: "Food Munch",
    imgUrl: "https://i.ibb.co/Tv8Kvkd/food-munch-theme-page.png",
    description:
      "A fully responsive website that offers a comprehensive list of food items and detailed information about each item, Designed to provide the best user experience with HTML structure elements and Bootstrap components, Implemented products to give customers a clear view of the food items.",
    technologyUsed: "HTML, CSS, Bootstrap",
    webLink: "https://anujfoodmunch.ccbp.tech/",
  },
  {
    id: 2,
    title: "Todos Application",
    imgUrl: "https://i.ibb.co/HGY36GH/todo-img.png",
    description:
      "Developed persistent todo application with CRUD operations to track list of tasks,  Implemented todo crud operations by using JavaScript event listeners and updated UI dynamically by using JavaScript DOM operations,  Used Arrays, Objects and their methods during todolist CRUD Operations, Persisted todo list state on page reloads using local storage methods",
    technologyUsed: " HTML, CSS, JS, Bootstrap",
    webLink: "https://anujtodo.ccbp.tech/",
  },
  {
    id: 3,
    title: "Jobby App",
    imgUrl: "https://i.ibb.co/TR9VmN4/jobby-app-img.png",
    description:
      "Brought to life an all-encompassing job search platform, Jobby App, Created pages for Login, Home, Jobs, and Job item details with React components, form inputs, and event handlers,  Secured user information with JWT tokens, REST API calls, and local storage,  Utilized React Router for protected routes and persisted login state.",
    technologyUsed:
      "React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token, Authorization, Authentication",
    webLink: "https://anujjobbyapp.ccbp.tech/login",
  },
];

const Projects = () => {
  console.log("Projects");
  return (
    <div>
      <NavBar />
      <LandingPage2 heading="PROJECTS" text="Some of my most recent works" />
      <div className="project-bg-container">
        <h1 className="project-main-heading">Projects</h1>
        <ul className="project-ul-container">
          {projectListData.map((eachItem) => (
            <ProjectCard projectListData={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;

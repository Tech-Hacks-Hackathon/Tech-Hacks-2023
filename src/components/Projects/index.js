import { Link, withRouter } from "react-router-dom";
import ProjectItem from "../ProjectItem";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../Header";
import { v4 as uuidV4 } from "uuid";

import "./index.css";

const projectList = [
  {
    projectId: uuidV4(),
    projectName: "Food Munch",
    Description:
      "A responsive website that lets you browse through a wide range of food items with ease. Built with a mobile-first approach, this website featuresHTML structure elements and Bootstrap components to ensure  seamless navigation. Get a clear view of the food items with product videos, available at your fingertips.",
    TechnologiesUsed: ": HTML, CSS, Bootstrap",
    Url: "https://shiva05.ccbp.tech/",
  },

  {
    projectId: uuidV4(),
    projectName: "Wikipedia Search Application",
    Description:
      "A custom wikipedia search application that provides a simplified and intuitive way for users to access and view relevant information. With the ability to easily search for and view curated results, users can dive deeper into their interests with just a click.  Streamlined search results with HTML list elements, styled for a modern and  ",
    TechnologiesUsed: "HTML, CSS, JS, REST API Calls, Bootstrap",
    Url: "https://srinivas0.ccbp.tech",
  },

  {
    projectId: uuidV4(),
    projectName: "Countries Search",
    Description:
      "A comprehensive country search tool, providing instant access to the world s countries and their populations.  Responsive design through the integration of Bootstrap and CSS with asynchronous data retrieval through REST API calls.  Effortless search functionality through JavaScript event listeners, input elements and Array filter methods.",
    TechnologiesUsed: " HTML, CSS, JS, REST API Calls, Bootstrap",
    Url: "https://srinivas10.ccbp.tech",
  },

  {
    projectId: uuidV4(),
    projectName: "Todos Application",
    Description: "Developed persistent todo application with CRUD operations",
    TechnologiesUsed: "HTML, CSS, JS, Bootstrap",
    Url: "https://srinivas28.ccbp.tech",
  },
];
const Projects = () => {
  const jwtToken = Cookies.get("jwt_token");

  if (jwtToken === undefined) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <Header />
      <ul className="projectList">
        <h1>List of Projects</h1>
        {projectList.map((eachItem) => (
          <ProjectItem eachItem={eachItem} key={eachItem.projectId} />
        ))}
      </ul>
    </div>
  );
};
export default withRouter(Projects);

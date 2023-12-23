import { withRouter } from "react-router-dom";
import "./index.css";

const ProjectItem = (props) => {
  const { eachItem } = props;
  const { projectName, Description, TechnologiesUsed, Url } = eachItem;
  const feedBackButton = () => {
    const { history } = props;
    history.push("/feedback");
  };
  return (
    <li className="projectCardItem">
      <div className="rightHandContainer">
        <img
          src="https://res.cloudinary.com/da50tzlgo/image/upload/v1703279554/Screenshot_2023-12-23_024209_rxofub.png"
          alt="right arrow"
          className="rightButton"
        />
        <p>
          <a href={Url} target="_blank">
            {projectName}
          </a>
        </p>
      </div>
      <p>{Description}</p>
      <div className="technologyContainer">
        <p>
          <span className="technology">Technologies used:</span>
          {TechnologiesUsed}
        </p>

        <button type="button" className="button" onClick={feedBackButton}>
          Feedback
        </button>
      </div>
    </li>
  );
};
export default withRouter(ProjectItem);

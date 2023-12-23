import { withRouter } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import FeedBackCard from "../FeedBackCard";
import Header from "../Header";
import "./index.css";

const feedBackList = [
  {
    id: uuidV4(),
    name: "John",
    date: "21-11-2023",
    user_image_url:
      "https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png",
    feedback1:
      "Add more context to project descriptions for a comprehensive understanding.",
  },

  {
    id: uuidV4(),
    name: "Grace",
    date: "31-12-2023",
    user_image_url:
      "https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png",
    feedback1: "Consider adding a contact form for streamlined communication",
  },
  {
    id: uuidV4(),
    name: "shiva",
    date: "24-08-2023",
    user_image_url:
      "https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png",
    feedback1: "Test your website on various devices to ensure responsiveness.",
  },
  {
    id: uuidV4(),
    name: "Nikhil",
    date: "16-07-2023",
    user_image_url:
      "https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png",
    feedback1:
      "Your project showcase demonstrates a high level of professionalism.",
  },
  {
    id: uuidV4(),
    name: "Christy",
    date: "22-02-2023",
    user_image_url:
      "https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png",
    feedback1:
      "Your project portfolio effectively highlights the range and depth of your skills.",
  },
  {
    id: uuidV4(),
    name: "Vikram",
    date: "24-11-2023",
    user_image_url:
      "https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png",
    feedback1:
      "Think about incorporating more real-world applications of your project.",
  },
  {
    id: uuidV4(),
    name: "Vijay",
    date: "26-08-2023",
    user_image_url:
      "https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png",
    feedback1:
      "The inclusion of client testimonials adds credibility to your work.",
  },
  {
    id: uuidV4(),
    name: "Arjun",
    date: "`4-09-2023",
    user_image_url:
      "https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png",
    feedback1:
      "Creative and visually striking design portfolio. Provide detailed descriptions of the creative process for each project.",
  },
  {
    id: uuidV4(),
    name: "Ram",
    date: "`14-10-2023",
    user_image_url:
      "https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png",
    feedback1:
      "Creative and visually striking design portfolio. Provide detailed descriptions of the creative process for each project.",
  },
];
const FeedBackSection = (props) => {
  const shuffledList = feedBackList.sort(() => Math.random() - 0.5);
  const backButton = () => {
    const { history } = props;
    history.push("/project");
  };
  const jwtToken = Cookies.get("jwt_token");

  if (jwtToken === undefined) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <Header />
      <div className="FeedbackContainer">
        <div className="fed">
          <h1 className="feedBackHeading">Feedback</h1>
          <div className="backButton">
            <button type="button" class="back-button" onClick={backButton}>
              back
            </button>
          </div>
        </div>
        <ul className="bg-container">
          {shuffledList.map((eachItem) => (
            <FeedBackCard eachItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default withRouter(FeedBackSection);

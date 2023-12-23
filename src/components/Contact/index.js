import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../Header";
import "./index.css";

const Contact = () => {
  const jwtToken = Cookies.get("jwt_token");

  if (jwtToken === undefined) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="about-us-container">
      <Header />
      <div className="heading3">
        <h1> About us</h1>
      </div>
      <p className="paragraph">
        Welcome to our collaborative platform (FLY HIGH) where students and
        teachers come together for a unique learning experience. Engage in
        projects, discussions, and receive personalized feedback to elevate you
        r academic journey. Projects on our platform range from innovative
        endeavors to academic challenges, providing students with diverse
        opportunities to collaborate and apply their skills. The collaborative
        nature of the platform encourages students to share their ideas, work
        collectively on projects, and benefit from the collective wisdom of
        their peers and teachers.
      </p>
    </div>
  );
};
export default Contact;

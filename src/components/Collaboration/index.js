import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../Header";
import "./index.css";

const Collaboration = (props) => {
  const join = () => {
    const { history } = props;
    history.push("/collab");
  };
  const jwtToken = Cookies.get("jwt_token");

  if (jwtToken === undefined) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <Header />
      <div className="collaboration">
        <div className="collabHeading">
          <h1>Teamwork makes the dream work</h1>
          <p className="para">
            Teamwork makes the dream work by leveraging collective strengths and
            fostering collaboration for shared success.
          </p>
          <div>
            <button type="button" className="button1" onClick={join}>
              Join Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Collaboration);

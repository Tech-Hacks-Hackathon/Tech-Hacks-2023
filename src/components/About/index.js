import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../Header";
import "./index.css";

const About = () => {
  const jwtToken = Cookies.get("jwt_token");

  if (jwtToken === undefined) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <Header />
      <div className="follow-us-section">
        <h1 className="follow-us-section-heading">Follow Us</h1>
      </div>
      <div className="icon-Container">
        <div className="follow-us-icon-container">
          <img
            src="https://res.cloudinary.com/da50tzlgo/image/upload/v1703304983/Screenshot_2023-12-23_094602_sl9la8.png"
            alt="insta"
            className="follow_us_logo"
          />
        </div>
        <div className="follow-us-icon-container">
          <img
            src="https://res.cloudinary.com/da50tzlgo/image/upload/v1703305081/Screenshot_2023-12-23_094741_mb8cop.png"
            alt="facebook"
            className="follow_us_logo"
          />
        </div>
        <div className="follow-us-icon-container">
          <img
            src="https://res.cloudinary.com/da50tzlgo/image/upload/v1703306171/Screenshot_2023-12-23_100552_i6dmoh.png"
            alt="X"
            className="follow_us_logo X"
          />
        </div>
      </div>
      <div className="footer-section">
        <div className="center">
          <img
            src="https://res.cloudinary.com/dheax6rsb/image/upload/v1703245107/IMG_20231222_165258_nzmhwy.jpg"
            className="fly-high-logo"
          />
          <h1 className="footer-section-mail-id">admin@flyhigh.com</h1>
          <p className="footer-section-address">
            123 Narsapur,Medak ,Telangana, India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

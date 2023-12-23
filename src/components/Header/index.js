import { Link, withRouter } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const Header = (props) => {
  console.log(1);
  const onSuccessLogout = () => {
    Cookies.remove("jwt_token");
    const { history } = props;
    history.push("/login");
  };
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <h1>Fly High</h1>
        <ul className="nav-menu">
          <Link to="/" className="nav-link">
            <li>Home</li>
          </Link>
          <Link to="/project" className="nav-link">
            <li>Projects</li>
          </Link>
          <Link to="/chat" className="nav-link">
            <li>Chat</li>
          </Link>

          <Link to="/collaboration" className="nav-link">
            <li>Collaboration</li>
          </Link>
          <Link to="/about" className="nav-link">
            <li>About</li>
          </Link>
          <Link to="/contact" className="nav-link">
            <li>Contact</li>
          </Link>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onSuccessLogout}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
export default withRouter(Header);

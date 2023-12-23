import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../Header";
import "./index.css";

const Collab = () => {
  const jwtToken = Cookies.get("jwt_token");

  if (jwtToken === undefined) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <Header />
      <div class="card-container_1">
        <div class="cards1">
          <h1> Project Dashboard</h1>
          <p>
            Students can create profiles with their skills, interests, and a
            brief bio. <br />
            Easily view and connect with other users based on shared interests.{" "}
          </p>
        </div>
        <div class="cards1">
          <h1> Discussion Forum</h1>
          <p>
            Forum threads for each project or topic.
            <br />
            Simple commenting system for easy communication and collaboration..{" "}
          </p>
        </div>
        <div class="cards1">
          <h1> File Sharing</h1>
          <p>
            Easy-to-use file upload/download feature for sharing project files.
            Integration with cloud storage services for seamless file access..{" "}
          </p>
        </div>
        <div class="cards1">
          <h1> Task Management</h1>
          <p>
            Simple task boards for organizing project tasks. Drag-and-drop
            functionality for easy task prioritization.{" "}
          </p>
        </div>
        <div class="cards1">
          <h1> Collaborative Editing</h1>
          <p>
            Integrated code editor for real-time collaboration on coding
            projects. Support for collaborative editing of documents and
            presentations.{" "}
          </p>
        </div>
        <div class="cards1">
          <h1> Notifications</h1>
          <p>
            Personalized notifications for project updates, mentions, and
            messages.\ Option to customize notification preferences.{" "}
          </p>
        </div>
        <div class="cards1">
          <h1> Profile Badges and Achievements</h1>
          <p>
            Badges for completing projects, contributing valuable content, or
            helping peers. Visible achievements on user profiles.{" "}
          </p>
        </div>
        <div class="cards1">
          <h1> Help Center / Documentation</h1>
          <p>
            Accessible help center with FAQs and tutorials. Documentation for
            using various features of the collaboration platform.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Collab;

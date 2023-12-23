import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import { Component } from "react";
import "./index.css";
import Header from "../Header";
class ChatBot extends Component {
  state = { msg: "" };

  setValue = (event) => {
    this.setState({ msg: event.target.value });
  };
  render() {
    const { msg } = this.state;
    console.log(msg);
    const jwtToken = Cookies.get("jwt_token");

    if (jwtToken === undefined) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <Header />
        <div className="chat-bot-container">
          <div class="image">
            <h1 class="heading">Rahul</h1>
            <p class="blue-color">
              Hi Professor! I've been working on my project, and I could use
              some guidance.
            </p>
            <p class="grey-color">
              Hello! Of course, I'm here to help. What's your project about, and
              where are you facing challenges?
            </p>
            <p class="blue-color">
              I'm working on a web development project using React.js. I've
              implemented the basic features, but I'm unsure about the overall
              structure and design.
            </p>
            <p class="grey-color">
              Great to hear about your progress! Let's discuss the project
              structure first. Can you describe how you've organized your
              components?
            </p>
            <p class="blue-color">
              I have separate folders for components, styles, and utilities. But
              I'm not sure if I should further break down components based on
              their functionality.
            </p>
          </div>
          <div className="chat-bot">
            <h1 className="chatbot-heading">Meet your Mentor</h1>
            <img
              className="image1"
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/chatbot-bot-img.png"
            />
            <div className="chat-container"></div>
            <div className="ContainerChat">
              <img
                className="image1"
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/chatbot-boy-img.png"
              />
            </div>
            <div className="Container">
              <div className="inputContainer">
                <input
                  className="user-input"
                  value={msg}
                  onChange={this.setValue}
                />
                <button className="send-msg-btn">
                  <img
                    src="https://res.cloudinary.com/da50tzlgo/image/upload/v1703289137/Screenshot_2023-12-23_052151_qnjryz.png"
                    className="sendButton"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatBot;

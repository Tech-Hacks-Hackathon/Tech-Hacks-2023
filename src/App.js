import { Route, Switch } from "react-router-dom";
import Projects from "./components/Projects";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ChatBot from "./components/ChatBot";
import FeedBackSection from "./components/FeedBackSection";
import NotFound from "./components/NotFound";
import Collaboration from "./components/Collaboration";
import About from "./components/About";

import Resource from "./components/resource";
import Collab from "./components/Collab";
import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/project" component={Projects} />
    <Route exact path="/chat" component={ChatBot} />
    <Route exact path="/collab" component={Collab} />
    <Route exact path="/resource" component={Resource} />
    <Route exact path="/about" component={Contact} />
    <Route exact path="/contact" component={About} />
    <Route exact path="/feedback" component={FeedBackSection} />
    <Route exact path="/collaboration" component={Collaboration} />
    <Route component={NotFound} />
  </Switch>
);
export default App;

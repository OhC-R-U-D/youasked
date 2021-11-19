import React from "react";
import PropTypes from "prop-types";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Page404 from "../pages/404Page";
import AboutUsPage from "../pages/AboutUsPage";
import CommunityGuidelinesPage from "../pages/CommunityGuidelinesPage";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import ProtectedIndex from "../pages/ProtectedIndex";
import QuestionIndex from "../pages/QuestionIndex";
import QuestionNew from "../pages/QuestionNew";
import QuestionShow from "../pages/QuestionShow";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      questions:[],
    }
  }
  questionRead=()=> {
    fetch("/questions")
    .then(response => response.json())
    .then(payload => this.setState({ questions: payload }))
    .catch(errors => console.log("Questions Index Errors:", errors))
  }
  render() {
    return (
      <BrowserRouter>
        <Header {...this.props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutUsPage} />
          <Route path="/error" component={Page404} />
          <Route path="/guidelines" component={CommunityGuidelinesPage} />
          <Route path="/contact" component={Contact} />
          <Route path="/protectedindex" component={ProtectedIndex} />
          <Route path="/questionindex" component={QuestionIndex} />
          <Route path="/questionnew" component={QuestionNew} />
          <Route path="/questionshow" component={QuestionShow} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;

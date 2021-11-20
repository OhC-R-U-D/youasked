import React from "react";
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
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
  }

  componentDidMount() {
    this.questionRead();
  }

  questionRead = () => {
    fetch("/questions")
      .then((response) => response.json())
      .then((payload) => this.setState({ questions: payload }))
      .catch((errors) => console.log("Questions Index Errors:", errors));
  };

  createNewQuestion = () => {
    fetch("/questions", {
      body: JSON.stringify(newQuestion),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (response.status === 422) {
          alert("Something went wrong, please check your submission.");
        }
        return response.json();
      })
      .then((payload) => this.questionRead())
      .catch((errors) => console.log("Question create errors:", errors));
  };

  deleteQuestion = (id) => {
    fetch(`/questions/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((payload) => this.questionRead())
      .catch((errors) => console.log("Question delete errors:", errors));
  };

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
          <Route
            path="/protectedindex"
            render={() => {
              let myQuestions = this.state.questions.filter(
                (question) => question.user_id === this.props.current_user.id
              );
              //to do: need to also filter out current users answers
              return (
                <ProtectedIndex
                  questions={myQuestions}
                  deleteQuestion={this.deleteQuestion}
                />
              );
              //to do: need to also pass in answers and deleteAnswer as props
            }}
          />
          <Route
            path="/questionindex"
            render={() => (
              <QuestionIndex
                user={this.props.current_user}
                questions={this.state.questions}
              />
            )}
          />
          <Route path="/questionnew" component={QuestionNew} />
          <Route
            path="/questionshow/:id"
            render={(props) => {
              let id = props.match.params.id;
              let question = this.state.questions.find((c) => c.id === +id);
              //to do: need to filter answers based on question id
              return (
                <QuestionShow
                  question={question}
                  //to do: pass in answers and editAnswers as props 
                />
              );
            }}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;

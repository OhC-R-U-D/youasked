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
      answers: [],
    };
  }

  componentDidMount() {
    this.questionRead();
    this.answerRead();
  }

  answerRead = () => {
    fetch("/answers")
      .then((response) => response.json())
      .then((payload) => this.setState({ answers: payload }))
      .catch((errors) => console.log("Answers Index Errors:", errors));
  };

  updateAnswer = (editAnswer, id) => {
    fetch(`/answers/${id}`, {
      body: JSON.stringify(editAnswer),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => {
        if (response.status === 422) {
          alert("Something went wrong, please check your submission.");
        }
        return response.json();
      })
      .then((payload) => this.answerRead())
      .catch((errors) => console.log("Answer Update Errors:", errors));
  };

  createNewAnswer = (newAnswer) => {
    fetch("/answers", {
      body: JSON.stringify(newAnswer),
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
      .then((payload) => this.answerRead())
      .catch((errors) => console.log("Answer Create Errors:", errors));
  };

  deleteAnswer = (id) => {
    fetch(`/answers/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((payload) => this.answerRead())
      .catch((errors) => console.log("Answer delete errors:", errors));
  };

  questionRead = () => {
    fetch("/questions")
      .then((response) => response.json())
      .then((payload) => this.setState({ questions: payload }))
      .catch((errors) => console.log("Questions Index Errors:", errors));
  };

  createNewQuestion = (newQuestion) => {
    fetch("/question", {
      body: JSON.stringify(newQuestion),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (response.status === 422) {
          alert("You call that a question?! TRY AGAIN!");
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
              let myAnswers = this.state.answers.filter(
                (answer) => answer.user_id === this.props.current_user.id
              );
              return (
                <ProtectedIndex
                  questions={myQuestions}
                  answers={myAnswers}
                  deleteQuestion={this.deleteQuestion}
                  deleteAnswer={this.deleteAnswer}
                />
              );
            }}
          />

          <Route
            path="/questionindex"
            render={() => (
              <QuestionIndex
                current_user={this.props.current_user}
                questions={this.state.questions}
              />
            )}
          />

          <Route
            path="/questionnew"
            render={(props) => {
              return <QuestionNew createNewQuestion={this.createNewQuestion} 
              current_user={this.props.current_user} />
            }}/>

          <Route
            path="/questionshow/:id"
            render={(props) => {
              let id = props.match.params.id;
              let question = this.state.questions.find((c) => c.id === +id);
              let answers = this.state.answers.filter(
                (answer) => answer.question_id === +id
              );
              return (
                <QuestionShow
                  question={question}
                  answers={answers}
                  updateAnswer={this.updateAnswer}
                  createNewAnswer={this.createNewAnswer}
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

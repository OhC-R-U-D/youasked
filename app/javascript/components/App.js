import React from 'react'
import PropTypes from 'prop-types'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Page404 from '../pages/404Page'
import AboutUsPage from '../pages/AboutUsPage';
import CommunityGuidelinesPage from '../pages/CommunityGuidelinesPage';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import ProtectedIndex from '../pages/ProtectedIndex';
import QuestionIndex from '../pages/QuestionIndex';
import QuestionNew from '../pages/QuestionNew';
import QuestionShow from '../pages/QuestionShow';



class App extends React.Component {
  constructor(props){
    super(props);
  }
  render () {
    console.log("logged in:", this.props.logged_in);
    console.log("current user:", this.props.current_user);
    console.log("sign up", this.props.new_user_route);
    console.log("sign in:", this.props.sign_in_route);
    console.log("sign out:", this.props.sign_out_route);

    return (
      <>
        <Router>
          <Header {...this.props} />
            <Switch>
              <Route exact path='/' component={ Home }/>
              <Route path='/about' component={ AboutUsPage }/>
              <Route path='/error' component={ Page404 }/>
              <Route path='/guidelines' component={ CommunityGuidelinesPage }/>
              <Route path='/contact' component={ Contact }/>
              <Route path='/protectedindex' component={ ProtectedIndex }/>
              <Route path='/questionindex' component={ QuestionIndex }/>
              <Route path='/questionnew' component={ QuestionNew }/>
              <Route path='/questionshow' component={ QuestionShow }/>
            </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App

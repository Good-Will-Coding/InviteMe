import React, { Component } from "react";
import "./App.css";
import Landing from "./components/Landing";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { firebaseApp } from "./Firebase";

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log("User has signed in or up", user);
  } else {
    console.log("User has signed out or still needs to sign in");
  }
});

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;

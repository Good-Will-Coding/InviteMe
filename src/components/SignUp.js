import React, { Component } from "react";
import { firebaseApp } from "../Firebase";

class SignUp extends Component {
  state = {
    email: "",
    password: ""
  };

  signUp() {
    console.log("this.state", this.state);
    const { email, password } = this.state;
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        console.log(`Error, ${err}`);
      });
  }
  render() {
    return (
      <div className="form-inline">
        <h2>Sign Up</h2>
        <div className="form-group">
          <input
            onChange={e => this.setState({ email: e.target.value })}
            type="text"
            className="form-control"
            placeholder="email"
          />
          <input
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            className="form-control"
            placeholder="password"
          />
        </div>
        <button
          onClick={() => this.signUp()}
          type="button"
          className="btn btn-primary"
        >
          Sign Up
        </button>
      </div>
    );
  }
}

export default SignUp;

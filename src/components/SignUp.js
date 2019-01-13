import React, { Component } from "react";
import { firebaseApp } from "../Firebase";
import { Link } from "react-router-dom";

import "./styles/signUp.css";

// Don't forget to update styles

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    error: {
      message: ""
    }
  };

  // User signs up
  signUp() {
    console.log("this.state", this.state);
    const { email, password } = this.state;
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({ error });
      });
  }
  render() {
    return (
      <div className="form-inline" style={{ margin: "15%" }}>
        <img src="https://i.ibb.co/19Qjw5b/invitation.png" alt="" />
        <h2>Sign Up</h2>
        <div className="form-group">
          <input
            onChange={e => this.setState({ email: e.target.value })}
            type="text"
            style={{ margin: "5px" }}
            className="form-control"
            placeholder="email"
          />
          <input
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            style={{ margin: "5px" }}
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
        <div>{this.state.error.message}</div>
        <div>
          <Link id="link-color" to="/">
            Already a user? Sign in instead.
          </Link>
        </div>
      </div>
    );
  }
}

export default SignUp;

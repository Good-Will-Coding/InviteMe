import React, { Component } from "react";
import { firebaseApp } from "../Firebase";
import { Link } from "react-router-dom";

// Don't forget to update styles

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: {
      message: ""
    }
  };

  signIn() {
    console.log("this.state", this.state);
    const { email, password } = this.state;
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({ error });
      });
    this.props.history.push("/invites");
  }
  render() {
    return (
      <div className="form-inline" style={{ margin: "15%" }}>
        <h2>Sign In</h2>
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
          onClick={() => this.signIn()}
          type="button"
          className="btn btn-primary"
        >
          Sign In
        </button>
        <div>{this.state.error.message}</div>
        <div>
          <Link to="/signup">Sign up instead</Link>
        </div>
      </div>
    );
  }
}

export default SignIn;

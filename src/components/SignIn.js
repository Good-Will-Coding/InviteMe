import React, { Component } from "react";
import { firebaseApp } from "../Firebase";
import { Link } from "react-router-dom";
import "./styles/signIn.css";

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
        <img src="https://i.ibb.co/6FTFLMT/love-letter.png" alt=""/>
        <h1>InviteMe</h1>
        <span><p>Say goodbye to "You never invited me".</p></span>
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
          <Link id="link-color" to="/signup">Sign up instead</Link>
        </div>
      </div>
    );
  }
}

export default SignIn;


import React, { Component } from 'react'
import { firebaseApp } from '../Firebase';
import { Link } from "react-router-dom";
 class Landing extends Component {


  signOut() {
    firebaseApp.auth().signOut();
    this.props.history.push("/signin");
    
  }
  render() {
    return (
      <div>
        Landing
        <button className="btn btn-danger" onClick={() => this.signOut()}> 
        Sign Out
        </button>
      </div>
    )
  }
}

export default Landing;
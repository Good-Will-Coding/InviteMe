import React, { Component } from 'react'
import { firebaseApp } from '../Firebase';
import { connect } from 'react-redux';
import AddInvite from './AddInvite';
class Main extends Component {


  signOut() {
    firebaseApp.auth().signOut();
    this.props.history.push("/signin");
    
  }
  render() {
    return (
      <div>
        <h3>Invites</h3>
        <AddInvite />
        <div>Invite List</div>
        <button className="btn btn-danger" onClick={() => this.signOut()}> 
        Sign Out
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state', state);
  return {}
}

export default connect(mapStateToProps)(Main);
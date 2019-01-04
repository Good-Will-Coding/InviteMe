import React, { Component } from 'react'
import { firebaseApp } from '../Firebase';
import { connect } from 'react-redux';
import AddInvite from './AddInvite';
import InviteList from './InviteList';
class Main extends Component {


  signOut() {
    firebaseApp.auth().signOut();
    this.props.history.push("/signin");
    
  }
  render() {
    return (
      <div style={{margin: '5px'}}>
        <h3>InviteMe</h3>
        <AddInvite />
        <hr/>
        <h4>Invites</h4>
        <InviteList />
        <button className="btn btn-danger" onClick={() => this.signOut()}> 
        Sign Out
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log('state', state);
  return {}
}

export default connect(mapStateToProps)(Main);
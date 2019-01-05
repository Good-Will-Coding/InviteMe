import React, { Component } from 'react'
import { firebaseApp } from '../Firebase';
import { connect } from 'react-redux';
import AddInvite from './AddInvite';
import InviteList from './InviteList';
import AcceptedList from './AcceptedList';
import DeniedList from './DeniedList';


class Main extends Component {


  signOut() {
    firebaseApp.auth().signOut();
    this.props.history.push("/");
    
  }
  render() {
    return (
      <div style={{margin: '45px'}}>
        <h3>InviteMe <button className="btn btn-danger" onClick={() => this.signOut()}> 
        Sign Out
        </button></h3>
        <AddInvite />
        <hr/>
        <h4>Invites</h4>
        <InviteList />
        <h4>Who's Going?</h4>
        <AcceptedList />
        <hr/>
        <h4>Nah.</h4>
        <DeniedList/>           
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log('state', state);
  return {}
}

export default connect(mapStateToProps)(Main);
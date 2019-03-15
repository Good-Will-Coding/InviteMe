import React, { Component } from 'react'
import { firebaseApp } from '../Firebase';
import { connect } from 'react-redux';
import AddInvite from './AddInvite';
import InviteList from './InviteList';
import AcceptedList from './AcceptedList';
import DeniedList from './DeniedList';

import './styles/main.css';

class Main extends Component {


  signOut() {
    firebaseApp.auth().signOut();
    this.props.history.push("/");
    
  }
  render() {
    return (
      <div className="div-center" style={{margin: '45px'}}>
      <img src="https://i.ibb.co/7VP9C6h/love-letter-1.png" alt=""/>
        <h1>InviteMe <button className="btn btn-danger" onClick={() => this.signOut()}> 
        Sign Out
        </button></h1>
        <AddInvite />
        <hr/>
        <div className="main-container">
        <h4>Invites</h4>
        <InviteList />
        <h4>Who's Going?</h4>
        <AcceptedList />
        <hr/>
        <h4>Nah.</h4>
        <DeniedList/>
        </div>           
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log('state', state);
  return {}
}

export default connect(mapStateToProps)(Main);
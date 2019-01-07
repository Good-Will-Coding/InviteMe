import React, { Component } from 'react'
import { inviteRef, acceptedInvitationRef, deniedInvitationRef } from '../Firebase';
import { connect } from 'react-redux';

import './styles/inviteItem.css';

class InviteItem extends Component {
    acceptInvite = () => {
        // Add to accepted on database
        const { email } = this.props.user;
        const { title } = this.props.invite;
        acceptedInvitationRef.push({email, title});
    }

    denyInvite = () => {
        // Add user and invite to not going
        const { email } = this.props.user;
        const { title } = this.props.invite;
        deniedInvitationRef.push({email, title});
    }

    removeInvite = () => {
        const { fbKey } = this.props.invite;
        inviteRef.child(fbKey).remove();
    }

  render() {
      const { email, title } = this.props.invite;
    return (
      <div style={{margin: '5px'}}>
      <div className="color-white">
      <strong>{title}</strong>
      <span> Submitted by <em>{email}</em></span>
      </div>
  <button onClick={this.acceptInvite} style={{margin: '5px'}} className="btn btn-sm btn-light">I'm Going!</button>
  <button onClick={this.denyInvite} style={{margin: '2px'}} className="btn btn-sm btn-info">Nah.</button>
  <button onClick={this.removeInvite} style={{margin: '2px'}} className="btn btn-sm btn-danger">Remove</button>
   </div>
    )
  }
}

const mapStateToProps = state => {
    const { user } = state;
    return {
        user
    }
}

export default connect(mapStateToProps)(InviteItem);
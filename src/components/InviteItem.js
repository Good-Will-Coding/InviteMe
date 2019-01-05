import React, { Component } from 'react'
import { inviteRef, acceptedInvitationRef, deniedInvitationRef } from '../Firebase';
import { connect } from 'react-redux';

class InviteItem extends Component {
    acceptInvite = () => {
        // Add to accepted on database
        const { email } = this.props.user;
        const { title, fbKey } = this.props.invite;
        // inviteRef.child(fbKey).remove();
        acceptedInvitationRef.push({email, title});
    }

    denyInvite = () => {
        // Add user and invite to not going
        const { email } = this.props.user;
        const { title, fbKey } = this.props.invite;
        inviteRef.child(fbKey).remove();
        console.log(`Im not going to the ${title}, said ${email}`)
        deniedInvitationRef.push({email, title});
    }

  render() {
      const { email, title } = this.props.invite;
    return (
      <div style={{margin: '5px'}}>
      <strong>{title}</strong>
      <span> Submitted by <em>{email}</em></span>
  <button onClick={this.acceptInvite} style={{margin: '5px'}} className="btn btn-sm btn-primary">I'm Going!</button>
  <button onClick={this.denyInvite} className="btn btn-sm btn-warning">Nah.</button>
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
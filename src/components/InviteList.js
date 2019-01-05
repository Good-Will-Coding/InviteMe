import React, { Component } from "react";
import { inviteRef } from "../Firebase";
import { setInvites } from "../actions/index";
import { connect } from "react-redux";
import InviteItem from './InviteItem';

class InviteList extends Component {
  componentDidMount() {
    inviteRef.on("value", snap => {
      let invites = [];
      snap.forEach(invite => {
        const { email, title } = invite.val();
        const fbKey = invite.key;
        invites.push({ email, title, fbKey });
      });
      this.props.setInvites(invites);
    });
  }

  render() {
    console.log("Invites from store:", this.props.invites);
    return (
      this.props.invites.map((invite, index) => {
        return (
          <InviteItem key={index} invite={invite} />
        )
      })
    );
  }
}

const mapStateToProps = state => {
  const { invites } = state;
  return {
    invites
  };
};

const mapDispatchToProps = {
  setInvites
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InviteList);

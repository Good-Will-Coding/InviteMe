import React, { Component } from "react";
import { acceptedInvitationRef, inviteRef } from "../Firebase";
import { connect } from "react-redux";
import { setAcceptedInvite } from "../actions/index";

import "./styles/acceptedList.css";

class AcceptedList extends Component {
  componentDidMount() {
    acceptedInvitationRef.on("value", snap => {
      let acceptedInvites = [];
      snap.forEach(acceptedInvite => {
        const { email, title } = acceptedInvite.val();
        acceptedInvites.push({ email, title });
      });
      this.props.setAcceptedInvite(acceptedInvites);
    });
  }

  removeAcceptedInvite = () => {
    // don't forget to add in firebase removal
  } 
  render() {
    return (
      <div>
        {this.props.acceptedInvites.map((acceptedInvite, index) => {
          const { title, email } = acceptedInvite;
          return (
            <div class="accepted-color" key={index}>
              <strong id="strong-color">{title}</strong> - Invitation accepted by <em>{email}</em>
            <button onClick={this.removeAcceptedInvite} style={{ margin: "10px"}} className="btn-danger">X</button>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { acceptedInvites } = state;
  return {
    acceptedInvites
  };
};

const mapDispatchToProps = {
  setAcceptedInvite
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(AcceptedList);

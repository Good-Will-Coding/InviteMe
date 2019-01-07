import React, { Component } from "react";
import { deniedInvitationRef } from "../Firebase";
import { connect } from "react-redux";
import { setDeniedInvite } from "../actions";

import "./styles/deniedList.css";

class DeniedList extends Component {
  componentDidMount() {
    deniedInvitationRef.on("value", snap => {
      let deniedInvites = [];
      snap.forEach(deniedInvite => {
        const { email, title } = deniedInvite.val();
        deniedInvites.push({ email, title });
      });
      this.props.setDeniedInvite(deniedInvites);
    });
  }
  render() {
    return (
      <div>
        {this.props.deniedInvites.map((deniedInvite, index) => {
          const { title, email } = deniedInvite;
          return (
            <div className="denied-color" key={index}>
              <strong id="strong-denied">{title}</strong>, Invitation declined by <em>{email}</em>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { deniedInvites } = state;
  return {
    deniedInvites
  };
};

const mapDispatchToProps = {
  setDeniedInvite
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(DeniedList);

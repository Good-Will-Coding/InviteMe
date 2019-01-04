import React, { Component } from "react";
import { connect } from "react-redux";
import { inviteRef } from "../Firebase";

class AddInvite extends Component {
  state = {
    title: ""
  };

  addInvite() {
    console.log("this", this);
    const { title } = this.state;
    const { email } = this.props.user;
    inviteRef.push({ email, title });
  }
  render() {
    return (
      <div className="form-inline">
        <div className="form-group">
          <input
            type="text"
            placeholder="Add an invite"
            className="form-control"
            style={{ marginRight: "5px" }}
            onChange={e => this.setState({ title: e.target.value })}
          />
          <button
            onClick={() => this.addInvite()}
            className="btn btn-succes"
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;
  return {
    user
  };
};

export default connect(mapStateToProps)(AddInvite);

import React, { Component } from "react";
import { connect } from "react-redux";
import { inviteRef } from "../Firebase";

class AddInvite extends Component {
  state = {
    title: "",
    disabledButton: false
  };

  addInvite = () => {
    if (this.state.title === "") {
      this.setState({ disabledButton: !this.state.disabledButton });
    } else {
      const { title } = this.state;
      const { email } = this.props.user;
      inviteRef.push({ email, title });
      this.setState({ title: "" });
    }
  };
  render() {
    return (
      <div className="form-inline">
        <div className="form-group">
          <input
            type="text"
            placeholder="Add an invite"
            className="form-control"
            style={{ marginRight: "5px" }}
            onChange={e =>
              this.setState({ title: e.target.value, disabledButton: false })
            }
          />
          <button
            onClick={this.addInvite}
            className="btn btn-success"
            type="button"
            disabled={this.state.disabledButton}
          >
            Invite
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

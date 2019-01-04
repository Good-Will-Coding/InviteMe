import React, { Component } from 'react'

class InviteItem extends Component {
  render() {
      const { email, title } = this.props.invite;
    return (
      <div style={{margin: '5px'}}>
      <strong>{title}</strong>
      <span> Submitted by <em>{email}</em></span>
      </div>
    )
  }
}

export default InviteItem;
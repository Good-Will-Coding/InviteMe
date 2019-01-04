import React, { Component } from 'react'
import { acceptedInvitationRef } from '../Firebase';
import { connect } from 'react-redux';
import { setAcceptedInvite } from '../actions/index';


class AcceptedList extends Component {
    componentDidMount() {
        acceptedInvitationRef.on('value', snap => {
            let acceptedInvites = [];
            snap.forEach(acceptedInvite => {
                const { email, title } = acceptedInvite.val();
                acceptedInvites.push({email, title})
            })
            console.log('Accepted invis', acceptedInvites);
            this.props.setAcceptedInvite(acceptedInvites);
        })
    }
  render() {
      console.log('woah', this.props.acceptedInvites)
    return (
      <div>
     {
         this.props.acceptedInvites.map((acceptedInvite, index) => {
             const { title, email } = acceptedInvite;
             return (
                //  div key={}g
             )

         })
     }
      </div>
    )
  }
}

const mapStateToProps = state => {
    const { acceptedInvites } = state;
    return {
        acceptedInvites
    }
}

export default connect(mapStateToProps, { setAcceptedInvite })(AcceptedList);
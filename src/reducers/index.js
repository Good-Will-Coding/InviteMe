import { combineReducers } from 'redux';
import user from './reducer_user';
import invites from './reducer_invites';
import acceptedInvites from './reducer_accepted_invitation';
import deniedInvites from './reducer_denied_invitation';

export default combineReducers({
    user,
    invites,
    acceptedInvites,
    deniedInvites
});
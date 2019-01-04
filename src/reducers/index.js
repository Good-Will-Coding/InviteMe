import { combineReducers } from 'redux';
import user from './reducer_user';
import invites from './reducer_invites';
import acceptedInvites from './reducer_invites';

export default combineReducers({
    user,
    invites,
    acceptedInvites
});
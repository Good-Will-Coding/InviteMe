import { SET_ACCEPTEDINVITE} from '../actions/constants';

export default (state =[], action) => {
    switch(action.type) {
        case SET_ACCEPTEDINVITE:
        const { acceptedInvites } = action;
        return acceptedInvites;
        default:
        return state;
    }
}
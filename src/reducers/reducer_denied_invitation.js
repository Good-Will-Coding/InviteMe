import { SET_DENIEDINVITE} from '../actions/constants';

export default (state =[], action) => {
    switch(action.type) {
        case SET_DENIEDINVITE:
        const { deniedInvites } = action;
        return deniedInvites;
        default:
        return state;
    }
}
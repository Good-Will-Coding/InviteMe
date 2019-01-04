import { SET_INVITES } from "../actions/constants";

export default (state = [], action) => {
  switch (action.type) {
    case SET_INVITES:
      const { invites } = action;
      return invites;
    default:
      return state;
  }
};

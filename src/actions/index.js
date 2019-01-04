import { SIGNED_IN, SET_INVITES, SET_ACCEPTEDINVITE } from "./constants";

export function logUser(email) {
  const action = {
    type: SIGNED_IN,
    email
  };
  return action;
}

export function setInvites(invites) {
  const action = {
    type: SET_INVITES,
    invites
  };
  return action;
}

export function setAcceptedInvite(acceptedInvites) {
  const action = {
    type: SET_ACCEPTEDINVITE,
    acceptedInvites
  }
  return action;
}

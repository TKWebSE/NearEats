import { REQUEST_STATE } from '../constants';

export const initializeGuestState = {
  fetchState: REQUEST_STATE.INITIAL,
  guest: null,
  activate: false,
}

export const guestSessionActionTypes = {
  FETCHING: "FETCHING",
  SET_GUEST: "SET_GUEST",
  SET_ACTIVATE: "SET_ACTIVATE",
  RESET_GUEST: "RESET_GUEST",
}

export const guestSessionReducer = (state, action) => {
  switch (action.type) {
    case guestSessionActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case guestSessionActionTypes.SET_GUEST:
      console.log(action.payload)
      console.log(state)
      console.log(state.activate)
      return {
        fetchState: REQUEST_STATE.OK,
        guest: action.payload.guest,
        activate: state.activate,
      };
    case guestSessionActionTypes.SET_ACTIVATE:
      return {
        fetchState: REQUEST_STATE.OK,
        guest: state.guest,
        activate: action.payload.activate,
      };
    case guestSessionActionTypes.RESET_GUEST:
      return {
        fetchState: REQUEST_STATE.LOADING,
        guest: null,
        activate: false,
      };
    default:
      throw new Error();
  }
}

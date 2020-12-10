import { SET_CURRENT_USER } from "../actions/auth";

const initialState = {
  isAuthenticated: false,
  user: {},
};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !!Object.keys(action.user).length,
        user: action.user,
      };
    default:
      return state;
  }
};

export default currentUserReducer;

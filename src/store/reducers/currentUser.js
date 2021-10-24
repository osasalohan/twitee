import { SET_CURRENT_USER, SET_LOADING } from "../actions/auth";

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!Object.keys(action.user).length,
        user: action.user,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default currentUserReducer;

import { ADD_ERROR, REMOVE_ERROR } from "../actions/error";

const initialState = { message: null };

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return { ...state, message: action.error };
    case REMOVE_ERROR:
      return { ...state, message: null };
    default:
      return state;
  }
};

export default errorReducer;

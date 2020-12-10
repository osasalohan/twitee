import { ADD_POST, LOAD_POSTS } from "../actions/post";

const initialState = [];

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return action.posts;
    case ADD_POST:
      const newState = [...state];
      newState.push(action.post);
      return newState;
    default:
      return state;
  }
};

export default postReducer;

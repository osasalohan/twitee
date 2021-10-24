import { apiCall } from "../../services/api";
import { removeError, addError } from "./error";
import { setLoading } from "./auth";

export const ADD_POST = "ADD_POST";
export const LOAD_POSTS = "LOAD_POSTS";

export const loadPosts = (posts) => ({
  type: LOAD_POSTS,
  posts,
});

export const addPost = (post) => ({
  type: ADD_POST,
  post,
});

export const createPost = (id, post) => (dispatch) => {
  dispatch(setLoading(true));
  return new Promise((resolve, reject) => {
    return apiCall("post", `https://twitee-api.herokuapp.com/${id}/posts`, post)
      .then((post) => {
        dispatch(addPost(post));
        dispatch(setLoading(false));
        dispatch(removeError);
        resolve();
      })
      .catch((err) => {
        dispatch(setLoading(false));
        dispatch(addError(err.message));
        reject();
      });
  });
};

export const deletePost = (id, postId) => (dispatch) => {
  dispatch(setLoading(true));
  return new Promise((resolve, reject) => {
    return apiCall(
      "delete",
      `https://twitee-api.herokuapp.com/${id}/posts/${postId}`
    )
      .then(() => {
        dispatch(setLoading(false));
        dispatch(removeError);
        fetchPosts(id);
        resolve();
      })
      .catch((err) => {
        dispatch(setLoading(false));
        dispatch(addError(err.message));
        reject();
      });
  });
};

export const likePost = (id, postId) => (dispatch) => {
  dispatch(setLoading(true));
  return new Promise((resolve, reject) => {
    return apiCall(
      "post",
      `https://twitee-api.herokuapp.com/${id}/posts/${postId}/like`
    )
      .then(() => {
        dispatch(setLoading(false));
        dispatch(removeError);
        fetchPosts(id);
        resolve();
      })
      .catch((err) => {
        dispatch(setLoading(false));
        dispatch(addError(err.message));
        reject();
      });
  });
};

export const fetchPosts = (id) => (dispatch) => {
  dispatch(setLoading(true));
  return new Promise((resolve, reject) => {
    return apiCall("get", `https://twitee-api.herokuapp.com/${id}/posts`)
      .then((posts) => {
        dispatch(loadPosts(posts));
        dispatch(setLoading(false));
        dispatch(removeError);
        resolve();
      })
      .catch((err) => {
        dispatch(setLoading(false));
        dispatch(addError(err.message));
        reject();
      });
  });
};

export const createComment = (id, postId, comment) => (dispatch) => {
  dispatch(setLoading(true));
  return new Promise((resolve, reject) => {
    return apiCall(
      "post",
      `https://twitee-api.herokuapp.com/${id}/posts/${postId}/comments`,
      comment
    )
      .then(() => {
        dispatch(setLoading(false));
        dispatch(removeError);
        fetchPosts(id);
        resolve();
      })
      .catch((err) => {
        dispatch(setLoading(false));
        dispatch(addError(err.message));
        reject();
      });
  });
};

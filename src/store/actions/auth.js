import { apiCall, setTokenHeader } from "../../services/api";
import { addError, removeError } from "./error";

export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SET_LOADING = "SET_LOADING";

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  user,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const logout = () => (dispatch) => {
  localStorage.clear();
  setTokenHeader(false);
  dispatch(setCurrentUser({}));
};

export const authUser = (type, userData) => (dispatch) => {
  dispatch(setLoading(true));
  dispatch(removeError());
  return new Promise((resolve, reject) => {
    return apiCall("post", `https://twitee-api.herokuapp.com/${type}`, userData)
      .then(({ token, ...user }) => {
        localStorage.setItem("jwtoken", token);
        setTokenHeader(token);
        dispatch(setCurrentUser(user));
        dispatch(setLoading(false));
        dispatch(removeError());
        resolve();
      })
      .catch((err) => {
        dispatch(setLoading(false));
        dispatch(addError(err.message));
        reject();
      });
  });
};

import React from "react";
import { Provider } from "react-redux";
import jwtDecode from "jwt-decode";
import store from "./store";
import NavBar from "./components/NavBar";
import Main from "./containers/Main";
import { setCurrentUser } from "./store/actions/auth";
import { setTokenHeader } from "./services/api";

if (localStorage.jwtoken) {
  setTokenHeader(localStorage.jwtoken);
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtoken)));
  } catch (err) {
    store.dispatch(setCurrentUser({}));
  }
}

const App = () => (
  <Provider store={store}>
    <div>
      <NavBar />
      <Main />
    </div>
  </Provider>
);

export default App;

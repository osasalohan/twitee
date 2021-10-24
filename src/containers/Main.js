import React from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "../components/HomePage";
import SignInForm from "../components/SignInForm";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/error";

const Main = (props) => {
  const user = useSelector((state) => state.currentUser.user);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.currentUser.loading);

  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/">
          <HomePage
            user={user}
            removeError={removeError}
            error={error}
            loading={loading}
          />
        </Route>
        <Route exact path="/signin">
          <SignInForm
            removeError={removeError}
            error={error}
            authUser={authUser}
            loading={loading}
          />
        </Route>
        <Route exact path="/signup">
          <SignInForm
            removeError={removeError}
            error={error}
            authUser={authUser}
            loading={loading}
            register
          />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;

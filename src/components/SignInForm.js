import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import Loader from "./Loader";

const SignInForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { error, removeError, history, authUser, loading, register } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    (register
      ? dispatch(authUser("signup", { email, password }))
      : dispatch(authUser("signin", { email, password }))
    )
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        return;
      });
  };

  history.listen(() => {
    removeError();
  });

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <form onSubmit={handleSubmit}>
          {error.message && (
            <div className="alert alert-danger">{error.message}</div>
          )}
          <label htmlFor="email">Email:</label>
          <input
            className="form-control"
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="password">Password:</label>
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            {loading ? <Loader /> : register ? "Sign Up" : "Log In"}
          </button>
        </form>
        <div className="mt-2">
          <p>{register ? "Already" : "Don't"} have an account? </p>
          <Link
            to={register ? "/signin" : "/signup"}
            className="btn btn-primary"
          >
            {register ? "Log In" : "Sign Up"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SignInForm);

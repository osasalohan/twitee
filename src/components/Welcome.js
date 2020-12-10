import React from "react";
import { Link } from "react-router-dom";

const Welcome = (props) => (
  <div className="jumbotron">
    <h1 className="display-4">Welcome To Twitee</h1>
    <p className="lead">The number 77423 twitter clone.</p>
    <Link className="btn btn-primary btn-lg" to="/signup">
      Sign Up
    </Link>
  </div>
);

export default Welcome;

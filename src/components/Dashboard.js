import React from "react";
import Profile from "./Profile.js";
import AddTwit from "./AddTwit.js";
import Twits from "./Twits.js";

const Dashboard = ({ error }) => (
  <div className="row">
    {error.message && <div className="alert alert-danger">{error.message}</div>}
    <div className="col-lg-4">
      <Profile />
    </div>
    <div className="col-lg-8">
      <AddTwit />
      <Twits />
    </div>
  </div>
);

export default Dashboard;

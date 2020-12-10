import React from "react";
import Profile from "./Profile.js";
import AddTwit from "./AddTwit.js";
import Twits from "./Twits.js";

const Dashboard = (props) => (
  <div className="row">
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

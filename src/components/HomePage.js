import React from "react";
import Welcome from "./Welcome";
import Dashboard from "./Dashboard";

const HomePage = ({user, error}) => {
  return user.name ? <Dashboard error={error} /> : <Welcome />;
};

export default HomePage;

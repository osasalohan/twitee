import React from "react";
import Welcome from "./Welcome";
import Dashboard from "./Dashboard";

const HomePage = (props) => {
  return props.user.name ? <Dashboard /> : <Welcome />;
};

export default HomePage;

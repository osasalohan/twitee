import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/actions/auth";
import logo from "../logo.svg";

const NavBar = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.currentUser.user);

  return (
    <nav className="navbar navbar-expand">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Twitee home icon" />
          </Link>
        </div>
        {user.name ? (
          <ul className="nav navbar-nav navbar-right">
            <li>
              <h6>Welcome {user.name}</h6>
            </li>
            <li>
              <button
                className="btn btn-primary"
                onClick={() => {
                  dispatch(logout());
                }}
              >
                Log Out
              </button>
            </li>
          </ul>
        ) : (
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/signin">Log In</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

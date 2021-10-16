//sign in sign up
import React from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};
// determine which tab we are right now
//we can throw different colors based on which path we are

const Menu = ({ history, path }) => {
  return (
    <div>
      <ul className="nav nav-tabs bg-dark">
        <li className="nav-item">
          <Link className="nav-link" style={currentTab(history, "/")} to="/">
            HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            style={currentTab(history, "/user/dashboard")}
            to="/user/dashboard"
          >
            Dashbaord
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            style={currentTab(history, "/cart")}
            to="/cart"
          >
            Cart
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            style={currentTab(history, "/signin")}
            to="/signin"
          >
            Login
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            style={currentTab(history, "/signup")}
            to="/signup"
          >
            Register
          </Link>
        </li>

        <li className="nav-item">
          <span
            onClick={() => {
              signout(() => {
                history.push();
              });
            }}
            className="nav-link text-warning"
          >
            Logout
          </span>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Menu);

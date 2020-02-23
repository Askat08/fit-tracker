import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../img/FitTrack-logo.png";

const navBg = {
  background: "rgba(0, 0, 0, 0.7)"
  // height: "4rem"
};

export default class Navbar extends Component {
  render() {
    return (
      <div className="app mt-1">
        <nav
          className="navbar navbar-expand-md navbar-dark fixed-top "
          style={navBg}
        >
          <Link to="/" className="navbar-brand mr-auto p-2">
            <img src={logo} style={{ width: "30%" }} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav ml-auto">
              <li className="navbar-item active">
                <Link to="/exercise" className="nav-link">
                  Exercises
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Create Exercise Log
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/user" className="nav-link">
                  Create User
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

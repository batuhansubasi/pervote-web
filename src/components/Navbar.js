import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { loginaction } from "../actions/index";
import { getTokenJwt } from "../helpers/jwt";

function Navbar() {
  const [isOpen, setisOpen] = useState(0);
  var auth = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  const jwt = getTokenJwt();
  if (jwt) {
    auth = true;
  }

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Beach Resort" />
          </Link>

          <button
            type="button"
            className="nav-btn"
            onClick={() => setisOpen(!isOpen)}
          >
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/login" style={display(!auth)}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" style={display(!auth)}>
              Register
            </Link>
          </li>
          <li>
            <Link to="/mobile" style={display(!auth)}>
              Mobile App
            </Link>
          </li>
          <li>
            <Link to="/personnel" style={display(auth)}>
              My Personnels
            </Link>
          </li>
          <li>
            <Link to="/department" style={display(auth)}>
              My Departments
            </Link>
          </li>
          <li>
            <Link to="/settings" style={display(auth)}>
              Admin Settings
            </Link>
          </li>
          <li>
            <Link
              to="/"
              style={display(auth)}
              onClick={() => dispatch(loginaction())}
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function display(auth) {
  return {
    display: auth ? "block" : "none",
  };
}

export default Navbar;

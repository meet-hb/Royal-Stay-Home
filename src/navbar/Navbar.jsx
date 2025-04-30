import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbaar.css";
import Logo from "../assets/images/Royal-stay-2.png";
import LogoLight from "../assets/images/Royal-stay-2.png";
import AvatarImg from "../assets/images/avatar/01.jpg";
import { color } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  // Check if user is logged in on page load
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("LoginuserData"));
    const storedLoginStatus = localStorage.getItem("isLoggedIn") === "true";

    if (storedLoginStatus && storedUser?.username) {
      setIsLoggedIn(true);
      setUsername(storedUser.username);
    } else {
      setIsLoggedIn(false);
      setUsername("");
    }
  }, []);

  // Handle logout
  const handleSignOut = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    setUsername("");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("LoginuserData");
  };

  // Handle successful login
  const handleLoginSuccess = (userData) => {
    setIsLoggedIn(true);
    setUsername(userData.username);
    localStorage.setItem("LoginuserData", JSON.stringify(userData));
    localStorage.setItem("isLoggedIn", "true");
  };

  // Render login/logout section based on isLoggedIn state
  const renderAuthSection = () => {
    if (isLoggedIn) {
      return (
        <>
          <ul className="nav flex-row align-items-center list-unstyled ms-xl-auto">
            <li className="nav-item dropdown ms-0 ms-md-3">
              <Link
                to="#"
                className="nav-notification btn btn-light p-0 mb-0"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
                <i className="bi bi-bell fa-fw"></i>
              </Link>
              <span className="notif-badge animation-blink"></span>
              <div className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md shadow-lg p-0">
                <div className="card bg-transparent">
                  <div className="card-header bg-transparent d-flex justify-content-between align-items-center border-bottom">
                    <h6 className="m-0">
                      Notifications{" "}
                      <span className="badge bg-danger bg-opacity-10 text-danger ms-2">
                        4 new
                      </span>
                    </h6>
                    <Link to="#" className="small" style={{ color: "#d5b342" }}>
                      Clear all
                    </Link>
                  </div>
                  <div className="card-body p-0">
                    <ul className="list-group list-group-flush list-unstyled p-2">
                      <li>
                        <Link
                          to="#"
                          className="list-group-item list-group-item-action rounded notif-unread border-0 mb-1 p-3"
                        >
                          <h6 className="mb-2">
                            New! Booking flights from New York ✈️
                          </h6>
                          <p className="mb-0 small">
                            Find the flexible ticket on flights around the
                            world. Start searching today
                          </p>
                          <span>Wednesday</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="list-group-item list-group-item-action rounded border-0 mb-1 p-3"
                        >
                          <h6 className="mb-2">
                            Sunshine savings are here 🌞 save 30% or more on a
                            stay
                          </h6>
                          <span>15 Nov 2022</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer bg-transparent text-center border-top">
                    <Link to="#" className="btn btn-sm btn-link mb-0 p-0">
                      See all incoming activity
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            {/* Profile Dropdown */}
            <li className="nav-item ms-3 dropdown">
              <Link
                to="#"
                className="avatar avatar-sm p-0"
                id="profileDropdown"
                role="button"
                data-bs-auto-close="outside"
                data-bs-display="static"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img className="avatar-img rounded-2" src={AvatarImg} alt="avatar" />
              </Link>
              <ul
                className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
                aria-labelledby="profileDropdown"
              >
                <li className="px-3 mb-3">
                  <div className="d-flex align-items-center">
                    <div className="avatar me-3">
                      <img className="avatar-img rounded-circle shadow" src={AvatarImg} alt="avatar" />
                    </div>
                    <div>
                      <Link to="#" className="h6 mt-2 mt-sm-0">
                        {username || "Guest"}
                      </Link>
                      <p className="small m-0">example@gmail.com</p>
                    </div>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <Link to="/settings" className="dropdown-item">
                    <i className="bi bi-gear fa-fw me-2"></i>Settings
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item" onClick={handleSignOut}>
                    <i className="bi bi-power fa-fw me-2"></i>Sign Out
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </>
      );
    } else {
      return (
        <Link to="/login" className="btn btn-outline-primary">
          Login
        </Link>
      );
    }
  };

  return (
    <header className="navbar-light header-sticky">
      <nav className="navbar navbar-expand-xl">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img
              className="light-mode-item navbar-brand-item img-fluid"
              src={Logo}
              alt="logo"
            />
            <img
              className="dark-mode-item navbar-brand-item img-fluid"
              src={LogoLight}
              alt="logo"
            />
          </Link>

          <button
            className="navbar-toggler ms-auto ms-sm-0 p-0 p-sm-2 me-md-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-animation ">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span className="d-none d-sm-inline-block small">Menu</span>
          </button>

          <div className="navbar-collapse collapse" id="navbarCollapse">
            <ul className="navbar-nav navbar-nav-scroll me-auto">
              <li className="nav-item dropdown">
                <Link
                  to="/"
                  className={`nav-link ${
                    location.pathname === "/" ? "active-page" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <Link
                to="/AboutUs"
                className={`nav-link ${
                  location.pathname === "/AboutUs" ? "active-page" : ""
                }`}
              >
                About us
              </Link>

              <Link
                to="/Ourservices"
                className={`nav-link ${
                  location.pathname === "/Ourservices" ? "active-page" : ""
                }`}
              >
                Our Services
              </Link>

              <Link
                to="/contactUs"
                className={`nav-link ${
                  location.pathname === "/contactUs" ? "active-page" : ""
                }`}
              >
                Contact us
              </Link>
            </ul>
          </div>

          <ul className="nav flex-row align-items-center list-unstyled ms-xl-auto">
            {renderAuthSection()}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

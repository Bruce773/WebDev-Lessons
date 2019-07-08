import netlifyIdentity from 'netlify-identity-widget';
import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar: React.SFC = () => (
  <>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <div className="headshot-container">
          <img
            className="img-fluid"
            height="190px"
            width="230px"
            src="./../../images/main_logo_nav_bar.svg"
          />
        </div>
        {/* WebDev Lessons */}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Courses
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdown"
            >
              <Link className="dropdown-item" to="/courses/">
                Introduction Overview
              </Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item " to="/javascript/">
                Javascript
              </Link>
              <Link className="dropdown-item" to="/html/">
                HTML
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about/">
              About
            </Link>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={() => netlifyIdentity.open()}>
              Login
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

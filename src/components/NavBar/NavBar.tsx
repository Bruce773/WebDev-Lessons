import netlifyIdentity from 'netlify-identity-widget';
import React from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserTypes } from '../../Types';
// import { NavBarLogo } from '../../images';
import { StyledLink } from './elements';

export const NavBar: React.FC<CurrentUserTypes> = ({ currentUser }) => (
  <>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <StyledLink>
        <Link className="navbar-brand" to="/">
          <div className="headshot-container">
            {/* <img
              className="img-fluid"
              height="190px"
              width="230px"
              src="../../images/main_logo_nav_bar.svg"
            /> */}
            {/* <NavBarLogo /> */}
          </div>
          WebDev Lessons
        </Link>
      </StyledLink>
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
          {currentUser !== null ? (
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
                {`Logged in as ${
                  currentUser.user_metadata.full_name.split(' ')[0]
                }`}
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdown"
              >
                <Link to="/account/">
                  <StyledLink
                    style={{ color: '#0085ff' }}
                    className="dropdown-item"
                  >
                    Account
                  </StyledLink>
                </Link>
                <div className="dropdown-divider" />
                <StyledLink
                  className="dropdown-item"
                  style={{ color: '#ff0000cc' }}
                  onClick={() => netlifyIdentity.logout()}
                >
                  Logout
                </StyledLink>
              </div>
            </li>
          ) : (
            <StyledLink
              className="nav-link"
              onClick={() => netlifyIdentity.open()}
            >
              Login
            </StyledLink>
          )}
        </ul>
      </div>
    </nav>
  </>
);

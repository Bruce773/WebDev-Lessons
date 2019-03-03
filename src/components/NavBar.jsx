import React from 'react';

const NavBar = () => (
  <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand navbarLink" data-link='/' href="/">WebDev Lessons</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Courses
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a className="dropdown-item navbarLink" data-link='/courses' href="/courses">Introduction Overview</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item courseLink" data-link="/Javascript" data-class="Javascript" href=''>Javascript</a>
            <a className="dropdown-item courseLink" data-link="/HTML" data-class="HTML" href=''>HTML</a>
          </div>
        </li>
        <li className="nav-item">
            <a className="nav-link navbarLink" data-link='/about' href="/about">About</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
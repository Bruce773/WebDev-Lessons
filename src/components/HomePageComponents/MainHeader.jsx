import React from 'react';

const MainHeader = () => (
  <div>
    <h1 className="main-header">WebDev Lessons</h1>
    <h2 className="main-sub-header">(Lessons in Website Development)</h2>
    <div className="container">
      <div className="row col-sm-20">
        <div className="headers-container">
          <div className="row justify-content-sm-center">
            <h2 className="welcome-h2 text-wrap col-sm-auto">
              Welcome to WebDev Lessons!
            </h2>
          </div>
          <div className="row justify-content-md-center">
            <h3 className="welcome-h3 text-wrap col-sm-auto">
              Learn JavaScript, HTML, CSS, and more!
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MainHeader;

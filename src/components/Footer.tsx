import React from 'react';

const Footer = () => {
  var date = new Date();
  var year = date.getFullYear();
  return (
    <div>
      <hr />
      <p>Copyright {year} &copy; WebDev Lessons</p>
    </div>
  );
};

export default Footer;

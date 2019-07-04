import React from 'react';

export const Footer: React.SFC = () => {
  var date = new Date();
  var year = date.getFullYear();
  return (
    <div>
      <hr />
      <p>Copyright {year} &copy; WebDev Lessons</p>
    </div>
  );
};

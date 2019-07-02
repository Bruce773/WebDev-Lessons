import React from 'react';
var Footer = function () {
    var date = new Date();
    var year = date.getFullYear();
    return (React.createElement("div", null,
        React.createElement("hr", null),
        React.createElement("p", null,
            "Copyright ",
            year,
            " \u00A9 WebDev Lessons")));
};
export default Footer;
//# sourceMappingURL=Footer.js.map
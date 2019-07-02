import React from 'react';
import { Link } from 'react-router-dom';
var NavBar = function () { return (React.createElement("div", null,
    React.createElement("nav", { className: "navbar fixed-top navbar-expand-lg navbar-dark bg-dark" },
        React.createElement(Link, { className: "navbar-brand", to: "/" },
            React.createElement("div", { className: "headshot-container" },
                React.createElement("img", { className: "img-fluid", height: "190px", width: "230px", src: "./../../images/main_logo_nav_bar.svg" }))),
        React.createElement("button", { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
            React.createElement("span", { className: "navbar-toggler-icon" })),
        React.createElement("div", { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
            React.createElement("ul", { className: "navbar-nav ml-auto" },
                React.createElement("li", { className: "nav-item dropdown" },
                    React.createElement("a", { className: "nav-link dropdown-toggle", href: "#", id: "navbarDropdown", role: "button", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, "Courses"),
                    React.createElement("div", { className: "dropdown-menu dropdown-menu-right", "aria-labelledby": "navbarDropdown" },
                        React.createElement(Link, { className: "dropdown-item", to: "/courses/" }, "Introduction Overview"),
                        React.createElement("div", { className: "dropdown-divider" }),
                        React.createElement(Link, { className: "dropdown-item ", to: "/javascript/" }, "Javascript"),
                        React.createElement(Link, { className: "dropdown-item", to: "/html/" }, "HTML"))),
                React.createElement("li", { className: "nav-item" },
                    React.createElement(Link, { className: "nav-link", to: "/about/" }, "About"))))))); };
export default NavBar;
//# sourceMappingURL=NavBar.js.map
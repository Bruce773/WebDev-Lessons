var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import { HomePage } from './HomePage/HomePage';
import { GlobalStyles } from './elements';
import About from './About.jsx';
import Courses from './Courses.jsx';
import FourOFour from './FourOFour.jsx';
import JavaScriptLesson from './JavaScriptLesson.jsx';
import HTMLLesson from './HtmlLesson.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import { BrowserRouter as Router, Route, Switch, Redirect, } from 'react-router-dom';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        return _super.call(this, props) || this;
    }
    App.prototype.RemoveTrailingSlash = function (location) {
        var pathname = window.location.pathname;
        if (pathname.substr(-1) === '/') {
            return React.createElement(Redirect, { to: pathname.substr(0, pathname.length - 1) });
        }
        else {
            return null;
        }
    };
    App.prototype.render = function () {
        return (React.createElement(Router, { basename: process.env.PUBLIC_URL },
            React.createElement(ScrollToTop, null,
                React.createElement("div", { className: "main" },
                    React.createElement(GlobalStyles, null,
                        React.createElement(Route, { pattern: "/", render: this.RemoveTrailingSlash }),
                        React.createElement(NavBar, null),
                        React.createElement(Switch, null,
                            React.createElement(Route, { path: "/", exact: true, component: HomePage }),
                            React.createElement(Route, { path: "/about/", component: About }),
                            React.createElement(Route, { path: "/courses/", component: Courses }),
                            React.createElement(Route, { path: "/javascript/", component: JavaScriptLesson }),
                            React.createElement(Route, { path: "/html/", component: HTMLLesson }),
                            React.createElement(Route, { component: FourOFour })),
                        React.createElement(Footer, null))))));
    };
    return App;
}(React.Component));
export default App;
//# sourceMappingURL=App.js.map
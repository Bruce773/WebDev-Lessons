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
import React from 'react';
import { withRouter } from 'react-router-dom';
var ScrollToTop = /** @class */ (function (_super) {
    __extends(ScrollToTop, _super);
    function ScrollToTop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScrollToTop.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0);
        }
    };
    ScrollToTop.prototype.render = function () {
        return this.props.children;
    };
    return ScrollToTop;
}(React.Component));
export default withRouter(ScrollToTop);
//# sourceMappingURL=ScrollToTop.js.map
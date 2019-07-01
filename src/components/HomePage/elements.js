"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
// All h1s, h2s, and h3s need:
// font-weight: 200;
// font-family: 'Source Sans Pro', sans-serif;
var Header = styled_components_1.default.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-weight: 200;\n  font-family: 'Source Sans Pro', sans-serif;\n"], ["\n  font-weight: 200;\n  font-family: 'Source Sans Pro', sans-serif;\n"])));
exports.MainHeader = styled_components_1.default(Header)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding-top: 45px;\n  margin-top: 20px;\n  font-size: 40px;\n  margin-bottom: 0px;\n"], ["\n  padding-top: 45px;\n  margin-top: 20px;\n  font-size: 40px;\n  margin-bottom: 0px;\n"])));
exports.MainSubHeader = styled_components_1.default(Header)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-weight: 200;\n  font-family: 'Source Sans Pro', sans-serif;\n  margin-top: 0px;\n  font-size: 20px;\n  margin-bottom: 30px;\n"], ["\n  font-weight: 200;\n  font-family: 'Source Sans Pro', sans-serif;\n  margin-top: 0px;\n  font-size: 20px;\n  margin-bottom: 30px;\n"])));
exports.HeadersContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: block;\n  background-color: rgb(130, 180, 143);\n  color: rgb(255, 249, 249);\n  margin: auto;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 7px 7px lightgrey;\n"], ["\n  display: block;\n  background-color: rgb(130, 180, 143);\n  color: rgb(255, 249, 249);\n  margin: auto;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 7px 7px lightgrey;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

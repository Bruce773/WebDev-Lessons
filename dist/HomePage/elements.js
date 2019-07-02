var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
// All h1s, h2s, and h3s need:
// font-weight: 200;
// font-family: 'Source Sans Pro', sans-serif;
var Header = styled.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-weight: 200;\n  font-family: 'Source Sans Pro', sans-serif;\n"], ["\n  font-weight: 200;\n  font-family: 'Source Sans Pro', sans-serif;\n"])));
export var MainHeader = styled(Header)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding-top: 45px;\n  margin-top: 20px;\n  font-size: 40px;\n  margin-bottom: 0px;\n"], ["\n  padding-top: 45px;\n  margin-top: 20px;\n  font-size: 40px;\n  margin-bottom: 0px;\n"])));
export var MainSubHeader = styled(Header)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-top: 0px;\n  font-size: 20px;\n  margin-bottom: 30px;\n"], ["\n  margin-top: 0px;\n  font-size: 20px;\n  margin-bottom: 30px;\n"])));
export var WelcomeHeader = styled(Header)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-weight: 200;\n  font-size: 1.5rem;\n  @media only screen and (max-width: 540px) {\n    font-size: 25px !important;\n  }\n"], ["\n  font-weight: 200;\n  font-size: 1.5rem;\n  @media only screen and (max-width: 540px) {\n    font-size: 25px !important;\n  }\n"])));
export var WelcomeHeaderSmSize = styled(Header)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: 1.5rem;\n  @media only screen and (max-width: 540px) {\n    font-size: 20px !important;\n  }\n"], ["\n  font-size: 1.5rem;\n  @media only screen and (max-width: 540px) {\n    font-size: 20px !important;\n  }\n"])));
export var HeadersContainer = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: block;\n  background-color: rgb(130, 180, 143);\n  color: rgb(255, 249, 249);\n  margin: auto;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 7px 7px lightgrey;\n  text-align: center;\n  width: fit-content;\n\n  @media only screen and (max-width: 540px) {\n    width: 70%;\n  }\n"], ["\n  display: block;\n  background-color: rgb(130, 180, 143);\n  color: rgb(255, 249, 249);\n  margin: auto;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 7px 7px lightgrey;\n  text-align: center;\n  width: fit-content;\n\n  @media only screen and (max-width: 540px) {\n    width: 70%;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=elements.js.map
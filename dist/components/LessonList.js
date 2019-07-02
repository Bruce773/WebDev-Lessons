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
import Lesson from './Lesson.jsx';
import client from '../config/contentfulConfig.js';
var LessonList = /** @class */ (function (_super) {
    __extends(LessonList, _super);
    function LessonList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            lessons: [],
        };
        return _this;
    }
    LessonList.prototype.componentDidMount = function () {
        var _this = this;
        client.getEntries({ order: 'sys.createdAt' }).then(function (response) {
            var lessons = response.items.filter(function (lessonData) {
                return (lessonData.sys.contentType.sys.id === 'lesson' &&
                    lessonData.fields.classType[0] === _this.props.classType);
            });
            _this.setState({ lessons: lessons });
        });
    };
    LessonList.prototype.render = function () {
        var lessons = this.state.lessons;
        return (React.createElement("div", null,
            React.createElement("div", { className: "sm-spacer" }),
            lessons.length
                ? lessons.map(function (_a) {
                    var fields = _a.fields;
                    return (React.createElement(Lesson, { lessonTitle: fields.title, classDescription: fields.description, lessonLink: fields.gitHubLink, lessonVideo: fields.videoIframeLink, classType: fields.classType[0] }));
                })
                : React.createElement("h2", null, "Loading...")));
    };
    return LessonList;
}(React.Component));
export default LessonList;
//# sourceMappingURL=LessonList.js.map
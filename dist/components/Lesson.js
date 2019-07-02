import React from 'react';
var Lesson = function (_a) {
    var lessonTitle = _a.lessonTitle, lessonVideo = _a.lessonVideo, classType = _a.classType, classDescription = _a.classDescription, lessonLink = _a.lessonLink;
    return (React.createElement("div", { className: "lesson-div" },
        React.createElement("div", { className: "lesson-title text-wrap" },
            React.createElement("h3", null, lessonTitle)),
        React.createElement("div", { dangerouslySetInnerHTML: { __html: lessonVideo }, className: "iframe-container embed-responsive embed-responsive-4by3" }),
        React.createElement("div", { className: "class-type" }, classType),
        React.createElement("div", { className: "d-md-none d-xs-inline small-device-div" }, "For lesson description and exercises, please view on desktop/laptop device."),
        React.createElement("div", { className: "lesson-description text-wrap d-none d-md-inline" },
            React.createElement("p", { className: "lesson-description" }, classDescription)),
        lessonLink.map(function (item) { return (React.createElement("a", { className: "d-none d-md-inline", href: item.fields.link, target: "_blank" },
            React.createElement("button", { className: "lesson-link-button" }, item.fields.title))); })));
};
export default Lesson;
//# sourceMappingURL=Lesson.js.map
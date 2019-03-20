import React from 'react';

var Lesson = ({
  lessonTitle,
  lessonVideo,
  classType,
  classDescription,
  lessonLink,
}) => (
  <div className="lesson-div">
    <div className="lesson-title text-wrap">
      <h3>{lessonTitle}</h3>
    </div>
    <div className="iframe-container embed-responsive embed-responsive-4by3">
      {lessonVideo}
    </div>
    <div className="class-type">{classType}</div>
    <div className="d-md-none d-xs-inline small-device-div">
      For lesson description and exercises, please view on desktop/laptop
      device.
    </div>
    <div className="lesson-description text-wrap d-none d-md-inline">
      <p className="lesson-description">{classDescription}</p>
    </div>
    {lessonLink.map((item) => (
      <a className="d-none d-md-inline" href={item.fields.link} target="_blank">
        <button className="lesson-link-button">{item.fields.title}</button>
      </a>
    ))}
  </div>
);

export default Lesson;

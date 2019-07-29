import React from 'react';
import { Lesson } from '../Lesson';
import { FieldsTypes } from './LessonList';

interface PropTypes {
  fields: FieldsTypes;
  key: number;
}

export const CurrentVideo: React.FC<PropTypes> = ({ fields, key }) => {
  const { title, description, gitHubLink, videoIframeLink, classType } = fields;
  return (
    <Lesson
      lessonTitle={title}
      classDescription={description}
      lessonLink={gitHubLink}
      lessonVideo={videoIframeLink}
      classType={classType[0]}
      key={key}
    />
  );
};

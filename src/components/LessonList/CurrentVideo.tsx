import React from 'react';
import { Lesson } from '../Lesson';
import { FieldsTypes } from './LessonList';

interface PropTypes {
  fields: FieldsTypes;
}

export const CurrentVideo: React.FC<PropTypes> = ({ fields }) => {
  const { title, description, gitHubLink, videoIframeLink, classType } = fields;
  return (
    <Lesson
      lessonTitle={title}
      classDescription={description}
      lessonLink={gitHubLink}
      lessonVideo={videoIframeLink}
      classType={classType[0]}
    />
  );
};

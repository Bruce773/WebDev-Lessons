import React from 'react';
import { XsSpacer } from './GlobalComponents';
import { LessonList } from './LessonList';
import { PropTypes } from './NavBar';
import { SimplePaywall } from './SimplePaywall';

export const HTMLLesson: React.SFC<PropTypes> = ({ currentUser }) => (
  <>
    {currentUser ? (
      <>
        <XsSpacer spacing="40px" />
        <LessonList classType={'HTML'} />
      </>
    ) : (
      <SimplePaywall />
    )}
  </>
);

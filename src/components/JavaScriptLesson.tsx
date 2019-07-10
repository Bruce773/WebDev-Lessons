import * as React from 'react';
import { XsSpacer } from './GlobalComponents';
import { LessonList } from './LessonList';
import { PropTypes } from './NavBar';
import { SimplePaywall } from './SimplePaywall';

export const JavaScriptLesson: React.SFC<PropTypes> = ({ currentUser }) => (
  <>
    {currentUser ? (
      <>
        <XsSpacer spacing="40px" />
        <LessonList classType={'Javascript'} />
      </>
    ) : (
      <SimplePaywall />
    )}
  </>
);

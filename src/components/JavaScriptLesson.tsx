import * as React from 'react';
import { CurrentUserTypes } from '../Types';
import { XsSpacer } from './GlobalComponents';
import { LessonList } from './LessonList/LessonList';
import { SimplePaywall } from './SimplePaywall';

export const JavaScriptLesson: React.FC<CurrentUserTypes> = ({
  currentUser,
}) => (
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

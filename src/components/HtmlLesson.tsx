import React from 'react';
import { CurrentUserTypes } from '../Types';
import { XsSpacer } from './GlobalComponents';
import { LessonList } from './LessonList/LessonList';
import { SimplePaywall } from './SimplePaywall';

export const HTMLLesson: React.FC<CurrentUserTypes> = ({ currentUser }) => (
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

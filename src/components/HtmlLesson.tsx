import React from 'react';
import { XsSpacer } from './GlobalComponents';
import { LessonList } from './LessonList';

export const HTMLLesson: React.SFC = () => (
  <>
    <XsSpacer spacing="40px" />
    <LessonList classType={'HTML'} />
  </>
);

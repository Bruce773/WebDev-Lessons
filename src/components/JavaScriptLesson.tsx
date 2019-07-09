import * as React from 'react';
import { XsSpacer } from './GlobalComponents';
import { LessonList } from './LessonList';

export const JavaScriptLesson: React.SFC = () => (
  <>
    <XsSpacer spacing="40px" />
    <LessonList classType={'Javascript'} />
  </>
);

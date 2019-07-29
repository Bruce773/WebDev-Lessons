import Box from '@material-ui/core/Box';
import * as React from 'react';
import { Button, StyledIframe } from '../GlobalComponents';
import {
  ClassType,
  LessonDescription,
  LessonTitle,
  LessonWrapper,
} from './elements';

interface PropTypes {
  lessonTitle: string;
  classDescription: string;
  lessonLink: [{ fields: { link: string; title: string } }];
  lessonVideo: string;
  classType: string;
  key: number;
}

export const Lesson: React.SFC<PropTypes> = ({
  lessonTitle,
  classDescription,
  lessonLink,
  lessonVideo,
  classType,
  key,
}) => (
  <LessonWrapper key={key}>
    <LessonTitle>
      <h3>{lessonTitle}</h3>
    </LessonTitle>
    <StyledIframe video={lessonVideo} />
    <ClassType>{classType}</ClassType>
    <Box display={{ xs: 'inline', md: 'none' }}>
      For lesson description and exercises, please view on desktop/laptop
      device.
    </Box>
    <Box display={{ xs: 'none', md: 'inline' }}>
      <LessonDescription>
        <LessonDescription as="p">{classDescription}</LessonDescription>
      </LessonDescription>
    </Box>
    {lessonLink.map((item) => (
      <Box display={{ xs: 'none', md: 'block' }} marginTop="10px">
        <a href={item.fields.link} target="_blank">
          <Button>{item.fields.title}</Button>
        </a>
      </Box>
    ))}
  </LessonWrapper>
);

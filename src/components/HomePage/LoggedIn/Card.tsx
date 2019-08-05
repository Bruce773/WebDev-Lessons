import Grid from '@material-ui/core/Grid';
import * as React from 'react';
import {
  CardCourse,
  CardDescription,
  CardDuration,
  CardTitle,
  CardWrapper,
} from './elements';

interface PropTypes {
  title: string;
  description: string;
  course: string;
  duration: number;
}

export const Card: React.FC<PropTypes> = ({
  title,
  description,
  course,
  duration,
}) => (
  <CardWrapper>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description.slice(0, 200)}...</CardDescription>
    <Grid container>
      <Grid item xs={6}>
        <CardCourse>{course}</CardCourse>
      </Grid>
      <Grid item xs={6}>
        <CardDuration>{duration} Minutes</CardDuration>
      </Grid>
    </Grid>
  </CardWrapper>
);

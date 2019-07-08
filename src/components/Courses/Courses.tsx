import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, SmSpacer } from '../GlobalComponents';
import {
  CourseBenefits,
  CourseBenefitSub,
  CourseDescription,
  CourseHeader,
  CourseWrapper,
} from './elements';

export const Courses: React.SFC = () => (
  <>
    <SmSpacer />
    <CourseWrapper>
      <CourseHeader>JavaScript</CourseHeader>
      <CourseDescription>
        This course covers everything you'll need to start coding in the
        JavaScript language. We begin by introducing the tools you'll use as a
        21st-century web developer. You'll learn how to work with IDEs, Git and
        GitHub, the Terminal, and of course JavaScript! We then cover the
        fundamentals of the JavaScript language from functions to data
        structures and beyond. You'll learn:
        <CourseBenefits>
          <Box paddingLeft={2}>
            <Grid container>
              <Grid item md={6}>
                <li>Functions</li>
                <li>Data Types in JavaScript</li>
                <li>Objects and Arrays</li>
              </Grid>
              <Grid item md={6}>
                <li>Iteration</li>
                <li>Debugging skills</li>
                <li>And much more</li>
              </Grid>
            </Grid>
          </Box>
        </CourseBenefits>
      </CourseDescription>
      <Link to="/javascript/">
        <Button>Start Course</Button>
      </Link>
    </CourseWrapper>
    <CourseWrapper>
      <CourseHeader>HTML</CourseHeader>
      <CourseDescription>
        This course is perfect for brand new web developers who have little to
        no experience. Learn how to fluently program in the language used at the
        heart of every website. This course covers:
        <CourseBenefits>
          <Box paddingLeft={2}>
            <Grid container>
              <Grid item md={6}>
                <li>
                  Over 20 different HTML tags including:
                  <CourseBenefitSub>
                    <li>Headers</li>
                    <li>Anchor tags</li>
                    <li>Lists</li>
                    <li>Tables</li>
                    <li>Some HTML styling tags</li>
                  </CourseBenefitSub>
                </li>
              </Grid>
              <Grid item md={6}>
                <li>Some Git and GitHub</li>
                <li>The HTML Skeleton</li>
                <li>HTML Semantics</li>
                <li>Tag properties</li>
                <li>And much more</li>
              </Grid>
            </Grid>
          </Box>
        </CourseBenefits>
        <Link to="/html/">
          <Button>Start Course</Button>
        </Link>
      </CourseDescription>
    </CourseWrapper>
  </>
);

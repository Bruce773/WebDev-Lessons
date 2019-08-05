import * as React from 'react';
import { CurrentUserTypes } from '../../../Types';
import { Card } from './Card';
import { ContinueWatching } from './elements';

export const LoggedIn: React.FC<CurrentUserTypes> = ({ currentUser }) => {
  const { user_metadata } = currentUser;

  const stubData = [
    {
      course: 'Javascript',
      description: `This video is longer than most of the other lesson videos. In this video you'll learn how to setup the workspace you'll need when taking WebDev lessons. We cover GitHub, Terminal, and finally some of the basics of javascript functions. After watching this video, follow the link below for the GitHub exercise.`,
      duration: 46,
      title: 'GitHub, Terminal, and Basic JS Functions',
    },
  ];

  return (
    <>
      <h2>Welcome, {user_metadata.full_name.split(' ')[0]}</h2>
      <ContinueWatching>Continue where you left off</ContinueWatching>
      {stubData.map(({ course, description, title, duration }) => (
        <Card
          title={title}
          course={course}
          description={description}
          duration={duration}
        />
      ))}
    </>
  );
};

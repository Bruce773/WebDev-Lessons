import * as React from 'react';
import { CurrentUserTypes } from '../../../Types';

export const LoggedIn: React.FC<CurrentUserTypes> = ({ currentUser }) => {
  console.log(currentUser);
  return <h1>Welcome, {currentUser}</h1>;
};

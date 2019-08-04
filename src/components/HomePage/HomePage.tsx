import * as React from 'react';
import { CurrentUserTypes } from '../../Types';
import { LoggedIn } from './LoggedIn';
import { LoggedOut } from './LoggedOut';

export const HomePage: React.FC<CurrentUserTypes> = ({ currentUser }) => (
  <>{currentUser ? <LoggedIn currentUser={currentUser} /> : <LoggedOut />}</>
);

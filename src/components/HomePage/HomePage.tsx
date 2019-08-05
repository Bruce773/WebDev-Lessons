import * as React from 'react';
import { CurrentUserTypes } from '../../Types';
import { SmSpacer } from '../GlobalComponents';
import { LoggedIn } from './LoggedIn';
import { LoggedOut } from './LoggedOut';

export const HomePage: React.FC<CurrentUserTypes> = ({ currentUser }) => (
  <>
    <SmSpacer />
    {currentUser ? <LoggedIn currentUser={currentUser} /> : <LoggedOut />}
  </>
);

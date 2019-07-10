import netlifyIdentity from 'netlify-identity-widget';
import * as React from 'react';
import { XsSpacer } from './GlobalComponents';

export const SimplePaywall = () => (
  <>
    <XsSpacer spacing="50px" />
    <h1>Please login!</h1>
    <h2>
      Gain access to all of our free content by creating an account, today!
    </h2>
    {netlifyIdentity.open()}
  </>
);

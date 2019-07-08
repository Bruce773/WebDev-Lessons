import netlifyIdentity from 'netlify-identity-widget';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';

netlifyIdentity.init();

ReactDOM.render(<App />, document.getElementById('app'));

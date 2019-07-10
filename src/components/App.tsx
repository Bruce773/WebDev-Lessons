import netlifyIdentity from 'netlify-identity-widget';
import * as React from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { About } from './About';
import { Account } from './Account';
import { Courses } from './Courses/Courses';
import { GlobalStyles } from './elements';
import { Footer } from './Footer';
import { FourOFour } from './FourOFour';
import { HomePage } from './HomePage';
import { HTMLLesson } from './HtmlLesson';
import { JavaScriptLesson } from './JavaScriptLesson';
import { NavBar } from './NavBar/NavBar';
// tslint:disable-next-line: no-default-import
import ScrollToTop from './ScrollToTop';

netlifyIdentity.init();

export const App: React.SFC = () => {
  const user = netlifyIdentity.currentUser();
  const [currentUser, setCurrentUser] = useState(user);

  netlifyIdentity.on('logout', () => setCurrentUser(null));
  netlifyIdentity.on('login', (userInfo) => setCurrentUser(userInfo));

  const RemoveTrailingSlash = () => {
    const { pathname } = window.location;

    return pathname.substr(-1) === '/' ? (
      <Redirect to={pathname.substr(0, pathname.length - 1)} />
    ) : null;
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <div className="main">
          <GlobalStyles>
            <Route pattern="/" render={RemoveTrailingSlash} />
            <NavBar currentUser={currentUser} />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/about/" component={About} />
              <Route path="/courses/" component={Courses} />
              <Route
                path="/javascript/"
                render={() => <JavaScriptLesson currentUser={currentUser} />}
              />
              <Route
                path="/html/"
                render={() => <HTMLLesson currentUser={currentUser} />}
              />
              <Route
                path="/account/"
                render={() => <Account currentUser={currentUser} />}
              />
              <Route component={FourOFour} />
            </Switch>
            <Footer />
          </GlobalStyles>
        </div>
      </ScrollToTop>
    </Router>
  );
};

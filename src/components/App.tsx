import * as React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { About } from './About';
import { Courses } from './Courses';
import { GlobalStyles } from './elements';
import { Footer } from './Footer';
import { FourOFour } from './FourOFour';
import { HomePage } from './HomePage';
import { HTMLLesson } from './HtmlLesson';
import { JavaScriptLesson } from './JavaScriptLesson';
import { NavBar } from './NavBar';
import {ScrollToTop} from './ScrollToTop';

export const App: React.SFC = () => {
  const RemoveTrailingSlash = (location: any) => {
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
            <NavBar />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/about/" component={About} />
              <Route path="/courses/" component={Courses} />
              <Route path="/javascript/" component={JavaScriptLesson} />
              <Route path="/html/" component={HTMLLesson} />
              <Route component={FourOFour} />
            </Switch>
            <Footer />
          </GlobalStyles>
        </div>
      </ScrollToTop>
    </Router>
  );
};

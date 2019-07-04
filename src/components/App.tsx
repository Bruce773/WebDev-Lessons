import * as React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { HomePage } from './HomePage';
import { GlobalStyles } from './elements';
import About from './About';
import Courses from './Courses';
import FourOFour from './FourOFour';
import JavaScriptLesson from './JavaScriptLesson';
import HTMLLesson from './HtmlLesson';
import ScrollToTop from './ScrollToTop';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

export default class App extends React.Component<null, {}> {
  constructor(props: null) {
    super(props);
  }

  RemoveTrailingSlash(location: any) {
    const { pathname } = location;

    if (pathname.substr(-1) === '/') {
      return <Redirect to={pathname.substr(0, pathname.length - 1)} />;
    } else {
      return null;
    }
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <div className="main">
            <GlobalStyles>
              <Route pattern="/" render={this.RemoveTrailingSlash} />
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
  }
}

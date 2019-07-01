import React from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import { HomePage } from './HomePage/HomePage.tsx';
import { GlobalStyles } from './elements.tsx';
import About from '../components/About.jsx';
import Courses from '../components/Courses.jsx';
import FourOFour from './FourOFour.jsx';
import JavaScriptLesson from '../components/JavaScriptLesson.jsx';
import HTMLLesson from '../components/HtmlLesson.jsx';
import ScrollToTop from '../components/ScrollToTop.jsx';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      classType: null,
    };
  }

  _renderClass(classType) {
    this.setState({
      classType: classType,
    });
  }

  RemoveTrailingSlash({ location }) {
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

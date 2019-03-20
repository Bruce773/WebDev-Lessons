import React from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import HomePage from './HomePage.jsx';
import About from '../components/About.jsx';
import Courses from '../components/Courses.jsx';
import LessonList from './LessonList.jsx';
import FourOFour from './FourOFour.jsx';
import JavaScriptLesson from '../components/JavaScriptLesson.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link,
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
      <Router>
        <div className="main">
          <Route pattern="/" render={this.RemoveTrailingSlash} />
          <NavBar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about/" component={About} />
            <Route path="/courses/" component={Courses} />
            <Route path="/javascript/" component={JavaScriptLesson} />
            <Route component={FourOFour} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

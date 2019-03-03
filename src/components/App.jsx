import React from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import HomePage from './HomePage.jsx';
import About from '../components/About.jsx';
import Courses from '../components/Courses.jsx';
import LessonList from './LessonList.jsx';
import FourOFour from './FourOFour.jsx';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

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

  render() {
    return (
      <Router>
        <div className="main">
          <NavBar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about/" component={About} />
            <Route path="/courses/" component={Courses} />
            <Route component={FourOFour} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

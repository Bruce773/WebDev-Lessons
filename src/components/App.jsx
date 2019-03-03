import React from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import HomePage from './HomePage.jsx';
import About from '../components/About.jsx';
import LessonList from './LessonList.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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

          <Route path="/" exact component={HomePage} />
          <Route path="/about/" component={About} />
          
          <Footer />
        </div>
      </Router>
    );
  }
}

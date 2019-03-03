import React from 'react';
import HomePage from './HomePage';
import LessonList from './LessonList.jsx';

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
    return <HomePage />;
  }
}

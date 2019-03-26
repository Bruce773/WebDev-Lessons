import React from 'react';
import Lesson from './Lesson.jsx';
import client from '../config/contentfulConfig.js';

class LessonList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lessons: [],
    };
  }

  componentDidMount() {
    client.getEntries({ order: 'sys.createdAt' }).then((response) => {
      const lessons = response.items.filter((lessonData) => {
        return (
          lessonData.sys.contentType.sys.id === 'lesson' &&
          lessonData.fields.classType[0] === this.props.classType
        );
      });
      this.setState({ lessons: lessons });
    });
  }

  render() {
    const { lessons } = this.state;
    return (
      <div>
        <div className="sm-spacer" />
        {lessons.length
          ? lessons.map(({ fields }) => (
              <Lesson
                lessonTitle={fields.title}
                classDescription={fields.description}
                lessonLink={fields.gitHubLink}
                lessonVideo={fields.videoIframeLink}
                classType={fields.classType[0]}
              />
            ))
          : <h2>Loading...</h2>}
      </div>
    );
  }
}

export default LessonList;

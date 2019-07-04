import React from 'react';
import { Lesson } from './Lesson';
import client from '../config/contentfulConfig';

interface FieldsTypes {
  title: string;
  description: string;
  gitHubLink: [{ fields: { link: string; title: string } }];
  videoIframeLink: string;
  classType: [string];
}

interface ResponseTypes {
  items: [
    {
      sys: { contentType: { sys: { id: string } } };
      fields: FieldsTypes;
    }
  ];
}

interface StateTypes {
  lessons: Array<{
    fields: FieldsTypes;
  } | null>;
}

interface PropTypes {
  classType: string;
}

class LessonList extends React.Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props);

    this.state = {
      lessons: [],
    };
  }

  componentDidMount() {
    client
      .getEntries({ order: 'sys.createdAt' })
      .then((response: ResponseTypes) => {
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
        {lessons.length ? (
          lessons.map((item) => {
            if (item !== null) {
              const {
                title,
                description,
                gitHubLink,
                videoIframeLink,
                classType,
              } = item.fields;

              return (
                <Lesson
                  lessonTitle={title}
                  classDescription={description}
                  lessonLink={gitHubLink}
                  lessonVideo={videoIframeLink}
                  classType={classType[0]}
                />
              );
            }
          })
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    );
  }
}

export default LessonList;

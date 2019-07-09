import React from 'react';
// tslint:disable-next-line: no-default-import
import client from '../config/contentfulConfig';
import { Lesson } from './Lesson';

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

export class LessonList extends React.Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props);

    this.state = {
      lessons: [],
    };
  }

  // tslint:disable-next-line: member-access
  componentDidMount() {
    // tslint:disable-next-line: no-unsafe-any
    client
      .getEntries({ order: 'sys.createdAt' })
      .then((response: ResponseTypes) => {
        const lessons = response.items.filter((lessonData) => {
          return (
            lessonData.sys.contentType.sys.id === 'lesson' &&
            lessonData.fields.classType[0] === this.props.classType
          );
        });
        this.setState({ lessons });
      });
  }

  // tslint:disable-next-line: member-access
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

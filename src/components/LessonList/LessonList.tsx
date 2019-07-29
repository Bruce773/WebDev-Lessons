import React from 'react';
// tslint:disable-next-line: no-default-import
import client from '../../config/contentfulConfig';
import { XsSpacer } from '../GlobalComponents';
import { Button } from '../GlobalComponents';
import { CurrentVideo } from './CurrentVideo';

export interface FieldsTypes {
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
  currentLesson: number;
}

interface PropTypes {
  classType: string;
}

export class LessonList extends React.Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props);

    this.state = {
      currentLesson: 0,
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
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  // tslint:disable-next-line: member-access
  render() {
    const { lessons } = this.state;
    if (lessons.length) {
      return (
        <>
          <XsSpacer />
          {lessons[this.state.currentLesson] ? (
            <CurrentVideo
              key={this.state.currentLesson}
              fields={lessons[this.state.currentLesson].fields}
            />
          ) : null}
          <Button
            onClick={() => {
              // window.scrollTo(0, 0);
              console.log(lessons.length);
              if (
                this.state.currentLesson <= lessons.length &&
                this.state.currentLesson > 0
              ) {
                this.setState((state) => ({
                  currentLesson: state.currentLesson - 1,
                }));
              }
            }}
          >
            Previous
          </Button>
          <Button
            onClick={() => {
              // window.scrollTo(0, 0);
              if (this.state.currentLesson < lessons.length - 1) {
                this.setState((state) => ({
                  currentLesson: state.currentLesson + 1,
                }));
              }
            }}
          >
            Next
          </Button>
        </>
      );
    } else {
      return (
        <>
          <XsSpacer />
          <h2>Loading...</h2>
        </>
      );
    }
  }
}

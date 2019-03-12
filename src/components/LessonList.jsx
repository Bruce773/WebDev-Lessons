import React from 'react';
import Lesson from './Lesson.jsx';
// import client from '../config/contentfulConfig.js';
// import response from '../contentfulResponse.js';
import client from '../config/contentfulConfig.js';

class LessonList extends React.Component {
  constructor(props) {
    super(props);

    this.varObject = {
      collectionArr: [],
      classType: props.classType,
      configObj: {
        lessonLink: [],
      },
    };
  }

  /* { for (var i = 0; i < response.items.length; i++) { */
  buildConfigObj() {
    var varObject = this.varObject;
    // console.log(varObject);
    client.getEntries({ order: 'sys.createdAt' }).then((response) => {
      for (var i = 0; i < response.items.length; i++) {
        // console.log(item);
        var lessonData = response.items;
        var type = lessonData[i].sys.contentType.sys.id;
        if (type === 'lesson') {
          var currentItemClassType = lessonData[i].fields.classType[0]; //Get the classType ie(Javascript, HTML, CSS)
          if (currentItemClassType === varObject.classType) {
            var currentItemTitle = lessonData[i].fields.title; //Get title
            var currentItemVideo = lessonData[i].fields.videoIframeLink; //Get video link
            var currentItemDescr = lessonData[i].fields.description; //Get description
            // var currentItemLinkUrl = lessonData[i].fields.gitHubLink[0].fields.link
            // var currentItemLinkTitle = lessonData[i].fields.gitHubLink[0].fields.title

            varObject.configObj.lessonTitle = currentItemTitle;
            varObject.configObj.lessonVideo = currentItemVideo;
            varObject.configObj.classType = currentItemClassType;
            varObject.configObj.classDescription = currentItemDescr;

            for (var j = 0; j < lessonData[i].fields.gitHubLink.length; j++) {
              var currentItemLinkUrl =
                lessonData[i].fields.gitHubLink[j].fields.link;
              var currentItemLinkTitle =
                lessonData[i].fields.gitHubLink[j].fields.title;

              varObject.configObj.lessonLink.push({
                linkTitle: currentItemLinkTitle,
                linkUrl: currentItemLinkUrl,
              });
            }
          }
        }
        varObject.collectionArr.push(varObject.configObj);
        // console.log(varObject.collectionArr);
        console.log(varObject.classType);
      }
    });
  }

  render() {
    console.log('collectionArr: ' ,this.varObject.collectionArr);
    this.varObject.collectionArr.map((item) => {
      console.log('Item: ' ,item);
      return item;
    });
    return (
      <div>
        {this.buildConfigObj()}
        {this.varObject.collectionArr.map((item) => (
          <Lesson configObj={item} />
        ))}
      </div>
    );
  }
}

export default LessonList;

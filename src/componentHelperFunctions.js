import client from '../config/contentfulConfig.js';
import response from '../contentfulResponse.js';

response.then((data) => {
  for (var i = 0; i < data; i++) {
    var lessonData = response.items;
    var type = lessonData[i].sys.contentType.sys.id;
    if (type === 'lesson') {
      var currentItemClassType = lessonData[i].fields.classType[0]; //Get the classType ie(Javascript, HTML, CSS)
      if (currentItemClassType === classType) {
        var currentItemTitle = lessonData[i].fields.title; //Get title
        var currentItemVideo = lessonData[i].fields.videoIframeLink; //Get video link
        var currentItemDescr = lessonData[i].fields.description; //Get description
        // var currentItemLinkUrl = lessonData[i].fields.gitHubLink[0].fields.link
        // var currentItemLinkTitle = lessonData[i].fields.gitHubLink[0].fields.title

        configObj.lessonTitle = currentItemTitle;
        configObj.lessonVideo = currentItemVideo;
        configObj.classType = currentItemClassType;
        configObj.classDescription = currentItemDescr;

        for (var j = 0; j < lessonData[i].fields.gitHubLink.length; j++) {
          var currentItemLinkUrl =
            lessonData[i].fields.gitHubLink[j].fields.link;
          var currentItemLinkTitle =
            lessonData[i].fields.gitHubLink[j].fields.title;

          configObj.lessonLink.push({
            linkTitle: currentItemLinkTitle,
            linkUrl: currentItemLinkUrl,
          });
        }
      }
    }
    collectionArr.push(configObj);
  }
});

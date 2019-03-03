import client from './config/contentfulConfig.js'

var routes = {
  '/': homePageHTML,
  // '/contact': contactPageHTML,
  '/about': aboutPageHTML,
  '/courses': coursesPageHTML,
};

var introObj = {
  '0': [
    'Introduction to WebDev Lessons',
    '<iframe src="https://player.vimeo.com/video/308895468" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
  ],
};

//? <-- buildLesson helper function -->
var buildLesson = function(classType, response) {
  var appendContentToThis = `.main`;
  var classExists = false;

  var buildAndAppendAllClassLessons = function() {
    // debugger;
    $(appendContentToThis).append(
      `<h1 class="mainCourseHeader">${classType}</h1>`
    );
    for (var i = 0; i < response.items.length; i++) {
      var lessonData = response.items;
      var type = lessonData[i].sys.contentType.sys.id;
      //append html to $('.content') with correct data
      //Build each lesson "box" here
      if (type === 'lesson') {
        var currentItemClassType = lessonData[i].fields.classType[0]; //Get the classType ie(Javascript, HTML, CSS)
        if (currentItemClassType === classType) {
          classExists = true;
          // console.log(currentItemClassType);
          var lessonDiv = $('<div class="lesson-div"></div>'); //Build box for lesson
          var currentItemTitle = lessonData[i].fields.title; //Get title
          var currentItemVideo = lessonData[i].fields.videoIframeLink; //Get video link
          var currentItemDescr = lessonData[i].fields.description; //Get description
          // console.log('Title: ', currentItemLinkTitle, 'Link: ', currentItemLinkUrl);
          // console.log('Title: ', currentItemTitle, 'Description: ', currentItemDescr, 'GitHub Link: ', currentItemLink);
          var title = $(
            `<div class='lesson-title text-wrap'><h3>${currentItemTitle}</h3></div>`
          ); //Build title
          lessonDiv.append(title); //Place title inside the lesson box
          var lessonVideoContainer = $(
            "<div class='iframe-container embed-responsive embed-responsive-4by3'></div>"
          ); //Build container for video
          lessonVideoContainer.append(currentItemVideo); //Place video in video container
          lessonDiv.append(lessonVideoContainer); //Place the video box inside the lesson box
          var lessonClassType = $(
            `<div class='class-type'>${currentItemClassType}</div>`
          );
          lessonDiv.append(lessonClassType);
          var description = $(
            `<div class='d-md-none d-xs-inline small-device-div'>For lesson description and exercises, please view on desktop/laptop device.</div>
                  <div class='lesson-description text-wrap d-none d-md-inline'><p class='lesson-description'>${currentItemDescr}</p></div>`
          ); //Build description
          lessonDiv.append(description); //Place description inside lesson box
          // var currentItemLinkUrl = lessonData[i].fields.gitHubLink[0].fields.link
          // var currentItemLinkTitle = lessonData[i].fields.gitHubLink[0].fields.title
          for (var j = 0; j < lessonData[i].fields.gitHubLink.length; j++) {
            var currentItemLinkUrl =
              lessonData[i].fields.gitHubLink[j].fields.link;
            var currentItemLinkTitle =
              lessonData[i].fields.gitHubLink[j].fields.title;
            var link = $(
              `<a class="d-none d-md-inline" href='${currentItemLinkUrl}' target='_blank'><button class='lesson-link-button'>${currentItemLinkTitle}</button></a>`
            ); //Build link button
            lessonDiv.append(link); //Place link button inside lesson box
          }
          $(appendContentToThis).append(lessonDiv); //Place the lesson box inside the content area
        } else if (
          i === response.items.length - 1 &&
          currentItemClassType !== classType &&
          !classExists
        ) {
          $('.main').html(fourOhFourErroHTML);
        }
      }
    }
  };
  buildAndAppendAllClassLessons();
};
var _buildNavBar = function() {
  $('body').html('<div class="main"></div>');
  $('body').prepend(navbarHTML);
  _linkButtonClickToAnotherPage('navbarLink');
};

var _buildFooter = function() {
  var date = new Date();
  var year = date.getFullYear();
  var hr = $('<hr></hr>');
  var footer = $(`<p>Copyright ${year} &copy; WebDev Lessons</p>`).prepend(hr);
  $('.main').append(footer);
  // console.log('footer constructed');
};

window.onpopstate = () => {
  $('.main').html(routes[window.location.pathname]);
};

var _linkButtonClickToCoursePage = function(buttonClass) {
  $(`.${buttonClass}`).on('click', function(event) {
    event.preventDefault();
    var pathName = $(this).data('link');
    window.history.pushState({}, pathName, window.location.origin + pathName);
    $('.main').html(' ');
    _buildNavBar();
    var className = $(this).data('class');
    client.getEntries({ order: 'sys.createdAt' }).then(function(response) {
      $('.main').html(' ');
      buildLesson(`${className}`, response);
      // debugger;
      console.log('Lesson built!');
      _buildFooter();
    });
  });
};

var _linkButtonClickToAnotherPage = function(buttonClass) {
  var pathArr = window.location.pathname.split('/');
  if (!routes[`/${pathArr[1]}`]) {
    client.getEntries({ order: 'sys.createdAt' }).then(function(response) {
      $('.main').html(' ');
      buildLesson(`${pathArr[1]}`, response);
      _buildFooter();
    });
  }
  $(`.${buttonClass}`).on('click', function(event) {
    event.preventDefault();
    var pathName = $(this).data('link');
    window.history.pushState({}, pathName, window.location.origin + pathName);
    _buildNavBar();
    $('.main').html(routes[pathName]);
    _linkButtonClickToCoursePage('courseLink');
    _buildFooter();
  });
  _linkButtonClickToCoursePage('courseLink');
};
_linkButtonClickToAnotherPage('navbarLink');

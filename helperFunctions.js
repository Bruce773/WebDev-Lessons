//? <-- updateBadgeIcon helper function -->
var _updateBadgeIcon = (classType, response) => {
  var counter = 0;
  //iterate over every lesson
  for (var i = 0; i < response.items.length; i++) {
    var lessonData = response.items;
    var type = lessonData[i].sys.contentType.sys.id;
    //append html to $('.content') with correct data
    //Build each lesson "box" here
    if (type === 'lesson') {
      var currentItemClassType = lessonData[i].fields.classType[0]; //Get the classType ie(Javascript, HTML, CSS)
      if (currentItemClassType === classType) {
        counter++;
      }
    }
  }
  // console.log('ClassType: ', classType, ' Counter: ', counter);
  $(`.${classType}-badge`).html(counter);
};

//? <-- buildLesson helper function -->
var buildLesson = function(classType, response) {
  var appendContentToThis;

  var justButtonsObj = {
    Javascript:
      '<button class="full-width">JavaScript Lessons <span class="Javascript-badge badge badge-light">0</span><i class="right-arrow"></i></button>',
    HTML:
      '<button class="full-width">HTML Lessons <span class="HTML-badge badge badge-light">0</span><i class="right-arrow"></i></button>',
    CSS:
      '<button class="full-width">CSS Lessons <span class="CSS-badge badge badge-light">0</span><i class="right-arrow"></i></button>',
  };

  if (classType === 'HTML') {
    // clickVar = htmlBtn;
    // console.log("Classtype HTML");
    appendContentToThis = `.class-html`;
  } else if (classType === 'CSS') {
    // clickVar = cssBtn;
    // console.log("Classtype CSS");
    appendContentToThis = `.class-css`;
  } else if (classType === 'Javascript') {
    // clickVar = javascriptBtn
    // console.log("Classtype Javascript");
    appendContentToThis = `.class-javascript`;
  }
  var buildAndAppendAllClassLessons = function() {
    // debugger;
    for (var i = 0; i < response.items.length; i++) {
      var lessonData = response.items;
      var type = lessonData[i].sys.contentType.sys.id;
      //append html to $('.content') with correct data
      //Build each lesson "box" here
      if (type === 'lesson') {
        var currentItemClassType = lessonData[i].fields.classType[0]; //Get the classType ie(Javascript, HTML, CSS)
        if (currentItemClassType === classType) {
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
        }
      }
    }
  };
  //when the button is clicked
  //if button has already been clicked
  if (classSelectBtn === true) {
    //clear the html below it

    $(appendContentToThis).html(justButtonsObj[classType]);

    _updateBadgeIcon(classType, response);
    //set the click var to false
    classSelectBtn = false;
    //remove the class class-btn-div from appendContentToThis
    $(appendContentToThis).removeClass('class-btn-div');
    //change the arrow class to arrow-right
  } else if (classSelectBtn === false) {
    //else if button has not been clicked
    //set the click var to true
    classSelectBtn = true;
    //add the class class-btn-div to appendContentToThis
    $(appendContentToThis).addClass('class-btn-div');
    //change the arrow class to arrow-down
    $('.content')
      .find(`${appendContentToThis} .right-arrow`)
      .removeClass('right-arrow')
      .addClass('down-arrow');
    // $(".content").find(`${appendContentToThis} .full-width`).removeClass("full-width").addClass("complete-full-width");
    //build content
    buildAndAppendAllClassLessons();
  }
};

var _buildNavBar = function(pagesObj) {
  //Build a navbar on each page when it loads.
  //Strategy: Using the information from pagesObj append a div containing a list containing all
  //the links in the pagesObj

  //On page load
  var navDiv = $("<div class='navDiv'></div>");
  var navList = $("<ul class='navList'></ul>");
  var currentItemName;
  var currentItemLink;
  //iterate over pagesObj
  for (var i = 0; i < Object.keys(pagesObj).length; i++) {
    // console.log(i);
    currentItemName = Object.keys(pagesObj)[i];
    currentItemLink = pagesObj[currentItemName];
    // console.log(currentItemName, currentItemLink);
    var listItem = $(
      `<li class='navbarListItem'><a class='navbarLink' data-link='${currentItemLink}' href='${currentItemLink}'>${currentItemName}</a></li>`
    );
    navList.append(listItem);
  }
  navDiv.append(navList);
  //
  $('body').prepend(navDiv);
  console.log('navbar constructed');
};

var _buildFooter = function() {
  var date = new Date();
  var year = date.getFullYear();
  var hr = $('<hr></hr>');
  var footer = $(`<p>Copyright ${year} &copy; WebDev Lessons</p>`).prepend(hr);
  $('.main').append(footer);
  console.log('footer constructed');
};

let onNavItemClick = (pathName, routes) => {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  $('.main').html(routes[pathName]);
};

window.onpopstate = (routes) => {
  $('.main').html(routes[window.location.pathname]);
};

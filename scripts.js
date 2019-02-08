$(document).ready(function() {
  console.log('jQuery is loaded');
  var classSelectBtn = false;

  //Grab all the titles:
  //https://cdn.contentful.com/spaces/w7qayaxgvtbf/entries?access_token=89920bb55647070de973bbff6554a38e7e95e8c2f65bbc2fa868476bc2d488e9&content_type=lesson&select=fields.title
  //Change the word title on the last line to the field you want to get data from

  // Contentful stuff needed for it to run

  const client = contentful.createClient({
    space: 'w7qayaxgvtbf',
    environment: 'master', // defaults to 'master' if not set
    accessToken:
      '89920bb55647070de973bbff6554a38e7e95e8c2f65bbc2fa868476bc2d488e9'
  });

  var pagesObj = {
    Home: 'index.html',
    Contact: 'contact.html',
    About: 'about.html'
  };
  var introObj = {
    '0': [
      'Introduction to WebDev Lessons',
      '<iframe src="https://player.vimeo.com/video/308895468" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
    ]
  };

  var buildNavBar = function() {
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
        `<li class='navbarListItem'><a href='${currentItemLink}'>${currentItemName}</a></li>`
      );
      navList.append(listItem);
    }
    navDiv.append(navList);
    //
    $('body').prepend(navDiv);
  };
  buildNavBar();

  var buildFooter = function() {
    var date = new Date();
    var year = date.getFullYear();
    var hr = $('<hr></hr>');
    var footer = $(`<p>Copyright ${year} &copy; WebDev Lessons</p>`).prepend(
      hr
    );
    $('.main').append(footer);
  };
  buildFooter();

  var populateHomePageContent = function() {
    var buttonsObj = {
      Javascript:
        '<div class="class-javascript"><button class="full-width">JavaScript Lessons <span class="Javascript-badge badge badge-light">0</span><i class="right-arrow"></i></button></div>',
      HTML:
        '<div class="class-html"><button class="full-width">HTML Lessons <span class="HTML-badge badge badge-light">0</span><i class="right-arrow"></i></button></div>',
      CSS:
        '<div class="class-css"><button class="full-width">CSS Lessons <span class="CSS-badge badge badge-light">0</span><i class="right-arrow"></i></button></div>'
    };
    var justButtonsObj = {
      Javascript:
        '<button class="full-width">JavaScript Lessons <span class="Javascript-badge badge badge-light">0</span><i class="right-arrow"></i></button>',
      HTML:
        '<button class="full-width">HTML Lessons <span class="HTML-badge badge badge-light">0</span><i class="right-arrow"></i></button>',
      CSS:
        '<button class="full-width">CSS Lessons <span class="CSS-badge badge badge-light">0</span><i class="right-arrow"></i></button>'
    };
    //iterate over contentObj
    localStorage.setItem('WebDev-Lessons has been here', true);
    //  add to localstorage that the user has been here
    //  display all the content
    $('.content').html(' ');
    //Build intro video and title
    var currentItemVideo = introObj[0][1];
    var currentItemTitle = introObj[0][0];
    $('.content').append($(`<h2 class='intro-title'>${currentItemTitle}</h2>`));
    $('.content').append(
      '<div class="iframe-container-intro embed-responsive embed-responsive-4by3"></div>'
    );
    $('.iframe-container-intro').append(currentItemVideo);

    //* iterate over buttonsObj and append the lesson buttons to .content
    for (var i = 0; i < Object.keys(buttonsObj).length; i++) {
      $('.content').append($(buttonsObj[Object.keys(buttonsObj)[i]]));
    }

    //Build rest of content
    client
      .getEntries({ order: 'sys.createdAt' })
      .then(function(response) {
        // console.log(response.items);

        //? <------ Class Count Indicators ---->
        var _updateBadgeIcon = (classType) => {
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

        _updateBadgeIcon('HTML');
        _updateBadgeIcon('Javascript');
        _updateBadgeIcon('CSS');

        var buildLesson = function(classType) {
          var appendContentToThis;
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
            //! I'd recomend minimizing this function... it's large and doesn't get invoked until later
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
                  for (
                    var j = 0;
                    j < lessonData[i].fields.gitHubLink.length;
                    j++
                  ) {
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

            _updateBadgeIcon(classType);
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

        //? <------ Event Listeners For Class Dropdown Menus ----->
        $('.content')
          .find('.class-javascript')
          .on('click', 'button', function() {
            // classSelectBtn = false;
            // console.log("ran!");
            buildLesson('Javascript');
          });
        $('.content')
          .find('.class-html')
          .on('click', 'button', function() {
            // classSelectBtn = false;
            // console.log("ran!");
            buildLesson('HTML');
          });
        $('.content')
          .find('.class-css')
          .on('click', 'button', function() {
            // classSelectBtn = false;
            // console.log("ran!");
            buildLesson('CSS');
          });
      })
      .catch(console.error);
  };

  var checkForPreviousSiteVisit = function() {
    var localStorageItemCheck = localStorage.getItem(
      'WebDev-Lessons has been here'
    );
    //If the user is visiting the site for the first time
    if (localStorageItemCheck === null) {
      // localStorage.setItem("WebDev-Lessons has been here", true);
      // display click here to start button
      $('.content').html(' ');
      $('.content').prepend(
        $("<button class='start-btn'>Click here to start</button>")
      );
      //if the button gets clicked
      $('.start-btn').on('click', populateHomePageContent);

      //Else if the user has already visited the site
    } else if (localStorageItemCheck) {
      //display all the content
      populateHomePageContent();
    }
  };
  checkForPreviousSiteVisit();
});

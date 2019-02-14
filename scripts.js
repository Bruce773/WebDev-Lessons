var classSelectBtn = false;
$(document).ready(function() {
  console.log('jQuery is loaded');

  // Run
  //? live-server --port=3000 --entry-file=’/Users/brucejohnson/WebDev-Lessons/index.html’

  //Grab all the titles:
  //https://cdn.contentful.com/spaces/w7qayaxgvtbf/entries?access_token=89920bb55647070de973bbff6554a38e7e95e8c2f65bbc2fa868476bc2d488e9&content_type=lesson&select=fields.title
  //Change the word title on the last line to the field you want to get data from

  // Contentful stuff needed for it to run

  const client = contentful.createClient({
    space: 'w7qayaxgvtbf',
    environment: 'master', // defaults to 'master' if not set
    accessToken:
      '89920bb55647070de973bbff6554a38e7e95e8c2f65bbc2fa868476bc2d488e9',
  });

  var pagesObj = {
    Home: '/',
    Contact: '/contact',
    About: '/about',
  };
  var introObj = {
    '0': [
      'Introduction to WebDev Lessons',
      '<iframe src="https://player.vimeo.com/video/308895468" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    ],
  };

  var routes = {
    '/': homePageHTML,
    '/contact': contactPageHTML,
    '/about': aboutPageHTML,
  };

  // console.log(window.location.pathname);
  $('.main').html(routes[window.location.pathname]);

  _buildNavBar(pagesObj);
  _buildFooter();

  var populateHomePageContent = function() {
    var buttonsObj = {
      Javascript:
        '<div class="class-javascript"><button class="full-width">JavaScript Lessons <span class="Javascript-badge badge badge-light">0</span><i class="right-arrow"></i></button></div>',
      HTML:
        '<div class="class-html"><button class="full-width">HTML Lessons <span class="HTML-badge badge badge-light">0</span><i class="right-arrow"></i></button></div>',
      CSS:
        '<div class="class-css"><button class="full-width">CSS Lessons <span class="CSS-badge badge badge-light">0</span><i class="right-arrow"></i></button></div>',
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

        _updateBadgeIcon('HTML', response);
        _updateBadgeIcon('Javascript', response);
        _updateBadgeIcon('CSS', response);

        //? <------ Event Listeners For Class Dropdown Menus ----->
        $('.content')
          .find('.class-javascript')
          .on('click', 'button', function() {
            // classSelectBtn = false;
            // console.log("ran!");
            buildLesson('Javascript', response);
          });
        $('.content')
          .find('.class-html')
          .on('click', 'button', function() {
            // classSelectBtn = false;
            // console.log("ran!");
            buildLesson('HTML', response);
          });
        $('.content')
          .find('.class-css')
          .on('click', 'button', function() {
            // classSelectBtn = false;
            // console.log("ran!");
            buildLesson('CSS', response);
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

  var _linkButtonClickToAnotherPage = function(buttonClass, routes) {
    $(`.${buttonClass}`).on('click', function(event) {
      event.preventDefault();
      console.log($(this).data('link'));
      onNavItemClick($(this).data('link'), routes);
      _buildNavBar(pagesObj);
      if ($(this).data('link') === '/') {
        checkForPreviousSiteVisit();
      }
      _buildFooter();
    });
  };
  _linkButtonClickToAnotherPage('navbarLink', routes);
});

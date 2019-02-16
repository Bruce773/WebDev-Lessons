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
    Courses: '/courses',
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
    '/courses': coursesPageHTML,
  };

  // console.log(window.location.pathname);
  $('.main').html(routes[window.location.pathname]);

  _buildNavBar(pagesObj);
  _buildFooter();

  var populateHomePageContent = function() {
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
    var pathArr = window.location.pathname.split('/')
    console.log(pathArr[1], routes[pathArr[1]]);
    if(!routes[`/${pathArr[1]}`]){
      client.getEntries({ order: 'sys.createdAt' }).then(function(response) {
        $('.main').html(' ');
        buildLesson(`${pathArr[1]}`, response);
        _buildFooter();
      });
    }
    $(`.${buttonClass}`).on('click', function(event) {
      event.preventDefault();
      var pathName = $(this).data('link');
      // onLinkButtonClick($(this).data('link'), routes);
      window.history.pushState({}, pathName, window.location.origin + pathName);
      $('.main').html(routes[pathName]);
      _buildNavBar(pagesObj);
      if (pathName === '/') {
        checkForPreviousSiteVisit();
      }
      // if (pathName === '/courses') {
      //   _linkButtonClickToCoursePage('courseLink');
      // }
      _linkButtonClickToCoursePage('courseLink');
      _buildFooter();
    });
  };
  _linkButtonClickToAnotherPage('navbarLink', routes);

  var _linkButtonClickToCoursePage = function(buttonClass) {
    $(`.${buttonClass}`).on('click', function(event) {
      event.preventDefault();
      var pathName = $(this).data('link');
      // console.log(pathName);
      window.history.pushState({}, pathName, window.location.origin + pathName);
      $('.main').html(' ');
      _buildNavBar(pagesObj);
      var className = $(this).data('class');
      // console.log($(this).data('class'));
      client.getEntries({ order: 'sys.createdAt' }).then(function(response) {
        buildLesson(`${className}`, response);
        _buildFooter();
      });
    });
  };
});

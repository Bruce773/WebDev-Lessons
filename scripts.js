var classSelectBtn = false;
$(document).ready(function() {
  console.log('jQuery is loaded');

  // Run
  //? live-server --port=3000 --entry-file=’/Users/brucejohnson/WebDev-Lessons/index.html’

  //Grab all the titles:
  //https://cdn.contentful.com/spaces/w7qayaxgvtbf/entries?access_token=89920bb55647070de973bbff6554a38e7e95e8c2f65bbc2fa868476bc2d488e9&content_type=lesson&select=fields.title
  //Change the word title on the last line to the field you want to get data from

  _buildNavBar();
  $('.main').html(routes[window.location.pathname]);
  _buildFooter();

  //TODO: Fix Courses button on home page not working after navigating to the home page from somewhere else

  _linkButtonClickToAnotherPage('navbarLink');
});

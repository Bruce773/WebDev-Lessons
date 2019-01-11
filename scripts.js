$(document).ready(function() {
  console.log("jQuery is loaded");

  //Grab all the titles:
  //https://cdn.contentful.com/spaces/w7qayaxgvtbf/entries?access_token=89920bb55647070de973bbff6554a38e7e95e8c2f65bbc2fa868476bc2d488e9&content_type=lesson&select=fields.title
  //Change the word title on the last line to the field you want to get data from

  // require(["contentful"], function(contentful) {
  // //Contentful stuff needed for it to run
  // var contentful = require("contentful");

  const client = contentful.createClient({
    space: "w7qayaxgvtbf",
    environment: "master", // defaults to 'master' if not set
    accessToken:
      "89920bb55647070de973bbff6554a38e7e95e8c2f65bbc2fa868476bc2d488e9"
  });
  // client.getEntries().then(function(response) {
  //     console.log(response.items[0].fields.title);
  // }).catch(console.error);

  var pagesObj = {
    Home: "index.html",
    Contact: "contact.html"
  };
  var introObj = {
    "0": [
      "Introduction to WebDev Lessons",
      '<iframe src="https://player.vimeo.com/video/308895468" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
    ]
  };
  var contentObj = {
    "0": [
      "WebDev Lessons #1-A",
      '<iframe src="https://www.youtube-nocookie.com/embed/dKfXAoPhDmQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      "This video is longer than most of the other lesson videos. In this video you'll learn how to setup the workspace you'll need when taking WebDev lessons. We cover GitHub, Terminal, and finally some of the basics of javascript functions. After watching this video, follow the link below for the GitHub exercise.",
      "https://github.com/Bruce773/WebDev-functions"
    ],
    "1": [
      "WebDev Lessons #1-B",
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/ufSTrbu5oyE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      "This video covers function arguments. Learn what they are, how to use them, and how NOT to use them. Use the button below labeled Lesson Exercises for this lessons' exercises. Also, be sure to complete the function-exercises (also found below) before moving on to the next video.",
      {
        "0": [
          "Lesson Exercises",
          "https://github.com/Bruce773/WebDev-function-arguments"
        ],
        "1": [
          "Function-exercises",
          "https://github.com/Bruce773/WebDev-function-exercises"
        ]
      }
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
    $("body").prepend(navDiv);
  };
  buildNavBar();

  var buildFooter = function() {
    var date = new Date();
    var year = date.getFullYear();
    var hr = $("<hr></hr>");
    var footer = $(`<p>Copyright ${year} &copy; WebDev Lessons</p>`).prepend(
      hr
    );
    $(".main").append(footer);
  };
  buildFooter();

  var populateHomePageContent = function() {
    //iterate over contentObj
    localStorage.setItem("WebDev-Lessons has been here", true);
    //  add to localstorage that the user has been here
    //  display all the content
    $(".content").html(" ");
    //Build intro video and title
    var currentItemVideo = introObj[0][1];
    var currentItemTitle = introObj[0][0];
    $(".content").append($(`<h2 class='intro-title'>${currentItemTitle}</h2>`));
    $(".content").append(
      '<div class="iframe-container-intro embed-responsive embed-responsive-4by3"></div>'
    );
    $(".iframe-container-intro").append(currentItemVideo);
    //Build rest of content
    client
      .getEntries({ order: "sys.createdAt" })
      .then(function(response) {
        console.log(response.items);
        for (var i = 0; i < response.items.length; i++) {
          // for(var j = 0; j < )
          var lessonData = response.items;
          //append html to $('.content') with correct data
          // console.log(Object.keys(contentObj)[i]);
          //Build each lesson "box" here
          var lessonDiv = $('<div class="lesson-div"></div>'); //Build box for lesson
          var currentItemTitle = lessonData[i].fields.title; //Get title
          var currentItemVideo = lessonData[i].fields.videoIframeLink; //Get video link
          var currentItemDescr = lessonData[i].fields.description; //Get description
          var currentItemLink = lessonData[i].fields.gitHubRepoLinks;
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
          var description = $(
            `<div class='lesson-description text-wrap'><p class='lesson-description'>${currentItemDescr}</p></div>`
          ); //Build description
          lessonDiv.append(description); //Place description inside lesson box


          //Strategy: build an array where each item is a chracter of the link. Iterate over it and
          //search for a comma seperating two links. If a comma is found, save everything up until that point as one link. Then, before moving onto the next link, build the button with an <a> tag that has the link as it's href. Then, move on and build the rest of the buttons with the correct hrefs.

          //create an array called linksArr
          var linksArr = [];
          //iterate over each character currentItemLink
          // console.log(currentItemLink.length);
          for(var j = 0; j < currentItemLink.length; j++){
            //place each into linksArr as a string
            var currentChar = currentItemLink.charAt(j);
            // console.log(currentChar);
            linksArr.push(currentChar);
          //end iteration
          }
          // console.log(linksArr);

          //create an array called allLinksArr

          //Build a new function called iterateAndBuildAllLinksArr and pass in linksArr
            //create var counter = 0;
            //iterate over the array passed in as an argument to this function
              //if charAt !== ,
                //counter++
              //else if the array passed in as an argument to the iterateAndBuildAllLinksArr function is .length === 0
                //return null
              //else
                //this spot is going to take some experimenting...
                //you need to grab all the chars in linksArr up until this point and join them
                //then, push them into allLinksArr
                //then you need to have a recursion call where you slice the array (using counter... like I said... it's going to take some experimenting) and pass the new arr back into iterateAndBuildAllLinksArr().
            //end iteration
          //end iterateAndBuildAllLinksArr function

          var link = $(
            `<a href='${currentItemLink}' target='_blank'><button class='lesson-link-button'>Link to GitHub Repo</button></a>`
          ); //Build link button
          lessonDiv.append(link); //Place link button inside lesson box
          $(".content").append(lessonDiv); //Place the lesson box inside the content area
        }
      })
      .catch(console.error);
  };

  var checkForPreviousSiteVisit = function() {
    var localStorageItemCheck = localStorage.getItem(
      "WebDev-Lessons has been here"
    );
    //If the user is visiting the site for the first time
    if (localStorageItemCheck === null) {
      // localStorage.setItem("WebDev-Lessons has been here", true);
      // display click here to start button
      $(".content").html(" ");
      $(".content").prepend(
        $("<button class='start-btn'>Click here to start</button>")
      );
      //if the button gets clicked
      $(".start-btn").on("click", populateHomePageContent);

      //Else if the user has already visited the site
    } else if (localStorageItemCheck) {
      //display all the content
      populateHomePageContent();
    }
  };
  checkForPreviousSiteVisit();
});

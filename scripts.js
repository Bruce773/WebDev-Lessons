$(document).ready(function() {
  console.log("jQuery is loaded");

  var pagesObj = {
    Home: "index.html",
    Contact: "contact.html"
  };

  var contentObj = {
    "0": [
      "Introduction to WebDev Lessons",
      '<iframe src="https://player.vimeo.com/video/308895468" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
    ],
    "1": [
      "WebDev Lessons #1-A",
      '<iframe src="https://www.youtube-nocookie.com/embed/dKfXAoPhDmQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      "This video is longer than most of the other lesson videos. In this video you'll learn how to setup the workspace you'll need when taking WebDev lessons. We cover GitHub, Terminal, and finally some of the basics of javascript functions. After watching this video, follow the link below for the GitHub exercise.",
      "https://github.com/Bruce773/WebDev-functions"
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

  var populateHomePageContent = function() {
    //iterate over contentObj
    localStorage.setItem("WebDev-Lessons has been here", true);
    //  add to localstorage that the user has been here
    //  display all the content
    $(".content").html(" ");
    for (var i = 0; i < Object.keys(contentObj).length; i++) {
      //each array looks like this: [title, html for video, description and links]
      //append html to $('.content') with correct data
      console.log(Object.keys(contentObj)[i]);
      if (Object.keys(contentObj)[i] === "0") {
        //if this is the intro video
        var currentItemVideo = contentObj[i][1];
        var currentItemTitle = contentObj[i][0];
        $(".content").append($(`<h2>${currentItemTitle}</h2>`));
        $(".content").append('<div class="iframe-container-intro"></div>');
        $(".iframe-container-intro").append(currentItemVideo);
      } else {
        //Build each lesson "box" here
        var lessonDiv = $('<div class="lesson-div"></div>'); //Build box for lesson
        var currentItemTitle = contentObj[i][0];//Get title
        var currentItemVideo = contentObj[i][1];//Get video link      
        var currentItemDescr = contentObj[i][2];//Get description
        var currentItemLink = contentObj[i][3];
        // console.log('Title: ', currentItemTitle, 'Description: ', currentItemDescr, 'GitHub Link: ', currentItemLink);
        var title = $(`<div class='lesson-title'><h3>${currentItemTitle}</h3></div>`); //Build title
        lessonDiv.append(title);//Place title inside the lesson box
        var lessonVideoContainer = $("<div class='iframe-container'></div>"); //Build container for video
        lessonVideoContainer.append(currentItemVideo); //Place video in video container
        lessonDiv.append(lessonVideoContainer); //Place the video box inside the lesson box
        var description = $(`<div class='lesson-description'><p class='lesson-description'>${currentItemDescr}</p></div>`);//Build description
        lessonDiv.append(description);//Place description inside lesson box
        var link = $(`<a href='${currentItemLink}' target='_blank'><button class='lesson-link-button'>Link to GitHub Repo</button></a>`);//Build link button
        lessonDiv.append(link);//Place link button inside lesson box
        $('.content').append(lessonDiv);//Place the lesson box inside the content area
      }
    }
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

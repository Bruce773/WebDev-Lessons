$(document).ready(function() {
  console.log("jQuery is loaded");

  var pagesObj = {
    Home: "index.html"
  };

  var contentObj = {
    "0": [
      "Introduction to WebDev Lessons",
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
      // console.log(Object.keys(contentObj)[i]);
      if (Object.keys(contentObj)[i] === "0") {
        //if this is the intro video
        var currentItemVideo = contentObj[i][1];
        var currentItemTitle = contentObj[i][0];
        $(".content").append($(`<h2>${currentItemTitle}</h2>`));
        $(".content").append('<div class="iframe-container-intro"></div>');
        $(".iframe-container-intro").append(currentItemVideo);
      } else {
        //Build each lesson "box" here

        var currentItemVideo = $(`${contentObj[i][1]}`);
        $(".content").append(currentItemVideo);
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

$(document).ready(function() {
  console.log("jQuery is loaded");
  var pagesObj = {
    Home: "index.html",
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
       console.log(i);
       currentItemName = Object.keys(pagesObj)[i];
       currentItemLink = pagesObj[currentItemName];
       console.log(currentItemName, currentItemLink);
       var listItem = $(`<li><a href='${currentItemLink}'>${currentItemName}</a></li>`);
       navList.append(listItem);
    }
    navDiv.append(navList);
    //
    $("body").prepend(navDiv);
  };
  buildNavBar();
});

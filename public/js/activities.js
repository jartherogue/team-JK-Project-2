$(document).ready(function() {

var vpWidth = $(window).width();
var vpHeight = $(window).height();
var activityContainer = $("#activitiesTable");

getActivities();

$(document).on("submit", "#swipeRight", handleAuthorFormSubmit);
$(document).on("submit", "#swipeLeft", handleDeleteButtonPress);

$("#swipeMe").on("swipeleft", function () {
    var counter = parseInt($("#count").text()) + 1;
    $("#count").text(counter);
});

$("#swipeMe").on("swiperight", function () {
    var counter = parseInt($("#count").text()) - 1;
    $("#count").text(counter);
});

$("#pgPrev").click(function () {
    var counter = parseInt($("#count").text()) + 1;
    $("#count").text(counter); Í
});

$("#pgNext").click(function () {
    var counter = parseInt($("#count").text()) - 1;
    $("#count").text(counter);
});

  function displayDate(activitiesData) {
    var newTr = $("<tr>");
    newTr.data("activities", activitiesData);
    newTr.append("<td>" + activitiesData.date + "</td>");
    return newTr;
  }
  function displayTime(activitiesData) {
    var newTr = $("<tr>");
    newTr.data("activities", activitiesData);
    newTr.append("<td> " + activitiesData.time + "</td>");
    return newTr;
  }
  function displayImage(activitiesData) {
    var newTr = $("<tr>");
    newTr.data("activities", activitiesData);
    newTr.append("<td><a href=" + activitiesData.image + "'></a></td>");
    return newTr;
  }
  function displayDescription(activitiesData) {
    var newTr = $("<tr>");
    newTr.data("activities", activitiesData);
    newTr.append("<td> " + activitiesData.description + "</td>");
    return newTr;
  }
  function displayActivity(activitiesData) {
    var newTr = $("<tr>");
    newTr.data("activities", activitiesData);
    newTr.append("<td>" + activitiesData.date + "</td>");
    newTr.append("<td> " + activitiesData.time + "</td>");
    newTr.append("<td><a href=" + activitiesData.image + "'>Go to Posts</a></td>");
    newTr.append("<td> " + activitiesData.description + "</td>");
    return newTr;
  }

  function getActivities() {
    $.get("/api/activities", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(displayActivity(data[i]));
      }
      newActivity(rowsToAdd);
      nameInput.val("");
    });
  }


});
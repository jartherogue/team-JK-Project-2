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


// Make a get request to our api route that will return every book
$.get("/api/all", function(data) {
  // For each book that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold book data
    var wellSection = $("<div>");
    // Add a class to this div: 'well'
    wellSection.addClass("well");
    // Add an id to the well to mark which well it is
    wellSection.attr("id", "activity-well-" + i);
    // Append the well to the well section
    $("#swipeMe").append(wellSection);

    // Now  we add our book data to the well we just placed on the page
    $("#swipeMe" + i).append("<h3>Date: " + data[i].date + "</h4>");
    $("#swipeMe" + i).append("<h3>Time: " + data[i].time + "</h4>");
    $("#swipeMe" + i).append("<h3>City: " + data[i].city + "</h4>");
    $("#swipeMe" + i).append("<h3>State: " + data[i].state + "</h4>");
    $("#swipeMe" + i).append("<img src=" + data[i].photo + '>"</img>"');
    $("#swipeMe" + i).append("<h3>Description: " + data[i].description + "</h4>");
  }
});

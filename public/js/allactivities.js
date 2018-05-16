$('#pgNext').on('click', function (event) {
  $.get("/api/myactivities", function (response) {
    console.log(response);
    var userChoice = 0;
    userChoice++;
    var date = response[userChoice].date;
    var time = response[userChoice].time;
    var city = response[userChoice].city;
    var state = response[userChoice].state;
    var photo = response[userChoice].photo
    var description = response[userChoice].description;
    if (date = null) {
      console.log("error, no data found");
    } else {
      var dateDiv = $("<div id='dateDiv'>");
      var dateP = $("<p id='dateP'>" + "Event Date: " + date + "</p>");
      dateDiv.prepend(dateP);
      $("#dateTime").prepend(dateDiv);
    }
    if (time = null) {
      console.log("error, no data found");
    } else {
      var timeDiv = $("<div id='dateDiv'>");
      var timeP = $("<p id='timeP'>" + "Time of event: " + time + "</p>");
      timeDiv.prepend(timeP);
      $("#dateTime").prepend(timeDiv);
    }
    if (city = null) {
      console.log("error, no data found");
    } else {
      var cityDiv = $("<div id='cityDiv'>");
      var cityP = $("<p id='cityP'>" + "Event City: " + city + "</p>");
      cityDiv.prepend(cityP);
      $("#cityState").prepend(cityDiv);
    }
    if (state = null) {
      console.log("error, no data found");
    } else {
      var stateDiv = $("<div id='dateDiv'>");
      var stateP = $("<p id='stateP'>" + "Event State: " + state + "</p>");
      stateDiv.prepend(stateP);
      $("#cityState").prepend(stateDiv);
    }
    if (photo = null) {
      console.log("error, no data found");
    } else {
      var photoDiv = $("<div id='photoDiv'>");
      var photoImg = $("<img>");
      photoImg.attr("src", photo);
      photoImg.attr('alt', 'results image')
      photoDiv.prepend(photoImg);
      $("#photo").prepend(photoDiv);
    } if (description = null) {
      console.log("error, no data found");
    } else {
      var descriptionDiv = $("<div id='dateDiv'>");
      var descriptionP = $("<p id='descriptionP'>" + description + "</p>");
      descriptionDiv.prepend(descriptionP);
      $("#description").prepend(descriptionDiv);
    }
  });
});

//   // Make a get request to our api route that will return every book

  //   // For each book that our server sends us back
  //   for (var i = 0; i < data.length; i++) {
  //     // Create a parent div to hold book data
  //     var wellSection = $("<div>");
  //     // Add a class to this div: 'well'
  //     wellSection.addClass("well");
  //     // Add an id to the well to mark which well it is
  //     wellSection.attr("id", "activity-well-" + i);
  //     // Append the well to the well section
  //     $("#swipeMe").append(wellSection);

  //     // Now  we add our book data to the well we just placed on the page
  //     $("#swipeMe" + i).append("<h3>Date: " + data[i].date + "</h4>");
  //     $("#swipeMe" + i).append("<h3>Time: " + data[i].time + "</h4>");
  //     $("#swipeMe" + i).append("<h3>City: " + data[i].city + "</h4>");
  //     $("#swipeMe" + i).append("<h3>State: " + data[i].state + "</h4>");
  //     $("#swipeMe" + i).append("<img src=" + data[i].photo + '>"</img>"');
  //     $("#swipeMe" + i).append("<h3>Description: " + data[i].description + "</h4>");
  //   }
  // });

// The code in addactivities.js handles what happens when the user clicks the "create activity" button.

// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // Make a new Activity object
  var newActivity = {
    date: $("#date").val().trim(),
    time: $("#time").val().trim(),
    city: $("#city").val().trim(),
    state: $("#state").val().trim(),
    image: $("#image").val().trim(),
    description: $("#description").val().trim()
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newActivity)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#date").val("");
  $("#time").val("");
  $("#city").val("");
  $("#state").val("");
  $("#image").val("");
  $("#description").val("");

});

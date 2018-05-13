$(document).ready(function () {
  // Getting references to the name input and author container, as well as the table body
  $(document).on("submit", "#new-activity", insertActivity);
  function insertActivity(event) {
      event.preventDefault();
      var Activities = {
          date: $("#date-input").val().trim(),
          time: $("#time-input").val().trim(),
          city: $("#city-input").val().trim(),
          state: $("#state-input").val().trim(),
          photo: $("#image-input").val().trim(),
          description: $("#description-input").val().trim(),
      };
      $("#date-input").val("");
      $("#time-input").val("");
      $("#city-input").val("");
      $("#state-input").val("");
      $("#image-input").val("");
      $("#description-input").val("");

      $.post("/api/activities", Activities);
  }
});

  // Empty each input box by replacing the value with an empty string




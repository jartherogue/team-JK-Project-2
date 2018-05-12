$(document).ready(function() {
    // Getting a reference to the input field where user adds a new todo
    var $newItemInput = $("input.new-item");
    // Our new todos will go inside the todoContainer
    var $activitiesContainer = $(".activities-container");
    // Adding event listeners for deleting, editing, and adding todos
    $(document).on("click", "button.delete", deleteActivity);
    $(document).on("click", ".activity-item", editActivity);
    $(document).on("keyup", ".activity-item", finishEdit);
    $(document).on("blur", ".activity-item", cancelEdit);
    $(document).on("submit", "#activity-form", insertActivity);
   
    
    var activities = [];
   
   
    getActivities();
   
    // This function resets the todos displayed with new todos from the database
    function initializeRows() {
      $activitiesContainer.empty();
      var rowsToAdd = [];
      for (var i = 0; i < activities.length; i++) {
        rowsToAdd.push(createNewRow(activities[i]));
      }
      $activitiesContainer.prepend(rowsToAdd);
    }
   
    // This function grabs todos from the database and updates the view
    function getActivity() {
      $.get("/api/activities", function(data) {
        activities = data;
        initializeRows();
      });
    }
   
    // This function deletes a todo when the user clicks the delete button
    function deleteActivity(event) {
      event.stopPropagation();
      var id = $(this).data("id");
      $.ajax({
        method: "DELETE",
        url: "/api/activities/" + id
      }).then(getActivity);
    }
   
    // This function handles showing the input box for a user to edit an activity
    function editActivity() {
      var currentActivity = $(this).data("activities");
      $(this).children().hide();
      $(this).children("input.edit").val(currentActivity.text);
      $(this).children("input.edit").show();
      $(this).children("input.edit").focus();
    }
   
    // This function starts updating a todo in the database if a user hits the "Enter Key"
    // While in edit mode
    function finishEdit(event) {
      var updatedActivity = $(this).data("activities");
      if (event.which === 13) {
        updatedActivity.text = $(this).children("input").val().trim();
        $(this).blur();
        updateActivity(updatedActivity);
      }
    }
   
    // This function updates an activity in our database
    function updateActivity(activities) {
      $.ajax({
        method: "PUT",
        url: "/api/activities",
        data: activities
      }).then(getActivities);
    }
   
    // This function is called whenever a todo item is in edit mode and loses focus
    // This cancels any edits being made
    function cancelEdit() {
      var currentActivity = $(this).data("activities");
      if (currentActivity) {
        $(this).children().hide();
        $(this).children("input.edit").val(currentActivity.text);
        $(this).children("span").show();
        $(this).children("button").show();
      }
    }
   
    // This function constructs an activity row
    function createNewRow(activitie) {
      var $newInputRow = $(
        [
          "<li class='list-group-item activitie-item'>",
          "<span>",
          activities.text,
          "</span>",
          "<input type='text' class='edit' style='display: none;'>",
          "<button class='delete btn btn-danger'>x</button>",
          "<button class='complete btn btn-primary'>✓</button>",
          "</li>"
        ].join("")
      );
   
      $newInputRow.find("button.delete").data("id", activities.id);
      $newInputRow.find("input.edit").css("display", "none");
      $newInputRow.data("activitie", activities);
      if (activities.complete) {
        $newInputRow.find("span").css("text-decoration", "line-through");
      }
      return $newInputRow;
    }
   
    // This function inserts a new activity into our database and then updates the view
    function insertActivity(event) {
      event.preventDefault();
      var activities = {
        text: $newItemInput.val().trim(),
        complete: false
      };
   
      $.post("/api/activities", activities, getActivities);
      $newItemInput.val("");
    }
   });
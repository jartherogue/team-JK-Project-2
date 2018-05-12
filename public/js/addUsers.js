$(document).ready(function () {
    // Getting references to the name input and author container, as well as the table body
    $(document).on("submit", "#user-form", insertUser);
    function insertUser(event) {
        event.preventDefault();
        var User = {
            first_name: $("#first_name").val().trim(),
            last_name: $("#last_name").val().trim(),
            email_address: $("#email").val().trim(),
            password: $("#password").val().trim(),
        };
        $("#first_name").val("");
        $("#last_name").val("");
        $("#email").val("");
        $("#password").val("");

        $.post("/api/users", User);
    }
});

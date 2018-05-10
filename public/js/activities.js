var vpWidth = $(window).width();
var vpHeight = $(window).height();

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





// input new activity
// on click submit button adds trains
$("#submit-button").on('click', function () {
    //user input
    var Date = $("#date-input").val().trim();
    var Time = $("#time-input").val().trim();
    var City = $("#city-input").val().trim();
    var State = $("#state-input").val().trim();
    var Image = $("#image-input").val().trim();
    var Description = $("#description-input").val().trim();

    // local new train place holder
    var actitivies = {
        Date: Date,
        Time: Time,
        City: City,
        State: State,
        Image: Image,
        Description: Description
    }
    $.post("/api/activities", actitivies).then(function (response) {
        $.get("/api/activiies", function (req, res) {
            console.log("test");
        });
    })


    // app.post("/api/activities", function (req, res) {
    //     // create takes an argument of an object describing the item we want to
    //     // insert into our table. In this case we just we pass in an object with a text
    //     // and complete property
    //     db.Todo.create({
    //         text: req.body.text,
    //         complete: req.body.complete
    //     }).then(function (dbTodo) {
    //         // We have access to the new todo as an argument inside of the callback function
    //         res.json(dbTodo);
    //     });
    // });





    // console log input New train variables
    console.log(Date);
    console.log(Time);
    console.log(City);
    console.log(State);
    console.log(Image);
    console.log(Description);

    //uploads input to firebase
    // db.ref().push(newActivity);

    // clears input fields
    $('input').val("");

})
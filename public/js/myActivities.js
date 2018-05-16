$(document).ready(function () {
    console.log("this is loaded");
    var vpWidth = $(window).width();
    var vpHeight = $(window).height();
    
    // $("#swipeMe").on("swipeleft", function () {
    //     var counter = parseInt($("#count").text()) + 1;
    //     $("#count").text(counter);
    // });

    // $("#swipeMe").on("swiperight", function () {
    //     var counter = parseInt($("#count").text()) - 1;
    //     $("#count").text(counter);
    // });

    // $("#pgPrev").click(function () {
    //     var counter = parseInt($("#count").text()) + 1;
    //     $("#count").text(counter); Í
    // });

    // $("#pgNext").click(function () {
    //     var counter = parseInt($("#count").text()) - 1;
    //     $("#count").text(counter);
    // });
    
    $.ajax({
        method: "GET"
        , url: "http://localhost:8081/api/myactivities"
    }).then(function (response) {
        console.log(response);

        var date = response[0].date;
        var time = response[0].time;
        var city = response[0].city;
        var state = response[0].state;
        var photo = response[0].photo
        var description = response[0].description;
        if (response.date = null) {
            console.log("error, no data found");
        } else {
            var dateDiv = $("<div id='dateDiv'>" );
            var dateP = $("<p id='dateP'>" + "Event Date: " + date + "</p>");
            dateDiv.prepend(dateP);
            $("#dateTime").prepend(dateDiv);
        }
        if (response.time = null) {
            console.log("error, no data found");
        } else {
            var timeDiv = $("<div id='dateDiv'>");
            var timeP = $("<p id='timeP'>" + "Time of event: " + time + "</p>");
            timeDiv.prepend(timeP);
            $("#dateTime").prepend(timeDiv);
        }
        if (response.city = null) {
            console.log("error, no data found");
        } else {
            var cityDiv = $("<div id='cityDiv'>");
            var cityP = $("<p id='cityP'>" + "Event City: " + city + "</p>");
            cityDiv.prepend(cityP);
            $("#cityState").prepend(cityDiv);
        }
        if (response.state = null) {
            console.log("error, no data found");
        } else {
            var stateDiv = $("<div id='dateDiv'>");
            var stateP = $("<p id='stateP'>" + "Event State: "+ state + "</p>");
            stateDiv.prepend(stateP);
            $("#cityState").prepend(stateDiv);
        }
        if (response.photo = null) {
            console.log("error, no data found");
        } else {
            var photoDiv = $("<div id='photoDiv'>");
            var photoImg = $("<img>");
            photoImg.attr("src", photo);
            photoImg.attr('alt', 'results image')
            photoDiv.prepend(photoImg);
            $("#photo").prepend(photoDiv);
        } if (response.description = null) {
            console.log("error, no data found");
        } else {
            var descriptionDiv = $("<div id='dateDiv'>");
            var descriptionP = $("<p id='descriptionP'>" + description + "</p>");
            descriptionDiv.prepend(descriptionP);
            $("#description").prepend(descriptionDiv);
        }
    });
});

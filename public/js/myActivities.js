$(document).ready(function () {
    console.log("this is loaded");
    var vpWidth = $(window).width();
    var vpHeight = $(window).height();
    var activityContainer = $("#activitiesTable");


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
    $(document).load(function () {
        $.ajax({
            url: "http://localhost:8081/api/activities",
            method: "GET"
        }).then(function (response) {
            json.stringify(response);
            console.log(response);
            var date = response[0].date;
            var time = response.time;
            var city = response.city;
            var state = response.state;
            var photo = response.photo
            var description = response.description;
            if (response.date = null) {
                console.log("error, no data found");
            } else {
                var dateDiv = $("<div id='dateDiv' class='col-sm-6'>");
                var dateP = $("<p id='dateP'>" + date + "</p>");
                dateDiv.prepend(dateP);
                $("#dateTime").prepend(dateDiv);
            }
            if (response.time = null) {
                console.log("error, no data found");
            } else {
                var timeDiv = $("<div id='dateDiv' class='col-sm-6'>");
                var timeP = $("<p id='timeP'>" + time + "</p>");
                timeDiv.prepend(timeP);
                $("#dateTime").prepend(timeDiv);
            }
            if (response.city = null) {
                console.log("error, no data found");
            } else {
                var cityDiv = $("<div id='cityDiv' class='col-sm-6'>");
                var cityP = $("<p id='cityP'>" + city + "</p>");
                cityDiv.prepend(cityP);
                $("#cityState").prepend(cityDiv);
            }
            if (response.state = null) {
                console.log("error, no data found");
            } else {
                var stateDiv = $("<div id='dateDiv' class='col-sm-6'>");
                var stateP = $("<p id='stateP'>" + state + "</p>");
                stateDiv.prepend(stateP);
                $("#cityState").prepend(stateDiv);
            }
            if (response.photo = null) {
                console.log("error, no data found");
            } else {
                var photoDiv = $("<div id='photoDiv' class='col-sm-12'>");
                var photoImg = $("<img>");
                gifImage.attr("src", results.photo);
                gifImage.attr('alt', 'results image')
                photoDiv.prepend(photoImg);
                $("#photo").prepend(photoDiv);
            } if (response.description = null) {
                console.log("error, no data found");
            } else {
                var descriptionDiv = $("<div id='dateDiv' class='col-sm-12'>");
                var descriptionP = $("<p id='descriptionP'>" + description + "</p>");
                descriptionDiv.prepend(descriptionP);
                $("#description").prepend(descriptionDiv);
            }
        });
    });
});

$(document).ready(function () {


    $(".btn").click(function () {
        event.preventDefault();
        var train = $("#input-train-name").val().trim();
        var destination = $("#input-destination").val().trim();
        var firstTrain = $("#input-first-train-time").val().trim();
        var frequency = $("#input-frequency").val().trim();

        var trainArrivalsArray = [];
        trainArrivalsArray.push(firstTrain)
        
        

        var markup = "<tr><td>" + train + "</td><td>" + destination + "</td><td>" + frequency + "</td></tr>";

        $("table tbody").append(markup);


    });










});
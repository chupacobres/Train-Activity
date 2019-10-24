$(document).ready(function () {


    $(".btn").click(function () {
        event.preventDefault();
        var train = $("#input-train-name").val().trim();
        var destination = $("#input-destination").val().trim();
        var firstTrain = $("#input-first-train-time").val().trim();
        var frequency = $("#input-frequency").val().trim();
        // Convert first train hour to minutes
        var firstTrainHoursMinutesArr = firstTrain.split(":", 2);
        var firstTrainHours = parseInt(firstTrainHoursMinutesArr[0]);
        var firstTrainMinutes = parseInt(firstTrainHoursMinutesArr[1]);
        var firstTrainHoursToMinutes = firstTrainHours * 60
        var firstTrainMinutesTotal = (firstTrainHoursToMinutes) + firstTrainMinutes
        console.log(firstTrainMinutesTotal);
        // Convert present time to minutes
        var timeNow = new Date();
        var getHours = timeNow.getHours();
        var getMinutes = timeNow.getMinutes();
        var timeNowinMinutes = (getHours * 60) + getMinutes

        // While loop to verify if "on time" for next train
        while (timeNowinMinutes > firstTrainMinutesTotal) {
            firstTrainMinutesTotal = parseInt(firstTrainMinutesTotal) + parseInt(frequency)
        }

        






        var markup = "<tr><td>" + train + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + firstTrainMinutesTotal + "</td></tr>";

        $("table tbody").append(markup);


    });










});
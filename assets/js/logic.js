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
        // Convert present time to minutes
        var timeNow = new Date();
        var getHours = timeNow.getHours();
        var getMinutes = timeNow.getMinutes();
        var timeNowinMinutes = (getHours * 60) + getMinutes
        // Get next train time by verifying that next train is in the future nd not in the past
        while (timeNowinMinutes > firstTrainMinutesTotal) {
            firstTrainMinutesTotal = parseInt(firstTrainMinutesTotal) + parseInt(frequency)
        }
        var nextTrainArrivalHour = parseInt(firstTrainMinutesTotal / 60)
        var minutesAway = firstTrainMinutesTotal - timeNowinMinutes
        nextTrainArrivalMinutes = Math.abs(getMinutes + minutesAway - 60);
        if (nextTrainArrivalMinutes < 10) {
            nextTrainArrivalMinutes = "0" + nextTrainArrivalMinutes
        }
        // Add data to table inside html page
        var markup = "<tr><td>" + train + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + nextTrainArrivalHour + ":" + nextTrainArrivalMinutes + "</td><td>" + minutesAway + "</td></tr>";

        $("table tbody").append(markup);


    });










});
$(document).ready(function () {


    $(".btn").click(function () {
        event.preventDefault();
        var train = $("#input-train-name").val().trim();
        var destination = $("#input-destination").val().trim();
        var firstTrain = $("#input-first-train-time").val().trim();
        var frequency = $("#input-frequency").val().trim();
        // Convert first train hour to minutes
        var firstTrainHoursMinutesArr = firstTrain.split(":", 2);
        console.log("split of first train time is :" + firstTrainHoursMinutesArr)
        var firstTrainHours = parseInt(firstTrainHoursMinutesArr[0]);
        console.log("hour of first train is: " + firstTrainHours)
        var firstTrainMinutes = parseInt(firstTrainHoursMinutesArr[1]);
        console.log("minutes of first train is: " + firstTrainMinutes)
        var firstTrainHoursToMinutes = firstTrainHours * 60
        console.log("first train hours converted to minutes is: "+ firstTrainHoursToMinutes) 
        var firstTrainMinutesTotal = (firstTrainHoursToMinutes) + firstTrainMinutes
        console.log("first train time in minutes is: " + firstTrainMinutesTotal)
        // Convert present time to minutes
        var timeNow = new Date();
        console.log("the time now is: " + timeNow)
        var getHours = timeNow.getHours();
        console.log("hours now: " + getHours)
        var getMinutes = timeNow.getMinutes();
        console.log("minutes now: " + getMinutes)
        var timeNowinMinutes = (getHours * 60) + getMinutes
        console.log("time now total in minutes is: " + timeNowinMinutes)
        // Get next train time by verifying that next train is in the future and not in the past
        while (timeNowinMinutes > firstTrainMinutesTotal) {
            firstTrainMinutesTotal = parseInt(firstTrainMinutesTotal) + parseInt(frequency)
        }
        var nextTrainArrivalHour = parseInt(firstTrainMinutesTotal / 60)
        console.log("next train hour arrive is: " + nextTrainArrivalHour)
        var minutesAway = firstTrainMinutesTotal - timeNowinMinutes
        console.log("The next train is " + minutesAway + " minutes away")
        nextTrainArrivalMinutes = (getMinutes + minutesAway);
        if (nextTrainArrivalMinutes >= 60){
            nextTrainArrivalMinutes = nextTrainArrivalMinutes - 60
        }
       
        if (nextTrainArrivalMinutes < 10) {
            nextTrainArrivalMinutes = "0" + nextTrainArrivalMinutes
        }
        console.log("next train minutes arrive is " + nextTrainArrivalMinutes)
        // Add data to table inside html page
        var markup = "<tr><td>" + train + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + nextTrainArrivalHour + ":" + nextTrainArrivalMinutes + "</td><td>" + minutesAway + "</td></tr>";

        $("table tbody").append(markup);


    });










});
$(document).ready(function () {
    const firebaseConfig = {
        apiKey: "AIzaSyBZMKNVVNccQH7dK5tOMDDihvfD2DH6mvY",
        authDomain: "class-eb4e2.firebaseapp.com",
        databaseURL: "https://class-eb4e2.firebaseio.com",
        projectId: "class-eb4e2",
        storageBucket: "class-eb4e2.appspot.com",
        messagingSenderId: "150967187375",
        appId: "1:150967187375:web:ff83b771988c2420ef215a",
        measurementId: "G-9WJLLVQRQ4"
    };
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();

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
        // Get next train time by verifying that next train is in the future and not in the past
        while (timeNowinMinutes > firstTrainMinutesTotal) {
            firstTrainMinutesTotal = parseInt(firstTrainMinutesTotal) + parseInt(frequency)
        }
        var nextTrainArrivalHour = parseInt(firstTrainMinutesTotal / 60)
        var minutesAway = firstTrainMinutesTotal - timeNowinMinutes
        nextTrainArrivalMinutes = (getMinutes + minutesAway);
        if (nextTrainArrivalMinutes >= 60 && nextTrainArrivalMinutes <120) {
            nextTrainArrivalMinutes = nextTrainArrivalMinutes - 60
        }
        if (nextTrainArrivalMinutes >= 120 && nextTrainArrivalMinutes <180) {
            nextTrainArrivalMinutes = nextTrainArrivalMinutes - 120
        }
        if (nextTrainArrivalMinutes >= 180 && nextTrainArrivalMinutes <240) {
            nextTrainArrivalMinutes = nextTrainArrivalMinutes - 180
        }
        if (nextTrainArrivalMinutes >= 240 && nextTrainArrivalMinutes <300) {
            nextTrainArrivalMinutes = nextTrainArrivalMinutes - 240
        }
        if (nextTrainArrivalMinutes >= 300 && nextTrainArrivalMinutes <360) {
            nextTrainArrivalMinutes = nextTrainArrivalMinutes - 300
        }
        if (nextTrainArrivalMinutes >= 360 && nextTrainArrivalMinutes <420) {
            nextTrainArrivalMinutes = nextTrainArrivalMinutes - 360
        }  
        if (nextTrainArrivalMinutes < 10) {
            nextTrainArrivalMinutes = "0" + nextTrainArrivalMinutes
        }
        var nextTrainArrivalFinal = nextTrainArrivalHour + ":" + nextTrainArrivalMinutes
        
        database.ref().set({
            train: train,
            destination: destination,
            frequency: frequency,
            firstTrain: firstTrain,
            nextTrainArrivalFinal: nextTrainArrivalFinal,
            minutesAway: minutesAway

        });
        // Add data to table inside html page
        database.ref().on("value", function (snapshot) {
            console.log(snapshot.val());
            console.log(snapshot.val().train);
            console.log(snapshot.val().destination);
            console.log(snapshot.val().firstTrain);
            console.log(snapshot.val().frequency);
            console.log(snapshot.val().nextTrainArrivalFinal);
            console.log(snapshot.val().minutesAway);

            var markup = "<tr><td>" + snapshot.val().train + "</td><td>" + snapshot.val().destination + "</td><td>" + snapshot.val().frequency + "</td><td>" + nextTrainArrivalFinal + "</td><td>" + minutesAway + "</td></tr>";

            $("table tbody").append(markup);
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });

    });



});
const arrayTrips = [
    {
        destination: "Whalescape Odyssey",
        duration: 1,
        departure: "06:00",
        code: "0106",
        image: "Moments by Kai Yan & Matt Walch.jpg"
    },
    {
        destination: "WhaleSong Sojourns",
        duration: 1.5,
        departure: "07:00",
        code: "1507",
        image: "Family by Kai Yan & Matt Walch.jpg"
    },
    {
        destination: "Oceanic WhaleQuest",
        duration: 2,
        departure: "08:00",
        code: "0208",
        image: "Together by Kai Yan & Matt Walch.jpg"
    },
    {
        destination: "Celestial WhaleWander",
        duration: 2.5,
        departure: "09:00",
        code: "2509",
        image: "Catharsis by Matt Walch.jpg"
    },
    {
        destination: "Neptune's WhalePassage",
        duration: 3,
        departure: "10:00",
        code: "0310",
        image: "Between Two Worlds by Matt Walch.jpg"
    },
    {
        destination: "Serene WhaleHarbor",
        duration: 3.5,
        departure: "11:00",
        code: "3511",
        image: "Tales From The Blue Planet by Matt Walch.jpg"
    },
    {
        destination: "WhaleRider Retreats",
        duration: 4,
        departure: "12:00",
        code: "0412",
        image: "Shelter by Matt Walch.jpg"
    },
    {
        destination: "Tranquil WhaleCove",
        duration: 4.5,
        departure: "13:00",
        code: "4513",
        image: "First Light by Matt Walch.jpg"
    },
    {
        destination: "Whispering WhaleShores",
        duration: 5,
        departure: "14:00",
        code: "0514",
        image: "Redemption by Matt Walch.jpg"
    },
    {
        destination: "Solstice WhaleSails",
        duration: 5.5,
        departure: "15:00",
        code: "5515",
        image: "Living Amongst Angels by Matt Walch.jpg"
    },
];

$(document).ready(function(){

    console.log(arrayTrips);
    loadTrips();

});

function loadTrips() {

    console.log(arrayTrips);

    for (let i = 0; i < arrayTrips.length; i++) {

        const trip = arrayTrips[i];

        console.log(trip);

        $("tripsContainer").append($("#tripCardTemplate").html());

        $("#tripsContainer").children().eq(i).find("#destinationText").text(trip.destination);
        
    }

};
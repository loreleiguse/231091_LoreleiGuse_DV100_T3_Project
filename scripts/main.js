// Trips Array
const arrayTrips = [
    {
        destination: "Whalescape Odyssey",
        duration: "Duration: 2.5 hours",
        departure: "Departure: 06:00",
        code: "Code: 2506",
        price: "Price: R2500.00",
        image: "Moments by Kai Yan & Matt Walch.jpg",
        time: "short",
        place: "single",
        rank: "",
    },
    {
        destination: "Whalesong Sojourns",
        duration: "Duration: 3 hours",
        departure: "Departure: 07:00",
        code: "Code: 3007",
        price: "Price: R3000.00",
        image: "Family by Kai Yan & Matt Walch.jpg",
        time: "short",
        place: "single",
        rank: "",
    },
    {
        destination: "Oceanic Whale Quest",
        duration: "Duration: 3.5 hours",
        departure: "Departure: 08:00",
        code: "Code: 3508",
        price: "Price: R3500.00",
        image: "Together by Kai Yan & Matt Walch.jpg",
        time: "short",
        place: "single",
        rank: "",
    },
    {
        destination: "Celestial Whale Wander",
        duration: "Duration: 4 hours",
        departure: "Departure: 09:00",
        code: "Code: 4009",
        price: "Price: R4000.00",
        image: "Catharsis by Matt Walch.jpg",
        time: "short",
        place: "multi",
        rank: "",
    },
    {
        destination: "Neptune's Whale Passage",
        duration: "Duration: 4.5 hours",
        departure: "Departure: 10:00",
        code: "Code: 4510",
        price: "Price: R4500.00",
        image: "Between Two Worlds by Matt Walch.jpg",
        time: "short",
        place: "multi",
        rank: "",
    },
    {
        destination: "Serene Whale Harbor",
        duration: "Duration: 5 hours",
        departure: "Departure: 11:00",
        code: "Code: 5011",
        price: "Price: R5000.00",
        image: "Tales From The Blue Planet by Matt Walch.jpg",
        time: "long",
        place: "multi",
        rank: "",
    },
    {
        destination: "Whale Rider Retreats",
        duration: "Duration: 5.5 hours",
        departure: "Departure: 12:00",
        code: "Code: 5512",
        price: "Price: R5500.00",
        image: "Shelter by Matt Walch.jpg",
        time: "long",
        place: "round",
        rank: "",
    },
    {
        destination: "Tranquil Whale Cove",
        duration: "Duration: 6 hours",
        departure: "Departure: 13:00",
        code: "Code: 6013",
        price: "Price: R6000.00",
        image: "First Light by Matt Walch.jpg",
        time: "long",
        place: "round",
        rank: "",
    },
    {
        destination: "Whispering Whale Shores",
        duration: "Duration: 6.5 hours",
        departure: "Departure: 14:00",
        code: "Code: 6514",
        price: "Price: R6500.00",
        image: "Redemption by Matt Walch.jpg",
        time: "long",
        place: "round",
        rank: "",
    },
];

let filterRadio = "";
let filterCheap = "normal";

// Document Loads
$(document).ready(function(){

    // Name Welcome Change
    $("#changeText").text("Welcome to Cetecea Cruises");

    // Logo Visual Change
    // $(".changelogo").html or animate, google it("<img src="assets/Cetecea Cruises Logo Hover.png" alt="Logo" height="60">");

    //Hidden Information
    $("#tripDuration").hide();
    $("#tripDeparture").hide();
    $("#tripCode").hide();
    $("#tripPrice").hide();
    $("#purchaseButton").hide();

    //Cards Load
    loadTrips(arrayTrips);

});

//Show Hidden Information When Card is Clicked
$("#tripContainer").on('click', '.card', function() {

    //Toggle Hidden Information
    $(this).find("#tripDuration").toggle();
    $(this).find("#tripDeparture").toggle();
    $(this).find("#tripCode").toggle();
    $(this).find("#tripPrice").toggle();
    $(this).find("#purchaseButton").toggle();

})

//Cards Load
function loadTrips(tripPresentation) {

    console.log(tripPresentation);

    for (let i = 0; i < tripPresentation.length; i++) {

        const trip = tripPresentation[i];

        console.log(trip);

        //Change Card Content
        $("#tripContainer").append($("#tripTemplate").html());

        let thisChild = $("#tripContainer").children().eq(i+1);

        $(thisChild).find("#tripDestination").text(trip.destination);
        $(thisChild).find("#tripDuration").text(trip.duration);
        $(thisChild).find("#tripDeparture").text(trip.departure);
        $(thisChild).find("#tripCode").text(trip.code);
        $(thisChild).find("#tripPrice").text(trip.price);
        $(thisChild).find(".card-img-top").attr('src', 'assets/' + trip.image)
        
        //Toggle Hidden Information
        $(thisChild).find("#tripDuration").hide();
        $(thisChild).find("#tripDeparture").hide();
        $(thisChild).find("#tripCode").hide();
        $(thisChild).find("#tripPrice").hide();
        $(thisChild).find("#purchaseButton").hide();

    }

};

//Filter Clicked
$("input[name='tripRadio']").click(function(){

    filterRadio = $(this).attri('value');

    console.log(filterRadio);
});

//Sort Clicked
$("input[name='specialRadio']").click(function(){

    filterCheap = $(this).attri('value');

    console.log(filterCheap);
});

//
$(document).ready(function(){
    $.ajax({
        type:"GET",
        url:"https://api.openweathermap.org/data/2.5/weather?q=Pretoria&appid=9e824547855a862d01427a733135023d",
        success:function(data){
            console.log(data);
        }
    }).done(function(){
        ("#changeWeather").text(data.main.temp);
    })
});
// Trips Array
const arrayTrips = [
    {
        destination: "Whalescape Odyssey",
        duration: "Duration: 2.5 hours",
        departure: "Departure: 06:00",
        code: "Code: 2506",
        price: 2500.00,
        image: "Moments by Kai Yan & Matt Walch.jpg",
        time: "short",
        place: "single",
        date: "2023-06-01",
        origin: "Miami"
    },
    {
        destination: "Whalesong Sojourns",
        duration: "Duration: 3 hours",
        departure: "Departure: 07:00",
        code: "Code: 3007",
        price: 3000.00,
        image: "Family by Kai Yan & Matt Walch.jpg",
        time: "short",
        place: "single",
        date: "2023-06-02",
        origin: "Orlando"
    },
    {
        destination: "Oceanic Whale Quest",
        duration: "Duration: 3.5 hours",
        departure: "Departure: 08:00",
        code: "Code: 3508",
        price: 3500.00,
        image: "Together by Kai Yan & Matt Walch.jpg",
        time: "short",
        place: "single",
        date: "2023-06-03",
        origin: "Cozumel"
    },
    {
        destination: "Celestial Whale Wander",
        duration: "Duration: 4 hours",
        departure: "Departure: 09:00",
        code: "Code: 4009",
        price: 4000.00,
        image: "Catharsis by Matt Walch.jpg",
        time: "short",
        place: "multi",
        date: "2023-06-04",
        origin: "Shanghai"
    },
    {
        destination: "Neptune's Whale Passage",
        duration: "Duration: 4.5 hours",
        departure: "Departure: 10:00",
        code: "Code: 4510",
        price: 4500.00,
        image: "Between Two Worlds by Matt Walch.jpg",
        time: "long",
        place: "multi",
        date: "2023-06-05",
        origin: "Barcelona"
    },
    {
        destination: "Serene Whale Harbor",
        duration: "Duration: 5 hours",
        departure: "Departure: 11:00",
        code: "Code: 5011",
        price: 5000.00,
        image: "Tales From The Blue Planet by Matt Walch.jpg",
        time: "long",
        place: "multi",
        date: "2023-06-06",
        origin: "Nassau"
    },
    {
        destination: "Whale Rider Retreats",
        duration: "Duration: 5.5 hours",
        departure: "Departure: 12:00",
        code: "Code: 5512",
        price: 5500.00,
        image: "Shelter by Matt Walch.jpg",
        time: "long",
        place: "round",
        date: "2023-06-07",
        origin: "Rome"
    },
    {
        destination: "Tranquil Whale Cove",
        duration: "Duration: 6 hours",
        departure: "Departure: 13:00",
        code: "Code: 6013",
        price: 6000.00,
        image: "First Light by Matt Walch.jpg",
        time: "long",
        place: "round",
        date: "2023-06-08",
        origin: "Canaveral"
    },
    {
        destination: "Whispering Whale Shores",
        duration: "Duration: 6.5 hours",
        departure: "Departure: 14:00",
        code: "Code: 6514",
        price: 6500.00,
        image: "Redemption by Matt Walch.jpg",
        time: "long",
        place: "round",
        date: "2023-06-09",
        origin: "Helsinki"
    },
];

let filterRadio = "";
let filterVisit = "single";
let filterSpecial = "normal";

// Document Loads
$(document).ready(function(){

    // Name Welcome Change
    $("h1").text("Welcome to Cetecea Cruises");

    //Hidden Information
    $("#tripDuration").hide();
    $("#tripDeparture").hide();
    $("#tripCode").hide();
    $("#tripPrice").hide();
    $("#purchaseButton").hide();
    $("#changeWeather").hide();

    //Cards Load
    filterSortRadio(arrayTrips);

});

//Show Hidden Information When Card is Clicked
$("#tripContainer").on('click', '.card', function() {

    //Toggle Hidden Information
    $(this).find("#tripDuration").toggle();
    $(this).find("#tripDeparture").toggle();
    $(this).find("#tripCode").toggle();
    $(this).find("#tripPrice").toggle();
    $(this).find("#purchaseButton").toggle();
    $(this).find("#changeWeather").toggle();

})

//Cards Load
function loadTrips(tripPresentation) {

    console.log(tripPresentation);

    //Clear Elements
    $("#tripContainer").empty();

    //Loop Trips
    for (let i = 0; i < tripPresentation.length; i++) {

        const trip = tripPresentation[i];

        console.log(trip);

        //API Call
        $.ajax({
            type:"GET",
            url:"https://api.openweathermap.org/data/2.5/weather?q=" + trip.origin + "&appid=9e824547855a862d01427a733135023d",
            success:function(data){
                temp = data
                console.log(temp);
            }
        }).done(function(){
            $(thisChild).find("#changeWeather").text("Temperature: " + Math.round(temp.main.temp - 273));
        })

        //Change Card Content
        $("#tripContainer").append($("#tripTemplate").html());

        let thisChild = $("#tripContainer").children().eq(i);

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

    filterRadio = $(this).attr('value');

    console.log(filterRadio);
    filterSortRadio();
});

//Filter Clicked
$("input[name='visitRadio']").click(function(){

    filterVisit = $(this).attr('value');

    console.log(filterVisit);
    filterSortRadio();
});

//Sort Clicked
$("input[name='specialRadio']").click(function(){

    filterSpecial = $(this).attr('value');

    console.log(filterSpecial);
    filterSortRadio();
});

function filterSortRadio() {

    let tripArrayRadio = [];

    //Filter Trips
    if (filterRadio) {
        tripArrayRadio = arrayTrips.filter(trip => trip.time == filterRadio);
    } else {
        tripArrayRadio = arrayTrips;
    }

    //Filter Trips
    if (filterVisit) {
        tripArrayRadio = arrayTrips.filter(trip => trip.place == filterVisit);
    } else {
        tripArrayRadio = arrayTrips;
    }

    //Sort Trips
    if (filterSpecial == "special") {

        tripArrayRadio = tripArrayRadio.sort((a,b) => {
            return a.price - b.price;
        });
    } else if (filterSpecial == "normal") {
        tripArrayRadio = tripArrayRadio.sort((a, b) => {
            let da = new Date(a.date);
            let db = new Date(b.date);
            return db - da;
        })
    }

    loadTrips(tripArrayRadio);

}

//Remove Trips
$("#remove1").click(function(){

    $("#list1").remove();
  
  })
  
  $("#remove2").click(function(){
  
    $("#list2").remove();
  
  })
  
  $("#remove3").click(function(){
  
    $("#list3").remove();
  
  })
  
  $("#remove4").click(function(){
  
    $("#list4").remove();
  
  })
  
  $("#remove5").click(function(){
  
    $("#list5").remove();
  
  })

  $("#remove6").click(function(){
  
    $("#list6").remove();
  
  })
  
  $("#remove7").click(function(){
  
    $("#list7").remove();
  
  })
  
  $("#remove8").click(function(){
  
    $("#list8").remove();
  
  })
  
  $("#remove9").click(function(){
  
    $("#list9").remove();
  
  })
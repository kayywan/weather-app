const authKey = "2ef9f715d168ad10ae6fcd45834da550";
var citySearch = "";
var search = document.querySelector('.button')
var urlBase = "http://api.openweathermap.org/data/2.5/weather?q=" + "&appid=" + authKey;

$( document ).ready(function() {
    $( "a" ).click(function( event ) {
        alert( "The link will no longer take you to jquery.com" );
        event.preventDefault();
    });
});


function runSearch (citySearch, searchURL){
    $.ajax ({
        url: searchURL,
        method: "GET"
    })
.done(function(cityData){
    console.log(cityData);
    console.log(searchURL);
})
}

// main process

$('#searchBtn').on('click', function(){
    runSearch();

    return false;
})
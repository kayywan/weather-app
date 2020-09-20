var search = document.querySelector('.button')
var inputVal = document.querySelector('.inputVal')
var name =  document.querySelector('name')
var date =  document.querySelector('date')
var uvIndex =  document.querySelector('uvIndex')
var temp =  document.querySelector('temp')
var humidity =  document.querySelector('humidity')

$(search).on('click', function () {
fetch ('https://api.openweathermap.org/data/2.5/weather?q='+inputVal.value+'&appid=2ef9f715d168ad10ae6fcd45834da550')
.then(Response => Response.json())
.then(data => console.log(data))

.catch(err => alert("That doesn't sound like the right city."))
})

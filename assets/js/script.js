var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city");





// var formSubmitHandler = function(event) {
//   event.preventDefault();
// // get value from input element
// var city = cityInputEl.value.trim();

var getWeatherData = function() {
	fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=71fbb881f4c77b12293418473320c833");
};

//var getWeatherData = function () {
//	// ADD PARAMS FOR TEMP, HUMIDITY, WIND SPEED, & UV INDEX
//  fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=71fbb881f4c77b12293418473320c833")
//  .then(function (response) {
//    return response.json();
//  })
//  .then(function (response) {
//    console.log(response);
//  })
//};

getWeatherData();
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//api.openweathermap.org/data/2.5/weather?q=London&appid={API key}
//71fbb881f4c77b12293418473320c833

// DOM manipulation
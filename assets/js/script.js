var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city");





var formSubmitHandler = function(event) {
  event.preventDefault();
	// get value from input element
	var city = cityInputEl.value.trim();
	
	if (city) {
		getWeatherData(city);
		cityInputEl.value = "";
	} else {
		alert("Please enter a valid city");
	}
};

var getWeatherData = function(city) {
	// ADD PARAMS FOR TEMP, HUMIDITY, WIND SPEED, & UV INDEX
	var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + 
								"&appid=71fbb881f4c77b12293418473320c833";
  fetch(apiUrl).then(function(response) {
		console.log(response);
		response.json().then(function(data) {
			console.log(data);
		});
	});
};


cityFormEl.addEventListener("submit", formSubmitHandler);
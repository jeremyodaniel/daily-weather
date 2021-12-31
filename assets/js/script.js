var getWeatherData = function () {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=71fbb881f4c77b12293418473320c833")
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        console.log(response);
    })
};

getWeatherData();
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//api.openweathermap.org/data/2.5/weather?q=London&appid={API key}
//71fbb881f4c77b12293418473320c833

// DOM manipulation
angular.module('weatherApp', [])
  .controller('WeatherController', function($http) {
    var vm = this;

    // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    var apiKey = 'YOUR_API_KEY';
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=' + apiKey + '&units=metric';

    vm.weatherData = {};

    $http.get(apiUrl)
      .then(function(response) {
        vm.weatherData = response.data;
      })
      .catch(function(error) {
        console.error('Error fetching weather data:', error);
      });
  });

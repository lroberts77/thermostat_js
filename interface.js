$(document).ready(function() {
    var thermostat = new Thermostat();
    updateTemperature();

    $('#temp-up').click(function() {
        thermostat.increase();
        updateTemperature();
    })

    $('#temp-down').click(function() {
        thermostat.decrease();
        updateTemperature();
    })

    $('#temp-reset').click(function() {
    thermostat.resetTemp();
    updateTemperature();
    })

    $('#PSM-on').click(function() {
        thermostat.turnPSMon();
        $('#PSM').text('PSM on')
        updateTemperature();
    })

    $('#PSM-off').click(function() {
        thermostat.turnPSMoff();
        $('#PSM').text('PSM off')
        updateTemperature();
    })

    function updateTemperature(){
        $('#temperature').text(thermostat.temperature);
        $('#temperature').attr('class', thermostat.energyUsage());
        };

    function displayWeather(city) {
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
        var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
        var units = '&units=metric';
        $.get(url + token + units, function(data) {
            $('#current-temp').text(data.main.temp);
            $('#current-city').text(data.name);
            $('#country').text(data.sys.country)
        })
    }

    displayWeather('London');

    $('#select-city').submit(function(event) {
      event.preventDefault();
      var city = $('#current-cityy').val();
      displayWeather(city);
    })

});
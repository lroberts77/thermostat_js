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
        $('#PSM').text('on')
        updateTemperature();
    })

    $('#PSM-off').click(function() {
        thermostat.turnPSMoff();
        $('#PSM').text('off')
        updateTemperature();
    })

    function updateTemperature(){
        $('#temperature').text(thermostat.temperature);
        $('#temperature').attr('class', thermostat.energyUsage());
      };
});
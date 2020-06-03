'use strict'

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

    it('starts st 20°', function() {
      expect(thermostat.getCurrentTemp()).toEqual(20);
    });

    it('increases the temperature with increase()', function() {
      thermostat.increase();
      expect(thermostat.getCurrentTemp()).toEqual(21);
    });

    it("decreases the temperature with decrease()", function() {
      thermostat.decrease();
      expect(thermostat.getCurrentTemp()).toEqual(19)
    });

    it('has a minimum of 10°', function() {
      for (var i = 0; i < 11; i++) {
        thermostat.decrease();
      }
      expect(thermostat.getCurrentTemp()).toEqual(10);
    });

    it('has power saving mode on by default', function() {
      expect(thermostat.isPSMon()).toBe(true);
    });

    it('can turn off PSM off', function() {
      thermostat.turnPSMoff();
      expect(thermostat.isPSMon()).toBe(false);
    });
  });

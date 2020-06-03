'use strict'

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

    it('starts st 20 degrees', function() {
      expect(thermostat.getCurrentTemp()).toEqual(20);
    });
  });

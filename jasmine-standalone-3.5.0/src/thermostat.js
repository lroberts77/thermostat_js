'use strict';

class Thermostat{
  constructor() {
    this.DEFAULT_TEMP = 20;
    this.temperature = this.DEFAULT_TEMP;
    this.MAXTEMP_PSM_ON = 25;
    this.MAXTEMP_PSM_OFF = 32;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.MINIMUM_TEMPERATURE = 10;
    this.PSM = true;
  }

  getCurrentTemp() {
    return this.temperature
  }

  increase() {
    if (this.isMAXTEMP()) {
      return;
    }
    this.temperature += 1
  }

  decrease() {
    if (this.isMinimumTemp()) {
      return;
    }
    this.temperature -= 1
  }

  isMinimumTemp() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  isPSMon() {
    return this.PSM === true;
  }

  turnPSMoff() {
    this.PSM = false;
  }

  turnPSMon() {
    this.PSM = true
  }

  isMAXTEMP() {
    if (this.isPSMon() === false) {
      return this.temperature === this.MAXTEMP_PSM_OFF;
    }
    return this.temperature === this.MAXTEMP_PSM_ON;
  }

  resetTemp() {
    this.temperature = this.DEFAULT_TEMP;
  }

  energyUsage() {
    if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return 'low-usage';
    }
    if (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAXTEMP_PSM_ON) {
      return 'medium-usage';
    }
    return 'high-usage';
  }
}
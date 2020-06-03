'use strict'

class Thermostat{
  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.temperature = 20;
    this.PSMon = true;
  }

  getCurrentTemp() {
    return this.temperature
  }

  increase() {
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
    return this.PSMon === true;
  }
}
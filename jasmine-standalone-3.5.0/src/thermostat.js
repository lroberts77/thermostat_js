'use strict'

class Thermostat{
  constructor() {
    this.temperature = 20;
  }

  getCurrentTemp() {
    return this.temperature
  }

  increase() {
    this.temperature += 1
  }
}
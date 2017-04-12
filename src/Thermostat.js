'use strict';

function Thermostat(){
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSaving = true;
}

Thermostat.prototype.increase = function(){
  if (this.powerSaving === true && (this.temperature + 1 > 25)) {
    throw new Error("Power saving mode: maximum temperature is 25 degrees");
  }
  else if (this.powerSaving === false && (this.temperature + 1 > 32)) {
    throw new Error("Power saving mode off: maximum temperature is 32 degrees");
  }
  return (this.temperature += 1);
};
Thermostat.prototype.decrease = function(){
  if ((this.temperature - 1) < 10) {
    throw new Error("Minimum temperature is 10 degrees");
  }
  return (this.temperature -= 1);
};
Thermostat.prototype.powerSavingOff = function(){
  this.powerSaving = false;
};
Thermostat.prototype.powerSavingOn = function(){
  if (this.temperature > 25){
    this.reset();
    this.powerSaving = true;
  }
  this.powerSaving = true;
};
Thermostat.prototype.reset = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.usage = function() {
  if (this.temperature < 18){
    return 'low-usage';
  }
  else if (this.temperature > 25){
    return 'high-usage';
  }
  else {
    return 'medium-usage';
  }
};

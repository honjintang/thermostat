'use strict';

function Thermostat(){
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSaving = true;
}

Thermostat.prototype.increase = function(amount){
  if (this.powerSaving === true && (this.temperature + amount > 25)) {
    throw new Error("Power saving mode: maximum temperature is 25 degrees");
  }
  else if (this.powerSaving === false && (this.temperature + amount > 32)) {
    throw new Error("Power saving mode off: maximum temperature is 32 degrees");
  }
  return (this.temperature = this.temperature + amount);
};
Thermostat.prototype.decrease = function(amount){
  if ((this.temperature - amount) <= 10) {
    throw new Error("Minimum temperature is 10 degrees");
  }
  return (this.temperature = this.temperature - amount);
};
Thermostat.prototype.powerSavingOff = function(){
  this.powerSaving = false;
};
Thermostat.prototype.powerSavingOn = function(){
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

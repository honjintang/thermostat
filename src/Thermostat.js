'use strict';

function Thermostat(){
  this.temperature = 20;
  this.powerSaving = true;
}
Thermostat.prototype.increase = function(amount){
  if (this.powerSaving === true && (this.temperature + amount > 25)) {
    throw new Error("Power saving mode: maximum temperature is 25 degrees");
  }
  else if (this.powerSaving === false && (this.temperature + amount > 32)) {
    throw new Error("Power saving mode off: maximum temperature is 32 degrees");
  }
  return (this.temperature + amount);
};
Thermostat.prototype.decrease = function(amount){
  if ((this.temperature - amount) <= 10) {
    throw new Error("Minimum temperature is 10 degrees");
  }
  return (this.temperature - amount);
};
Thermostat.prototype.powerSavingOff = function(){
  this.powerSaving = false;
};
Thermostat.prototype.powerSavingOn = function(){
  this.powerSaving = true;
};
Thermostat.prototype.reset = function () {
  this.temperature = 20;
};

'use strict';

function Thermostat(){
  this.temperature = 20;
  this.powerSaving = true;
}
Thermostat.prototype.increase = function(amount){
  if (this.powerSaving === true && (this.temperature + amount > 25)) {
    throw new Error("Power saving mode: maximum temperature is 25 degrees");
  }
  return (this.temperature + amount);
};
Thermostat.prototype.decrease = function(amount){
  if ((this.temperature - amount) <= 10) {
    throw new Error("Minimum temperature is 10 degrees");
  }
  return (this.temperature - amount);
};

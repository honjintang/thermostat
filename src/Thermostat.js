'use strict';

function Thermostat(){
  this.temperature = 20;
}
Thermostat.prototype.increase = function(amount){
  return (this.temperature + amount);
};
Thermostat.prototype.decrease = function(amount){
  if ((this.temperature - amount) <= 10) {
    throw new Error("Minimum temperature is 10 degrees");
  }
  return (this.temperature - amount);
};

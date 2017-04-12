'use strict';

function Thermostat(){
  this.temperature = 20;
}
Thermostat.prototype.increase = function(amount){
  return (this.temperature + amount);
};

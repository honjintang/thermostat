'use strict';

describe('Thermostat', function() {
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('can increase temperature', function() {
    expect(thermostat.increase(5)).toEqual(25);
  });

  it('can decrease temperature', function() {
    expect(thermostat.decrease(5)).toEqual(15);
  });

  it('has a minimum temperature of 10', function() {
    expect(function(){thermostat.decrease(11);}).toThrowError("Minimum temperature is 10 degrees");
  });

  it('has a maximum temperature of 25 if power saving is on', function(){
    expect(function(){thermostat.increase(6);}).toThrowError("Power saving mode: maximum temperature is 25 degrees");
  });

  it('has a maximum temperature of 32 if power saving is off', function(){
    thermostat.powerSavingOff()
    expect(function(){thermostat.increase(13);}).toThrowError("Power saving mode off: maximum temperature is 32 degrees");
  });
  it('has a reset function to revert to default temperature', function(){
    thermostat.reset()
    expect(thermostat.temperature).toEqual(20);
  });
  it('returns current energy usage as low-usage', function(){
    thermostat.decrease(3);
    expect(thermostat.usage()).toEqual('low-usage');
  });
  it('returns current energy usage as medium-usage', function(){
    thermostat.increase(5);
    expect(thermostat.usage()).toEqual('medium-usage');
  });
  it('returns current energy usage as high-usage', function(){
    thermostat.powerSavingOff();
    thermostat.increase(6);
    expect(thermostat.usage()).toEqual('high-usage');
  });
});

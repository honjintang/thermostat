'use strict';

describe('Thermostat', function() {
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE);
  });

  it('can increase temperature', function() {
    expect(thermostat.increase()).toEqual(21);
  });

  it('can decrease temperature', function() {
    expect(thermostat.decrease()).toEqual(19);
  });

  it('has a minimum temperature of 10', function() {
    for (var i = 0; i<10; i++){
      thermostat.decrease();
    };
    expect(function(){thermostat.decrease();}).toThrowError("Minimum temperature is 10 degrees");
  });

  it('has a maximum temperature of 25 if power saving is on', function(){
    for (var i = 0; i<5; i++){
      thermostat.increase();
    };
    expect(function(){thermostat.increase();}).toThrowError("Power saving mode: maximum temperature is 25 degrees");
  });

  it('has a maximum temperature of 32 if power saving is off', function(){
    thermostat.powerSavingOff();
    for (var i = 0; i<12; i++){
      thermostat.increase();
    };
    expect(function(){thermostat.increase();}).toThrowError("Power saving mode off: maximum temperature is 32 degrees");
  });
  it('has a reset function to revert to default temperature', function(){
    thermostat.reset()
    expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE);
  });
  it('returns current energy usage as low-usage', function(){
    for (var i = 0; i<3; i++){
    thermostat.decrease();
    };
    expect(thermostat.usage()).toEqual('low-usage');
  });
  it('returns current energy usage as medium-usage', function(){
    expect(thermostat.usage()).toEqual('medium-usage');
  });
  it('returns current energy usage as high-usage', function(){
    thermostat.powerSavingOff();
    for (var i = 0; i<6; i++){
    thermostat.increase();
    };
    expect(thermostat.usage()).toEqual('high-usage');
  });
});

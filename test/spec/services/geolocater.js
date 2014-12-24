'use strict';

xdescribe('Service: geolocater', function () {

  // load the service's module
  beforeEach(module('employeeApp'));

  // instantiate service
  var geolocater;
  beforeEach(inject(function(_geolocater_) {
    geolocater = _geolocater_;
  }));

  it('should do something', function () {
    expect(!!geolocater).toBe(true);
  });

});

'use strict';

xdescribe('Service: geocoder', function () {

  // load the service's module
  beforeEach(module('employeeApp'));

  // instantiate service
  var geocoder;
  beforeEach(inject(function(_geocoder_) {
    geocoder = _geocoder_;
  }));

  it('should do something', function () {
    expect(!!geocoder).toBe(true);
  });

});

'use strict';

describe('Service: ModelsEmployee', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var ModelsEmployee;
  beforeEach(inject(function (_ModelsEmployee_) {
    ModelsEmployee = _ModelsEmployee_;
  }));

  it('should do something', function () {
    expect(!!ModelsEmployee).toBe(true);
  });

});

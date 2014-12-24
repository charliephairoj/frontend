'use strict';

xdescribe('Service: KeyboardNavigation', function () {

  // load the service's module
  beforeEach(module('EmployeeApp'));

  // instantiate service
  var KeyboardNavigation;
  beforeEach(inject(function(_KeyboardNavigation_) {
    KeyboardNavigation = _KeyboardNavigation_;
  }));

  it('should do something', function () {
    expect(!!KeyboardNavigation).toBe(true);
  });

});

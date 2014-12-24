'use strict';

xdescribe('Controller: HrCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeApp'));

  var HrCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    HrCtrl = $controller('HrCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

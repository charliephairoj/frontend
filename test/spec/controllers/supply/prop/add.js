'use strict';

xdescribe('Controller: SupplyPropAddCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeApp'));

  var SupplyPropAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    SupplyPropAddCtrl = $controller('SupplyPropAddCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

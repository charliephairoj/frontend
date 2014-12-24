'use strict';

xdescribe('Controller: SupplyPropDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeApp'));

  var SupplyPropDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    SupplyPropDetailsCtrl = $controller('SupplyPropDetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

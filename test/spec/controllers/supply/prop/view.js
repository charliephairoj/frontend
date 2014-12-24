'use strict';

xdescribe('Controller: SupplyPropViewCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeApp'));

  var SupplyPropViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    SupplyPropViewCtrl = $controller('SupplyPropViewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

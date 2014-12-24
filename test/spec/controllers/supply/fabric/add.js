'use strict';

xdescribe('Controller: SupplyFabricAddCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeApp'));

  var SupplyFabricAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    SupplyFabricAddCtrl = $controller('SupplyFabricAddCtrl', {
      $scope: scope
    });
  }));

 
});

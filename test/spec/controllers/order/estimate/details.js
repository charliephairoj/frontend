'use strict';

describe('Controller: OrderEstimateDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeApp'));

  var OrderEstimateDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrderEstimateDetailsCtrl = $controller('OrderEstimateDetailsCtrl', {
      $scope: scope
    });
  }));

  
});

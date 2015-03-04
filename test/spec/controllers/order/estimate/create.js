'use strict';

describe('Controller: OrderEstimateCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeApp'));

  var OrderEstimateCreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrderEstimateCreateCtrl = $controller('OrderEstimateCreateCtrl', {
      $scope: scope
    });
  }));


});

'use strict';

describe('Controller: OrderShippingTodayCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeApp'));

  var OrderShippingTodayCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    OrderShippingTodayCtrl = $controller('OrderShippingTodayCtrl', {
      $scope: scope
    });
  }));

 
});

'use strict';

xdescribe('Controller: OrderShippingDeliveryCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeApp'));

  var OrderShippingDeliveryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    OrderShippingDeliveryCtrl = $controller('OrderShippingDeliveryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

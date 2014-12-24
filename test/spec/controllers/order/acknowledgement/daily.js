'use strict';

xdescribe('Controller: OrderAcknowledgementDailyCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeApp'));

  var OrderAcknowledgementDailyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    OrderAcknowledgementDailyCtrl = $controller('OrderAcknowledgementDailyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

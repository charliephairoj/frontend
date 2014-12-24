'use strict';

xdescribe('Controller: OrderAcknowledgementWeeklyCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeApp'));

  var OrderAcknowledgementWeeklyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    OrderAcknowledgementWeeklyCtrl = $controller('OrderAcknowledgementWeeklyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});

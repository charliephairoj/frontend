'use strict';

xdescribe('Controller: ProductRugAddCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeApp'));

  var ProductRugAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    ProductRugAddCtrl = $controller('ProductRugAddCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

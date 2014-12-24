'use strict';

xdescribe('Controller: ProductTableAddCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeApp'));

  var ProductTableAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    ProductTableAddCtrl = $controller('ProductTableAddCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

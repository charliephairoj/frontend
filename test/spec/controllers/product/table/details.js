'use strict';

xdescribe('Controller: ProductTableDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeApp'));

  var ProductTableDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    ProductTableDetailsCtrl = $controller('ProductTableDetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

'use strict';

xdescribe('Controller: ProductTableViewCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeApp'));

  var ProductTableViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    ProductTableViewCtrl = $controller('ProductTableViewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

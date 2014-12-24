'use strict';

xdescribe('Controller: ProductRugViewCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeApp'));

  var ProductRugViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    ProductRugViewCtrl = $controller('ProductRugViewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

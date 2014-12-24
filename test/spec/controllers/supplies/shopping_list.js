'use strict';

xdescribe('Controller: SuppliesShoppingListCtrl', function () {

  // load the controller's module
  beforeEach(module('EmployeeApp'));

  var SuppliesShoppingListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SuppliesShoppingListCtrl = $controller('SuppliesShoppingListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

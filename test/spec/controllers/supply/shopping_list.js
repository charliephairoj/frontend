'use strict';

xdescribe('Controller: SupplyShoppingListCtrl', function () {

  // load the controller's module
  beforeEach(module('frontApp'));

  var SupplyShoppingListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SupplyShoppingListCtrl = $controller('SupplyShoppingListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

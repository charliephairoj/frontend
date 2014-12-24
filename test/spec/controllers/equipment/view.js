'use strict';

xdescribe('Controller: EquipmentViewCtrl', function () {

  // load the controller's module
  beforeEach(module('frontApp'));

  var EquipmentViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EquipmentViewCtrl = $controller('EquipmentViewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

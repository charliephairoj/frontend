'use strict';

xdescribe('Controller: EquipmentCtrl', function () {

  // load the controller's module
  beforeEach(module('frontApp'));

  var EquipmentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EquipmentCtrl = $controller('EquipmentCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

'use strict';

xdescribe('Controller: DialogsSupplyScannerCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var DialogsSupplyScannerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DialogsSupplyScannerCtrl = $controller('DialogsSupplyScannerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

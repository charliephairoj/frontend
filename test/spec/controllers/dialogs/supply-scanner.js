'use strict';

describe('Controller: DialogsSupplyScannerCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeApp'));

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
	  expect(2).toEqual(2);
  });
});
   
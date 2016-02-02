'use strict';

describe('Controller: HrPayrollCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var HrPayrollCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HrPayrollCtrl = $controller('HrPayrollCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HrPayrollCtrl.awesomeThings.length).toBe(3);
  });
});

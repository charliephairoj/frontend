'use strict';

describe('Controller: DealCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var DealCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DealCtrl = $controller('DealCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DealCtrl.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Controller: DealsDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var DealsDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DealsDetailsCtrl = $controller('DealsDetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DealsDetailsCtrl.awesomeThings.length).toBe(3);
  });
});

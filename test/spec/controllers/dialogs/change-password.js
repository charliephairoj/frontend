'use strict';

describe('Controller: DialogsChangePasswordCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var DialogsChangePasswordCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DialogsChangePasswordCtrl = $controller('DialogsChangePasswordCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

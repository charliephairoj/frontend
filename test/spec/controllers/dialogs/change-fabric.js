'use strict';

xdescribe('Controller: DialogsChangeFabricCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var DialogsChangeFabricCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DialogsChangeFabricCtrl = $controller('DialogsChangeFabricCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

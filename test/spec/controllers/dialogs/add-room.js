'use strict';

xdescribe('Controller: DialogsAddRoomCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var DialogsAddRoomCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DialogsAddRoomCtrl = $controller('DialogsAddRoomCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

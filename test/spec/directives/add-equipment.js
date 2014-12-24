'use strict';

xdescribe('Directive: addEquipment', function () {

  // load the directive's module
  beforeEach(module('frontApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<add-equipment></add-equipment>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the addEquipment directive');
  }));
});

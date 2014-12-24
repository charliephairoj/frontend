'use strict';

xdescribe('Directive: checkmark', function () {
  beforeEach(module('employeeApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<checkmark></checkmark>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the checkmark directive');
  }));
});

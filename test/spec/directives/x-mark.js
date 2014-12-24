'use strict';

xdescribe('Directive: xMark', function () {
  beforeEach(module('employeeApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<x-mark></x-mark>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the xMark directive');
  }));
});

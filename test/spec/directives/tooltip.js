    'use strict';

xdescribe('Directive: tooltip', function () {
  beforeEach(module('employeeApp'));

  var element;

  xit('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<tooltip></tooltip>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the tooltip directive');
  }));
});

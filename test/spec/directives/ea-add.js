'use strict';

xdescribe('Directive: eaAdd', function () {
  beforeEach(module('employeeApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<ea-add></ea-add>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the eaAdd directive');
  }));
});

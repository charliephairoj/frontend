'use strict';

xdescribe('Directive: eaSave', function () {
  beforeEach(module('employeeApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<ea-save></ea-save>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the eaSave directive');
  }));
});

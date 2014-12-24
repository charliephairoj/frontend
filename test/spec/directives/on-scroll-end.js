'use strict';

xdescribe('Directive: onScrollEnd', function () {
  beforeEach(module('employeeApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<on-scroll-end></on-scroll-end>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the onScrollEnd directive');
  }));
});

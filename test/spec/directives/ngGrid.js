'use strict';

xdescribe('Directive: ngGrid', function () {
  beforeEach(module('employeeApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<ng-grid></ng-grid>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the ngGrid directive');
  }));
});

'use strict';

xdescribe('Directive: background', function () {
  beforeEach(module('employeeApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<background></background>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the background directive');
  }));
});

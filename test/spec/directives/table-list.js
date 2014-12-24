'use strict';

xdescribe('Directive: tableList', function () {
  beforeEach(module('employeeApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<table-list></table-list>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the tableList directive');
  }));
});

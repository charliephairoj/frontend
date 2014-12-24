'use strict';

describe('Directive: clickUrl', function () {
  beforeEach(module('employeeApp.directives'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<click-url></click-url>');
    element = $compile(element)($rootScope);
    //expect(element.text()).toBe('this is the clickUrl directive');
  }));
});

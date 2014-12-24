'use strict';

describe('Directive: fadeLoad', function () {
  beforeEach(module('employeeApp.directives'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<fade-load></fade-load>');
    element = $compile(element)($rootScope);
    //expect(element.text()).toBe('this is the fadeLoad directive');
  }));
});

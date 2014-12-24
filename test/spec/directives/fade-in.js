'use strict';

describe('Directive: fadeIn', function () {
  beforeEach(module('employeeApp.directives'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<fade-in></fade-in>');
    element = $compile(element)($rootScope);
    //expect(element.text()).toBe('this is the fadeIn directive');
  }));
});

'use strict';

describe('Directive: beautify', function () {
  beforeEach(module('employeeApp.directives'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<beautify></beautify>');
    element = $compile(element)($rootScope);
    //expect(element.text()).toBe('this is the beautify directive');
  }));
});

'use strict';

describe('Directive: ecBlur', function () {
  beforeEach(module('employeeApp.directives'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<ec-blur></ec-blur>');
    element = $compile(element)($rootScope);
    //expect(element.text()).toBe('this is the ecBlur directive');
  }));
});

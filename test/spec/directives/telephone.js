'use strict';

describe('Directive: telephone', function () {
  beforeEach(module('employeeApp.directives'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<telephone></telephone>');
    element = $compile(element)($rootScope);
    //expect(element.text()).toBe('this is the telephone directive');
  }));
});

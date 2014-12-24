'use strict';

describe('Directive: scanner', function () {
  beforeEach(module('employeeApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<scanner></scanner>');
    element = $compile(element)($rootScope);
    //expect(element.text()).toBe('this is the scanner directive');
  }));
});

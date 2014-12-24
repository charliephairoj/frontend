'use strict';

describe('Directive: dragOn', function () {
  beforeEach(module('employeeApp.directives'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<drag-on></drag-on>');
    element = $compile(element)($rootScope);
    //expect(element.text()).toBe('this is the dragOn directive');
  }));
});

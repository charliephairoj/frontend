'use strict';

describe('Directive: dropOn', function () {
  beforeEach(module('employeeApp.directives'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<drop-on></drop-on>');
    element = $compile(element)($rootScope);
    //expect(element.text()).toBe('this is the dropOn directive');
  }));
});

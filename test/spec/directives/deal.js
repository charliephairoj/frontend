'use strict';

describe('Directive: deal', function () {

  // load the directive's module
  beforeEach(module('frontendApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<deal></deal>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the deal directive');
  }));
});

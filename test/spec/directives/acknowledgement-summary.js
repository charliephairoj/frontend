'use strict';

describe('Directive: acknowledgementSummary', function () {

  // load the directive's module
  beforeEach(module('frontendApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<acknowledgement-summary></acknowledgement-summary>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the acknowledgementSummary directive');
  }));
});

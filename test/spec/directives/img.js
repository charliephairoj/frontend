'use strict';

xdescribe('Directive: img', function () {

  // load the directive's module
  beforeEach(module('employeeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<img></img>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the img directive');
  }));
});

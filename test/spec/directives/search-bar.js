'use strict';

xdescribe('Directive: searchBar', function () {
  beforeEach(module('employeeApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<search-bar></search-bar>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the searchBar directive');
  }));
});

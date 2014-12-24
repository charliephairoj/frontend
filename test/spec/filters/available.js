'use strict';

describe('Filter: available', function () {

  // load the filter's module
  beforeEach(module('employeeApp'));

  // initialize a new instance of the filter before each test
  var available;
  beforeEach(inject(function($filter) {
    available = $filter('available');
  }));

  it('should return the input prefixed with "available filter:"', function () {
    var text = 'angularjs';
    expect(available(text)).toBe('available filter: ' + text);
  });

});

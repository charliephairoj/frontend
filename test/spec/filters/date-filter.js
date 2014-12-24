'use strict';

describe('Filter: dateFilter', function () {

  // load the filter's module
  beforeEach(module('employeeApp.filters'));

  // initialize a new instance of the filter before each test
  var dateFilter;
  beforeEach(inject(function($filter) {
    dateFilter = $filter('dateFilter');
  }));

  

});

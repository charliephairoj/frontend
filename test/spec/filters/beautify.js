'use strict';

describe('Filter: beautify', function () {

  // load the filter's module  
  beforeEach(module('employeeApp.filters')); 

  // initialize a new instance of the filter before each test
  var beautify;
  beforeEach(inject(function($filter) {
    beautify = $filter('beautify');
  }));

  

});

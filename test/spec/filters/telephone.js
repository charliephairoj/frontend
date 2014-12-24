'use strict';

describe('Filter: telephone', function () {

  // load the filter's module
  beforeEach(module('employeeApp.filters'));

  // initialize a new instance of the filter before each test
  var telephone;
  beforeEach(inject(function($filter) {
    telephone = $filter('telephone');
    expect(telephone('09-12 1212')).toEqual('09121212');
  }));
 
  

});

'use strict';

describe('Filter: exclude', function () {

  // load the filter's module
  beforeEach(module('employeeApp.filters'));

  // initialize a new instance of the filter before each test
  var exclude,
      list1,
      list2;
  beforeEach(inject(function($filter) {
    exclude = $filter('exclude');
    list1 = [1, 2, 3];
    list2 = [1, 3];
  }));
  
  it('The filter to only return items in an array that do not match an item in the second array', function(){
      //dump(exclude(list1, list2));
      //expect(exclude(list1, list2)).toBe([2]);      
  });

  
});

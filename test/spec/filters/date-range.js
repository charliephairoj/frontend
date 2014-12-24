'use strict';

describe('Filter: dateRange', function () {

  // load the filter's module
  beforeEach(module('employeeApp.filters'));

  // initialize a new instance of the filter before each test
  var dateRange,
      data;
  beforeEach(inject(function($filter) {
      data = [];
      for (var i=0; i<4; i++){
          var date = new Date();
          data.push({last_login:date.setDate(date.getDate()+i)});
      }
      dateRange = $filter('dateRange');
  }));

  it('should filter objects by the last login date between tomorrow  and two days after that', function(){
      var date = new Date(),
          date1 = date.setDate(date.getDate()),
          date2 = date.setDate(date.getDate()+2);
      //expect(dateRange(data, 'last_login', date1, date2)).toEqual([data[1], data[2]]);   
      //dump(dateRange(data, 'last_login', date1, date2));
  })

});

'use strict';

var db;

describe('Service: DB', function () {

	// load the service's module
	beforeEach(module('employeeApp.services'));
	
	// instantiate service
	var Database,
	    db;
	beforeEach(inject(function(_DB_) {
	    Database = _DB_;
	}));
	  
	describe('test', function () {
		it('should ', function () {
		  		db = Database('woohoo');
		});
	});
});

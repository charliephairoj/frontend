'use strict';

describe('Service: models/fabric', function () {

  	// load the service's module
  	beforeEach(module('employeeApp.services'));
	
	var $http,
		Fabric,
		fabric;
		
	beforeEach(inject(function ($injector, Fabric) {
		$http = $injector.get('$httpBackend');
		fabric = new Fabric();
		fabric.id = 2;
		fabric.quantity = 3;
	}));
	
	afterEach(function () {
		$http.verifyNoOutstandingExpectation();
		$http.verifyNoOutstandingRequest();	
	});
	
	xdescribe('Adding quantity', function () {
		
		it('should send a POST request to the url', function () {
			$http.expectPOST('/api/v1/fabric/2/add?quantity=4').respond({
				id:2,
				quantity:7});
			//fabric.$add({quantity:4});
			$http.flush();
			expect(fabric.id).toBeDefined();
			expect(fabric.quantity).toEqual(7);
		});
		
	});
	
	
	
  

});

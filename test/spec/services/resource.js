'use strict';

xdescribe('Service: resource', function () {

	// load the service's module
	beforeEach(module('employeeApp.services'));
	
	// instantiate service
	var Resource,
		Supply,
		$http;
	beforeEach(inject(function(_Resource_, $injector) {
	  	Resource = _Resource_;
	  	$http = $injector.get('$httpBackend');
	}));
	  
	describe('Initializing the service', function () {
	 	it('should have the complete class methods', function () {
	  		var resource = Resource('test/url/:id', {id:'@id'}, {'create': {method:'POST'}});
	  			dump(resource);
	  			expect(resource.get).toBeDefined();
	  			expect(resource.query).toBeDefined();
	  	});
	  	
	  	it('should have complete instance methods', function () {
	
	  		var Test = Resource('test/url/:id', {id:'@id'}, {
	  			'create': {'method': 'POST'},
	  			'update': {'method': 'PUT'}
	  		});
	  		
	  		var test = new Test();
	  		expect(test.$save).toBeDefined();
	  		expect(test.$delete).toBeDefined();
	  		expect(test.$create).toBeDefined();
	  		expect(test.$update).toBeDefined();
	  	});
	  	
	});
	
	describe('Standard class methods', function () {
		
		beforeEach(function () {
			 Supply = Resource('/api/v1/supply/:id', {id:'@id'}, {
				'create': {'method': "POST"},
				'update': {'method': 'PUT'}
			});
		});
		
		afterEach(function () {
			$http.verifyNoOutstandingRequest();
			$http.verifyNoOutstandingExpectation();	
		});
		
		it('should perform a GET request if "query" is called', function () {
			$http.expectGET('/api/v1/supply').respond([{id:1}, {id:5}]);
			
			var supplies = Supply.query();
			
			$http.flush();
			
			expect(supplies.length).toEqual(2);
			expect(supplies[0].id).toEqual(1);
			expect(supplies[1].id).toEqual(5);
		});
		
		it('should perform a GET request if "get" is called', function () {
			$http.expectGET('/api/v1/supply/3').respond({id:3, color:'Red'});
			
			var supply = Supply.get({id:3});
			
			$http.flush();
			
			expect(supply.id).toEqual(3);
			expect(supply.color).toEqual('Red');
			
		});
	});

 
});

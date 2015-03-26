'use strict';

describe('Controller: OrderAcknowledgementDetailsCtrl', function () {

  	// load the controller's module
  	beforeEach(module('employeeApp'));

  	var OrderAcknowledgementDetailsCtrl,
  		ctrl,
  		Ctrl,
  		$http,
  		route,
    	scope;

  	// Initialize the controller and a mock scope
  	beforeEach(inject(function ($controller, $injector) {
    	scope = {};
    	route = {id:3};
    	Ctrl = $controller;
    	$http = $injector.get('$httpBackend');
  	}));

  	describe('Phase: Initialization', function() {
  		it('should make a request to the server for the acknowledgement', function() {
  			$http.expectGET('/api/v1/acknowledgement/3/?pdf=true').respond({id:3, project: {id:4}});
			$http.expectGET('/api/v1/project/?limit=0&page_size=1000').respond([{id:4}]);
  			ctrl = Ctrl('OrderAcknowledgementDetailsCtrl', {
	      		$scope: scope,
	      		$routeParams: route
	    	});
	    	expect(scope.acknowledgement).toEqual(jasmine.any(Object));
	    	expect(scope.projects).toEqual(jasmine.any(Array));
	    	$http.flush();
	    	expect(scope.acknowledgement).toEqual(jasmine.any(Object));
	    	expect(scope.acknowledgement.id).toEqual(3);
			expect(scope.projects.length).toEqual(1);
	    	$http.verifyNoOutstandingRequest();
	    	$http.verifyNoOutstandingExpectation();
  		});
  	});
  	
  	describe('Phase: Post-Initialization', function() {
  		
  		beforeEach(function() {
  			$http.expectGET('/api/v1/acknowledgement/3/?pdf=true').respond({id:3, project:{id: 4}});
			$http.expectGET('/api/v1/project/?limit=0&page_size=1000').respond([{id:4}]);
  			ctrl = Ctrl('OrderAcknowledgementDetailsCtrl', {
	      		$scope: scope,
	      		$routeParams: route
	    	});
	    	$http.flush();
  		});
  		
  		afterEach(function() {
  			$http.verifyNoOutstandingExpectation();
  			$http.verifyNoOutstandingRequest();
  		});
  		
  		describe('Updating the acknowledgement', function() {
  			it('should send a PUT request to the server', function() {
  				$http.expectPUT('/api/v1/acknowledgement/3/').respond({id:3, project: {id: 4}});
  				scope.save(); 
  				
  				$http.flush();
  				$http.verifyNoOutstandingExpectation();
  				$http.verifyNoOutstandingRequest();	
  			});
  			
  		});
  	});
});

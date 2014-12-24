'use strict';

describe('Controller: OrderAcknowledgementViewCtrl', function () {

  	// load the controller's module
  	beforeEach(module('employeeApp'));

  	var OrderAcknowledgementViewCtrl,
  		Ctrl,
  		ctrl,
    	scope,
      	$http;

  	// Initialize the controller and a mock scope
  	beforeEach(inject(function ($controller, $injector, $rootScope) {
    	scope = $rootScope.$new();
    	$http = $injector.get('$httpBackend');
    	Ctrl = $controller;
    	
  	}));
  	
  	describe('Phase: Initialization', function() {
  		it('should make a request to the server', function() {
	  		$http.expectGET('/api/v1/acknowledgement/?limit=20').respond([{id:1}]);
	  		ctrl = Ctrl('OrderAcknowledgementViewCtrl', {$scope:scope});
	  		expect(scope.acknowledgements).toEqual(jasmine.any(Array));
	  		
	  		$http.flush();
	  		expect(scope.acknowledgements).toEqual(jasmine.any(Array));
	  		expect(scope.acknowledgements.length).toEqual(1);
	  		$http.verifyNoOutstandingExpectation();
	  		$http.verifyNoOutstandingRequest();
  		});
  	});
  	
  	describe('Phase: Post-Initialization', function() {
  		
  		beforeEach(function() {
  			$http.expectGET('/api/v1/acknowledgement/?limit=20').respond([{id:1122}]);
	  		ctrl = Ctrl('OrderAcknowledgementViewCtrl', {$scope:scope});
	  		$http.flush();
  		});
  		
  		afterEach(function() {
  			$http.verifyNoOutstandingExpectation();
  			$http.verifyNoOutstandingRequest();
  		});
  		
  		describe('search the server', function() {
  			it('should send a query to the function with the search string', function() {
  				$http.expectGET('/api/v1/acknowledgement/?limit=5&q=12').respond([{id:1122}, {id:1222}]);
  				scope.query = '12'
  				scope.$digest();
  				expect(scope.acknowledgements.length).toEqual(1);
  				
  				$http.flush();
  				expect(scope.acknowledgements.length).toEqual(2);
  				
  			});
  		});
  		
  		describe('loading more acknowledgements', function() {
  			it('should request more acknowledgements from the server', function() {
  				$http.expectGET('/api/v1/acknowledgement/?limit=50&offset=1').respond([{id:9821}]);
  				scope.loadNext();
  				expect(scope.acknowledgements.length).toEqual(1);
  				
  				$http.flush()
  				expect(scope.acknowledgements.length).toEqual(2);
  			});
  		});
  	});

     
 
});

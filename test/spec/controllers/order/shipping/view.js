'use strict';

describe('Controller: OrderShippingViewCtrl', function () {

  	// load the controller's module
  	beforeEach(module('employeeApp'));

  	var OrderShippingViewCtrl,
  		$http,
  		Ctrl,
  		ctrl,
    	scope;

  	// Initialize the controller and a mock scope
  	beforeEach(inject(function ($controller, $injector, $rootScope) {
  		$http = $injector.get('$httpBackend');
  		Ctrl = $controller;
    	scope = $rootScope.$new();
  	}));
  	
  	describe('Phase: Initilization', function () {
  		
  		afterEach(function () {
  			$http.verifyNoOutstandingRequest();
  			$http.verifyNoOutstandingExpectation();
  		});
  		
  		it('should request shipping manifests from the server via get', function () {
  			$http.expectGET('/api/v1/shipping/').respond([]);
  			ctrl = Ctrl('OrderShippingViewCtrl', {
  				$scope: scope
  			});
  			$http.flush();
  		});
  	
  	});
  	
  	describe('Phase: Post-Initialization', function() {
  		
  		beforeEach(function () {
  			$http.expectGET('/api/v1/shipping/').respond([
  				{
  					id:7,
  					customer: {name:'Michael'}
  				},
  				{
  					id:8,
  					customer: {name:'May'}
  				}
  			]);
  			ctrl = Ctrl('OrderShippingViewCtrl', {
  				$scope: scope
  			});
  			$http.flush();
  			expect(scope.shippingList.length).toEqual(2);
  		});
  		
  		afterEach(function () {
  			$http.verifyNoOutstandingRequest();
  			$http.verifyNoOutstandingExpectation();
  		});
  		
  		describe('Searching the server', function() {
  			
  			it('should query the server with the query string', function() {
  				$http.expectGET('/api/v1/shipping/?limit=5&q=m').respond([{id:100, customer:{name:'Minnie'}}]);
  				scope.query = 'm';
  				scope.$digest();
  				$http.flush();
  				expect(scope.shippingList.length).toEqual(3);
  			});
  			
  		});
  		
  		describe('Loading more shipping manifests from the server', function () {
  			
  			it('should request the next set of shipping manifests', function () {
  				$http.expectGET('/api/v1/shipping/?limit=20&offset=2').respond([{id:103, customer:{name:'John'}}]);
  				scope.loadNext();
  				$http.flush();
  				expect(scope.shippingList.length).toEqual(3);
  			});
  		});
  	});

  
});

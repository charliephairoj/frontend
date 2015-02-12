'use strict';

describe('Controller: OrderPurchaseOrderViewCtrl', function () {

  	// load the controller's module
  	beforeEach(module('employeeApp'));

  	var OrderPurchaseOrderViewCtrl,
  		$http,
  		ctrl,
  		Ctrl,
    	scope;

  	// Initialize the controller and a mock scope
  	beforeEach(inject(function ($controller, $injector, $rootScope) {
    	scope = $rootScope.$new()
    	$http = $injector.get('$httpBackend');
    	Ctrl = $controller;
    	
  	}));

  	describe('Phase: Intialization', function(){
  		
  		it('should make a http GET request', function(){
  			$http.expectGET('/api/v1/purchase-order/?limit=20').respond([{id:7, customer:{name:'may'}}]);
  			ctrl = Ctrl('OrderPurchaseOrderViewCtrl', {$scope: scope});
  			expect(scope.poList).toEqual(jasmine.any(Array));
  			$http.flush();
  			
  			expect(scope.poList.length).toEqual(1);
  		});
  		
  		afterEach(function(){
  			$http.verifyNoOutstandingExpectation();
  			$http.verifyNoOutstandingRequest()
  		});
  	});
  	
  	describe('Phase: Post-Initialization', function () {
  		
  		beforeEach(function () {
  			$http.expectGET('/api/v1/purchase-order/?limit=20').respond([{id:7, customer:{name:'may'}}]);
  			ctrl = Ctrl('OrderPurchaseOrderViewCtrl', {$scope: scope});
  			$http.flush();
  		});
  		
  		afterEach(function () {
  			$http.verifyNoOutstandingExpectation();
  			$http.verifyNoOutstandingRequest();
  		});
  		
  		describe('Search mechanism', function () {
  			it('should make a request to server with the query', function () {
  				$http.expectGET('/api/v1/purchase-order/?limit=1&q=m').respond([{id:4, customer:{name:'Mike'}}]);
  				scope.query = {$: {$: 'm'}};
  				expect(scope.poList.length).toEqual(1);
  				scope.$digest();
  				$http.flush();
  				expect(scope.poList.length).toEqual(2);
  				
  			});
  		});
  		
  		describe('Loading more purchase orders', function () {
  			it('should make request to the server for more po', function () {
  				$http.expectGET('/api/v1/purchase-order/?limit=20&offset=1').respond([{id:2}]);
  				scope.loadNext();
  				expect(scope.poList.length).toEqual(1);
  				$http.flush();
  				expect(scope.poList.length).toEqual(2);
  			});
  		});
  	});
});

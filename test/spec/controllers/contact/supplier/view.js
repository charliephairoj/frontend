'use strict';

describe('Controller: ContactSupplierViewCtrl', function () {

  	// load the controller's module
  	beforeEach(module('employeeApp'));
  	beforeEach(module('employeeApp.mocks'));

  	var ContactSupplierViewCtrl,
  		ctrl,
  		Ctrl,
  		$http,
    	scope;

  	// Initialize the controller and a mock scope
  	beforeEach(inject(function ($controller, $injector, $rootScope) {
  		$http = $injector.get('$httpBackend');
  		Ctrl = $controller;
    	scope = $rootScope.$new();
    	
  	}));

	describe('Phase: Initialization', function() {
		
		it('is should request suppliers from the server', function(){
			$http.expectGET('/api/v1/supplier/').respond([{id:7, name:'Zipper Galore'}]);
			ctrl = Ctrl('ContactSupplierViewCtrl', {$scope:scope});
			expect(scope.suppliers).toEqual(jasmine.any(Array));
			
			$http.flush();
			expect(scope.suppliers).toEqual(jasmine.any(Array));
			expect(scope.suppliers.length).toEqual(1);
		});
	});
	
	describe('Phase: Post-Initialization', function() {
		
		beforeEach(function() {
			$http.whenGET('/api/v1/supplier/').respond([{id:7, name:'Zipper Galore'}]);
			ctrl = Ctrl('ContactSupplierViewCtrl', {$scope:scope});
			$http.flush();
		});
		
		afterEach(function() {
			$http.verifyNoOutstandingRequest();
			$http.verifyNoOutstandingExpectation();	
		});
		
		describe("Search Service", function() {
			
			it('should query the server with the query string', function() {
				
				$http.expectGET('/api/v1/supplier/?q=Zipper').respond([{id:44, name:'Zipper World'}, 
																	{id:7, name:'Zipper Galore'}]);
				scope.query = 'Zipper';
				scope.$digest();													
				expect(scope.suppliers.length).toEqual(1);
				
				$http.flush();
				expect(scope.suppliers.length).toEqual(2);
				
			});
		});
		
		describe('loading more suppliers', function() {
      		it('it should request more suppliers from the server via GET', function() {
      			$http.expectGET('/api/v1/supplier/?limit=50&offset=1').respond([{id:8, name:'Chain Place'}]);
      			scope.loadNext();
      			expect(scope.suppliers.length).toEqual(1);
      			
      			$http.flush();
      			expect(scope.suppliers.length).toEqual(2);
      		});
      	});
	})
  
});

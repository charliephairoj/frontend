'use strict';

xdescribe('Controller: SupplyFabricViewCtrl', function () {

  	// load the controller's module
  	beforeEach(module('employeeApp'));

  	var SupplyFabricViewCtrl,
  		$http,
  		Ctrl,
  		ctrl,
    	scope;

  	// Initialize the controller and a mock scope
  	beforeEach(inject(function ($controller, $injector, $rootScope) {
    	scope = $rootScope.$new();
    	$http = $injector.get('$httpBackend');
    	Ctrl = $controller;
  	}));
  	
  	describe('Phase: Initialization', function () {
  		
  		afterEach(function () {
  			$http.verifyNoOutstandingRequest();
  			$http.verifyNoOutstandingExpectation();
  		});
  		
  		it('should request fabrics from the server via get', function () {
  			$http.expectGET('/api/v1/fabric/').respond([{id:1, description:'Max Col:Blue'}]);
  			ctrl = Ctrl('SupplyFabricViewCtrl', {$scope:scope});
  			expect(scope.fabrics).toEqual(jasmine.any(Array));
  			expect(scope.fabrics.length).toEqual(0);
  			$http.flush();
  			expect(scope.fabrics.length).toEqual(1);
  		});
  		
  	});
  	
  	describe('Phase: Post-Initialization', function () {
  		
  		beforeEach(function () {
  			$http.expectGET('/api/v1/fabric/').respond([
  				{
  					id:1, 
  					description:'Max Col:Blue'
  				}
  			]);
  			ctrl = Ctrl('SupplyFabricViewCtrl', {$scope:scope});
  			$http.flush();
  		});
  		
  		afterEach(function () {
  			$http.verifyNoOutstandingExpectation();
  			$http.verifyNoOutstandingRequest();
  		});
  		
  		describe('Searching the server', function () {
  			
  			it('should request fabrics with a query string', function () {
  				$http.expectGET('/api/v1/fabric/?limit=5&q=m').respond([{id:22, description: 'Max Col:Pink'}]);
  				scope.query = 'm';
  				scope.$digest();
  				expect(scope.fabrics.length).toEqual(1);
  				
  				$http.flush();
  				expect(scope.fabrics.length).toEqual(2);
  				expect(scope.fabrics[1].id).toEqual(22);
  				expect(scope.fabrics[1].description).toEqual('Max Col:Pink');
  			});
  		});
  		
  		describe('Load more fabrics from the server', function () {
  			
  			it('should request fabrics with an offset and limit parameter', function () {
  				$http.expectGET('/api/v1/fabric/?limit=50&offset=1').respond([{id:23, description: 'Max Col:Red'}]);
  				scope.loadNext();
  				expect(scope.fabrics.length).toEqual(1);
  				
  				$http.flush();
  				expect(scope.fabrics.length).toEqual(2);
  				expect(scope.fabrics[1].id).toEqual(23);
  				expect(scope.fabrics[1].description).toEqual('Max Col:Red');
  			});
  			
  		});
  	});

  
});

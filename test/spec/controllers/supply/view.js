'use strict';

describe('Controller: SupplyViewCtrl', function () {

  	// load the controller's module
  	beforeEach(module('employeeApp'));
  	beforeEach(module('employeeApp.mocks'));

  	var SupplyViewCtrl,
  		$http,
  		ctrl,
  		Ctrl,
    	scope,
		$timeout,
    	scanner;

  	// Initialize the controller and a mock scope
  	beforeEach(inject(function ($controller, $injector, $rootScope) {
  		Ctrl = $controller,
  		$http = $injector.get('$httpBackend');
    	scope = $rootScope.$new();
    	scanner = $injector.get('scanner');
		$timeout = $injector.get('$timeout');
  	}));

  	describe('Phase: Initialization', function(){
  		
  		afterEach(function () {
  			$http.verifyNoOutstandingExpectation();
  			$http.verifyNoOutstandingRequest();	
  		});
  		
  		it('should make a GET request', function(){
  			$http.expectGET('/api/v1/supply/type/').respond(['nail', 'fabric']);
  			$http.expectGET('/api/v1/supply/?country=TH').respond([{id:4}, {id:8}]);
  			ctrl = Ctrl('SupplyViewCtrl', {$scope: scope});
  			expect(scope.supplies.length).toEqual(0);
  			
  			$http.flush();
  			expect(scope.supplies.length).toEqual(2)
  		});
  	});
  	
  	describe('Phase: Post-Initialization', function () {
  		
  		beforeEach(function () {
  			$http.whenGET('/api/v1/supply/?country=TH').respond([
  				{
  					id: 8,
  					description: 'F-100'
  				},
  				{
  					id: 10,
  					description: 'ENF-80'
  				}
  			]);
  			$http.whenGET('/api/v1/supply/type/').respond(['fabric', 'glue'])
  			ctrl = Ctrl('SupplyViewCtrl', {$scope:scope});
  			$http.flush();
  		});
  		
  		afterEach(function () {
  			$http.verifyNoOutstandingRequest();
  			$http.verifyNoOutstandingExpectation();
  		});
  		
  		describe('Searching mechanism', function () {
  			
  			it('should send a request to the server with the query when the query string changes', function () {
  				$http.expectGET('/api/v1/supply/?country=TH&limit=1&q=f').respond([{id: 100, description: 'fabric'}]);
  				expect(scope.supplies.length).toEqual(2);
  				scope.query = 'f'
  				scope.$digest();
  				
  				$http.flush();
  				expect(scope.supplies.length).toEqual(3);
   			});
			
			xit('should start a timer before sending a request to the server', function () {
				expect(scope.supplies.length).toEqual(2);
				scope.query = 'f';
				scope.$digest();
				expect(scope.supplies.length).toEqual(2);
				$http.verifyNoOutstandingRequest();
			
				$http.expectGET('/api/v1/supply/?country=TH&limit=1&q=f')
				.respond([
					{id: 100, description: 'fabric'}
				]);
				$timeout.flush();
				$http.flush();
				expect(scope.supplies.length).toEqual(3);
				
			});
  		});
  		
  		describe('loading more supplies from the server', function () {
  			
  			it('should request more supplies from the server with a limit and offset', function () {
  				$http.expectGET('/api/v1/supply/?country=TH&limit=50&offset=2').respond([
  					{id: 100},
  					{id: 900}
  				]);
  				expect(scope.supplies.length).toEqual(2);
  				scope.loadNext();
  				
  				$http.flush();
  				expect(scope.supplies.length).toEqual(4);
  				expect(scope.supplies[2].id).toEqual(100);
  				expect(scope.supplies[3].id).toEqual(900);
  			});
  		});
  		
  		describe('scanner mode', function () {
  			it('should disable the standard codes for the scanner', function () {
  				expect(globalScanner.enabled).toBeTruthy();
  				scope.scannerMode = true;
  				scope.$digest();
  				
  				expect(globalScanner.enabled).toBeFalsy();
  			});
  		});
  		
  	});
});

'use strict';

describe('Directive: supplierList', function () {
	beforeEach(module('employeeApp'));
	
	var compile,
		element,
		rootScope,
		$http,
		scope;
		
	beforeEach(inject(function ($compile, $rootScope, $injector) {
		$http = $injector.get('$httpBackend');
		
	}));
	
	/*
	 * Tests for the period before any user interaction
	 * is anticipated and ater the compilation process 
	 */
	describe('Phase: Initialization', function () {
		
		/*
		 * Verify that there are no outstanding requests
		 */
		afterEach(function () {
			$http.verifyNoOutstandingExpectation();
			$http.verifyNoOutstandingRequest();
		});
		
		it('should make a request to the server for suppliers', inject(function ($compile, $rootScope) {
			$http.expectGET('views/templates/supplier-list.html').respond('<div><div class="supplier" ng-repeat="supplier in suppliers"></div></div>')
			$http.expectGET('/api/v1/supplier/?limit=20').respond([]);
			
			element = angular.element('<div supplier-list></div>');
			$compile(element)($rootScope);
			$http.flush();
			$rootScope.$digest();
		}));
		
		it('should render 2 .supplier divs', inject(function ($compile, $rootScope) {
			$http.expectGET('views/templates/supplier-list.html').respond('<div><div class="supplier" ng-repeat="supplier in suppliers"></div></div>')
			$http.expectGET('/api/v1/supplier/?limit=20').respond([
				{id: 1},
				{id: 2}
			]);
			
			element = angular.element('<div supplier-list></div>');
			$compile(element)($rootScope);
			$http.flush();
			$rootScope.$digest();
			
			var elms = element.find('.supplier');
			expect(elms.length).toEqual(2);
		}));
	});
	
	/*
	 * Tests for everything that happens after the directive
	 * has been initialized and is prepared for user interaction
	 */
	describe('Phase: Post-Initialization', function () {
		
		/*
		 * Prepare the test environment for this directive
		 */
		beforeEach(inject(function ($compile, $rootScope) {
			$http.expectGET('views/templates/supplier-list.html').respond('<div><div class="supplier" ng-repeat="supplier in suppliers | filter:query" ng-click="select(supplier)">{{supplier.name}}</div></div>')
			$http.expectGET('/api/v1/supplier/?limit=20').respond([{id:2}]);
			
			element = angular.element('<div supplier-list></div>');
			$compile(element)($rootScope);
			$http.flush();
			$rootScope.$digest();
			scope = element.isolateScope();
		}));
		
		afterEach(function () {
			$http.verifyNoOutstandingRequest();
			$http.verifyNoOutstandingExpectation();
		});
		
		/*
		 * Loading more suppliers
		 */
		describe('Loading more suppliers', function () {
			it('should request more suppliers from the server', function () {
				$http.expectGET('/api/v1/supplier/?limit=50&offset=1').respond([
					{id: 4},
					{id: 5}
				]);
				scope.loadNext();
				$http.flush();
				scope.$digest();
				expect(scope.suppliers.length).toEqual(3);
				var elms = element.find('.supplier');
				expect(elms.length).toEqual(3);
			});
		});
		
		/*
		 * Searching for suppliers
		 */
		describe('Searching for suppliers', function () {
			it('should request suppliers based on query', function () {
				$http.expectGET('/api/v1/supplier/?limit=5&q=d').respond([
					{
						id:8,
						name: 'Diamond Jamboree'
					},
					{
						id:9,
						name: 'Dukie Bonanza'
					}
				]);
				scope.query = 'd';
				scope.$digest();
				$http.flush();
				
				//Tests
				expect(scope.suppliers.length).toEqual(3);
				var elms = element.find('.supplier');
				expect(elms.length).toEqual(2);
				expect(elms[0].innerHTML).toEqual('Diamond Jamboree');
				expect(elms[1].innerHTML).toEqual('Dukie Bonanza');
			});
		});
		
		/*
		 * Select a supplier
		 */
		describe('Selecting a supplier', function() {
			it('should call the select function', function () {
				spyOn(scope, 'select');
				$(element.find('.supplier')[0]).click();
				expect(scope.select).toHaveBeenCalled();
			});
		});
	});
});

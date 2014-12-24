
describe('Directive: supplyList', function () {
	
	beforeEach(module('employeeApp'));
	beforeEach(module('employeeApp.mocks'));
	beforeEach(module('directives'));
	
	var $http,
		scope,
		r,
		element;
		
	beforeEach(inject(function ($injector) {
		$http = $injector.get('$httpBackend');
	}));
	
	/*
	 * Tests for all intializations which are expected 
	 * to occur before any user interaction
	 */
	describe('Phase: Initialiation', function () {
		
		afterEach(function () {
			$http.verifyNoOutstandingExpectation();
			$http.verifyNoOutstandingRequest();
		});
		
		it('should request supplies', inject(function ($compile, $rootScope) {
			$http.expectGET('/api/v1/supply/type/').respond([]);
			$http.expectGET('/api/v1/supply/?limit=20').respond([{id:1}]);
			element = angular.element("<div supply-list></div>");
			$compile(element)($rootScope);
			$http.flush();
			$rootScope.$digest();
			scope = element.isolateScope();
			
			//Tests
			expect(scope.supplies.length).toEqual(1);
		}));
		
		it('should render 1 supply', inject(function ($compile, $rootScope) {
			$http.expectGET('/api/v1/supply/type/').respond([]);
			$http.expectGET('/api/v1/supply/?limit=20').respond([{id:1}]);
			element = angular.element("<div supply-list></div>");
			$compile(element)($rootScope);
			$http.flush();
			$rootScope.$digest();
			scope = element.isolateScope();
			
			//Tests
			var elms = element.find('.supply-inner-container');
			expect(elms.length).toEqual(1);
		}));
	});
	
	/*
	 * Describes all the tests athat occur after the initialization
	 * and when the directive is ready for user interaction
	 */
	describe("Phase: Post-Initialization", function () {
		
		beforeEach(inject(function ($compile, $rootScope) {
						
			$http.whenGET('/api/v1/supply/type/').respond([]);
			
			element = angular.element('<div supply-list supplier="testSupplier" new-supply="newSupply"></div>');
			$scope = $rootScope.$new();
			$compile(element)($scope);
			$scope.$digest();
			//$http.flush();
			$http.expectGET('/api/v1/supply/?limit=20&supplier_id=204').respond([{id:1}]);
			$scope.testSupplier = {id:204};
			$scope.$digest();
			$http.flush();
		}));
		
		afterEach(function () {
			$http.verifyNoOutstandingExpectation();
			$http.verifyNoOutstandingRequest();
		});
		
		/*
		 * Loading more supplies when the user scrolls to the bottom
		 */
		describe("Loading more supplies", function () {
			it('should request more supplies from the server', function () {
				//Validate pre function call
				scope = element.isolateScope();
				expect(scope.supplies.length).toEqual(1);
				expect(element.find('li.supply-inner-container').length).toEqual(1);
				
				$http.expectGET('/api/v1/supply/?limit=50&offset=1&supplier_id=204').respond([
					{id:5}, 
					{id:6}
				]);
				scope.loadNext();
				$http.flush();
				
				//Tests
				expect(scope.supplies.length).toEqual(3);
				var elms = element.find('.supply-inner-container');
				expect(elms.length).toEqual(3);
			});
			
			it('should request more supplies with the supplier id', function () {
				//Validate pre function call
				scope = element.isolateScope();
				expect(scope.supplies.length).toEqual(1);
				expect(element.find('li.supply-inner-container').length).toEqual(1);
				
				$http.expectGET('/api/v1/supply/?limit=50&offset=1&supplier_id=204').respond([
					{id:7}, 
					{id:9}
				]);
				scope.loadNext();
				$http.flush();
				
				//Tests
				expect(scope.supplies.length).toEqual(3);
				var elms = element.find('.supply-inner-container');
				expect(elms.length).toEqual(3);
			});
		});
		
		/*
		 * Searching for a supply
		 */
		xdescribe('Searching the supplies', function () {
			it('should request supplies within the search parameters', function () {
				$http.whenGET('/api/v1/supply/?limit=12&q=d&supplier_id=204').respond([]);
				scope.query = 'd';
				scope.$digest();
				$http.flush();
				
				//Tests
				expect(scope.supplies.length).toEqual(3);
				var elms = element.find('.supply-inner-container');
				expect(elms.length).toEqual(2);
			});
		});
		
		xdescribe('Adding a new supply to the list', function () {
			it('should add a supply to the list when the object changes', inject(function (Supply) {
				expect(scope.supplies.length).toEqual(1);
				dump(scope.supplies);
				r.newSupply = new Supply({id:4});
				r.$digest();
				dump(scope.supplies);
				expect(scope.supplies.length).toEqual(2);
				
			}));
		});
	});
});

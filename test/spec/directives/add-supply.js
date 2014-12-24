'use strict';

describe('Directive: addSupply', function () {
	
	//beforeEach(module('directive'));
  	beforeEach(module('employeeApp'));
  	beforeEach(module('employeeApp.mocks'));
	beforeEach(module('directives'));
	
  	var element,
  		scope,
		rScope,
  		$http,
  		notification,
  		rootScope;
	
	beforeEach(inject(function($injector, $rootScope){
		$http = $injector.get('$httpBackend');
		rootScope = $rootScope;
		notification = $injector.get('Notification');
		$http.whenGET('/api/v1/supply/type').respond([]);
	}));
	
	describe('phase: Initialization', function(){
		
		afterEach(function () {
			$http.verifyNoOutstandingExpectation();
			$http.verifyNoOutstandingRequest();
		});
		
		
		xit('should make a GET request for the suppliers', inject(function ($rootScope, $compile) {
			$http.expectGET('/api/v1/supplier?limit=0').respond([{id: 4}, {id: 8}]);
			$http.expectGET('/api/v1/supply?limit=0').respond([{id:5, description:'test'}])
			element = angular.element('<div add-supply></div>');
			element = $compile(element)($rootScope);
			$http.flush();
			$rootScope.$digest();
			var scope = element.isolateScope();

			expect(scope.suppliers).toEqual(jasmine.any(Array));
			expect(scope.suppliers.length).toEqual(2);
			
			expect(scope.supplies).toEqual(jasmine.any(Array));
			expect(scope.supplies.length).toEqual(1)
		}));
		
		xit("should create a selection for the supply with an extra option", inject(function ($rootScope, $compile) {
			$http.expectGET('/api/v1/supplier?limit=0').respond([{id: 4}, {id: 8}]);
			$http.expectGET('/api/v1/supply?limit=0').respond([{id:5, description:'test'}]);
			element = angular.element('<div add-supply></div>');
			element = $compile(element)($rootScope);
			$http.flush();
			$rootScope.$digest();
			var scope = element.isolateScope();
			
			
		}));
		
	
	});
	
	describe('Phase: Post-Initialization', function () {
		
		beforeEach(inject(function ($rootScope, $compile) {
			$http.whenGET('/api/v1/supplier/?limit=0').respond([]);
			$http.whenGET('/api/v1/supply/type/').respond([]);
			$http.whenGET('/api/v1/supply/?limit=20').respond([]);
			element = angular.element('<div add-supply="test" supplier="supplier" on-add="testAdd($supply)"></div>');
			$rootScope.test = true;
			$rootScope.testAdd = function() {};
			element = $compile(element)($rootScope);
			$http.flush();
			$rootScope.$digest();
			scope = element.isolateScope();
			rScope = $rootScope;
		}));
		
		describe("Assigning a supplier", function () {
			
			it('should set the supplier in the scope', inject(function ($rootScope) {
				expect(scope.supplier).not.toBeDefined();
				
				$rootScope.supplier = {id: 4};
				$rootScope.$digest();
				expect(scope.assignedSupplier).toBeDefined();
				expect(scope.supply.supplier).toBeDefined();
				expect(scope.supply.supplier.id).toEqual(4);
			}));
		});
		
		describe("Adding new vs existing supply" , function () {
			
			afterEach(function () {
				$http.verifyNoOutstandingExpectation();
				$http.verifyNoOutstandingRequest();
			});
			
			it('should extend the supply resource', function () {
				var supply = {id:5, units:'ml'}
				scope.selectSupply(supply);
				scope.$digest();
				dump(scope.supply);
				expect(scope.supply.id).toEqual(5);
				expect(scope.supply.units).toEqual('ml');
			});
			
			it('should add the supplier to the suppliers array when saving', function () {
				$http.expectPUT('/api/v1/supply/6/', {units:'pc', 
													  id:6, 
													  suppliers:[
														  {supplier:{id:2}}
													  ]}).respond();
				scope.form.$valid = true;
				scope.supply.id = 6;
				scope.supply.units = 'pc';
				scope.supply.supplier = {id:2};
				scope.add();
				$http.flush();
			});
		});
		
		xdescribe('adding a custom type', function () {
			beforeEach(function () {
				scope.supply.new_supply = true;	
				scope.$digest();
			});
			
			it('should have an option for a custom type', function () {
				var input = element.find('select.type');
				expect(input[0]).toBeDefined();
				input = input.find('option[value="custom"]');
				expect(input[0]).toBeDefined();
			});
			
			it('should hide the custom input if type is not custom', function () {
				scope.supply.type = 'wood';
				scope.$digest();
				var input = element.find('input.custom-type');
				expect(input[0]).not.toBeDefined();
			});
			it('should show the custom type input', function () {
				scope.supply.type = 'custom'
				scope.$digest();
				var input = element.find('input.custom-type');
				expect(input[0]).toBeDefined();
			});
		});
		
		describe('showing selected dimensions', function () {
			beforeEach(function () {
				scope.supply.new_supply = true;	
			});
			
			it('should only show width if units is meter, piece, pack, or yard', function () {
				scope.supply.units = 'm';
				expect(scope.showWidth()).toBeTruthy();
				scope.supply.units = 'pc';
				expect(scope.showWidth()).toBeTruthy();
				scope.supply.units = 'pack';
				expect(scope.showWidth()).toBeTruthy();
				scope.supply.units = 'yd';
				expect(scope.showWidth()).toBeTruthy();
				scope.supply.units = 'kg';
				scope.supply.type = 'packaging';
				expect(scope.showHeight()).toBeTruthy();
				
				scope.supply.units = 'apple';
				expect(scope.showWidth()).toBeFalsy();
			});
			
			it('should only show height if units is pack or piece', function () {
				scope.supply.units = 'pack';
				expect(scope.showHeight()).toBeTruthy();
				scope.supply.units = 'pc';
				expect(scope.showHeight()).toBeTruthy();
				scope.supply.units = 'kg';
				scope.supply.type = 'packaging';
				expect(scope.showHeight()).toBeTruthy();
				
				scope.supply.units = 'm';
				expect(scope.showHeight()).toBeFalsy();
			});
			
			it('should only show depth if units is piece or pack', function () {
				scope.supply.units = 'pack';
				expect(scope.showDepth()).toBeTruthy();
				scope.supply.units = 'pc';
				expect(scope.showDepth()).toBeTruthy();
				
				scope.supply.units = 'm';
				expect(scope.showDepth()).toBeFalsy();
				scope.supply.units = 'kg';
				expect(scope.showDepth()).toBeFalsy();
			});
		});
		
		describe('Selectively showing piece per pack', function () {
			
			it('should now show if the type is not box or pack', function () {
				scope.supply.units = 'wood';
				scope.$digest();
				expect(element.find('.piece-per-pack').length).toEqual(0);
			});
		});
		describe('Saving the supply', function () {
			
			it('should make a POST request to the server', function () {
				expect(notification.hidden).toBeTruthy();
				$http.expectPOST('/api/v1/supply/').respond({id:4});
				scope.supply.supplier = {id: 3, name: 'test'}
				scope.form = {$valid: true};
				scope.add();
				expect(notification.hidden).toBeFalsy();
				expect(notification.message).toEqual("Creating supply...");
				$http.flush();
				expect(notification.hidden).toBeFalsy();
				expect(notification.message).toEqual('Supply created');
			});
			
			it('should notify the user if the supply fails to be created', function () {
				expect(notification.hidden).toBeTruthy();
				$http.whenPOST('/api/v1/supply/').respond(500);
				scope.supply.supplier = {id: 3, name: 'test'}
				scope.form = {$valid: true};
				scope.add();
				expect(notification.hidden).toBeFalsy();
				expect(notification.message).toEqual("Creating supply...");
				$http.flush();
				expect(notification.hidden).toBeFalsy();
				expect(notification.message).toEqual('There was an error in creating the supply');
			});
			
			xit('should call the onAdd function', inject(function ($rootScope) {
				spyOn(rScope, 'testAdd');
				$http.whenPOST('/api/v1/supply/').respond({});
				scope.supply.supplier = {id: 3, name: 'test'}
				scope.form = {$valid: true};
				scope.add();
				$http.flush();
				expect(rScope.testAdd).toHaveBeenCalled();
				//expect(rScope.testAdd).toHaveBeenCalledWith({});
				
			}));
		});
	});
  	
});

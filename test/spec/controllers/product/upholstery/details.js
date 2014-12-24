'use strict';

describe('Controller: ProductUpholsteryDetailsCtrl', function () {
	beforeEach(module('employeeApp'));
	
	var controller,
		scope,
		$http;
		
	beforeEach(inject(function ($controller, $rootScope, $injector) {
		controller = $controller;
		scope = $rootScope.$new();
		$http = $injector.get('$httpBackend');
	}));
	
	describe('Phase: Initialization', function () {
		
		afterEach(function () {
			$http.verifyNoOutstandingExpectation();
			$http.verifyNoOutstandingRequest();
		});
		
		it('should make a request to the server', function () {
			$http.expectGET('/api/v1/upholstery/4/').respond({id:4, description: 'AC-2011 Sofa'});
			var ctrl = controller("ProductUpholsteryDetailsCtrl", {$scope:scope, $routeParams:{id:4}});
			$http.flush();
			
			expect(scope.uphol).toEqual(jasmine.any(Object));
			expect(scope.uphol.hasOwnProperty('id')).toBeTruthy();
			expect(scope.uphol.id).toEqual(4);
			expect(scope.uphol.hasOwnProperty('description')).toBeTruthy();
		});
	});
	
	describe('Phase: Post-Initialization', function () {
		beforeEach(function () {
			$http.whenGET('/api/v1/upholstery/4/').respond({id:4, description: 'AC-2011 Sofa', price:75});
			var ctrl = controller("ProductUpholsteryDetailsCtrl", {$scope:scope, $routeParams:{id:4}});
			$http.flush();
		});
		
		afterEach(function () {
			$http.verifyNoOutstandingExpectation();
			$http.verifyNoOutstandingRequest();
		});
		
		describe('Updating the server', function () {
			
			/*
			 * Update on object change
			 */
			xit('should send a put request when the object properties change', function () {
				waitsFor(function () {
					return !(scope.updateLoopActive && scope.uphol.hasOwnProperty('id'));
					
				});
				
				runs(function () {
					//Test pre-update
					expect(scope.uphol.hasOwnProperty('price')).toBeTruthy();
					expect(scope.uphol.price).toEqual(75);
					
					$http.expectPUT('/api/v1/upholstery/4/').respond({
						id:4,
						description: 'AC-2011 Sofa',
						price: 100
					});
					scope.uphol.price = 100;
					scope.$digest();
					$http.flush();
					
					//Test post-update and response
					expect(scope.uphol.hasOwnProperty('price'));
					expect(scope.uphol.price).toEqual(100);
				
				});
			});
		});
	});
});

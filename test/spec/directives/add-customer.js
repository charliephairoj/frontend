'use strict';

describe('Directive: addCustomer', function () {
	beforeEach(module('employeeApp'));
	beforeEach(module('directives'));
  	beforeEach(module('employeeApp.mocks'));

	var element,
		scope,
		notification,
		$http;
		
	beforeEach(inject(function ($injector) {
		$http = $injector.get('$httpBackend');
		notification = $injector.get('Notification');	
	}));
	
	describe('Phase: Initialization', function () {
		
	});
	
	describe('Phase: Post-Initilization', function () {
		
		beforeEach(inject(function ($rootScope, $compile) {
			element = angular.element('<div add-customer="ok"></div>');
			$rootScope.ok = true;  
			element = $compile(element)($rootScope);
			$rootScope.$digest();
			scope = element.isolateScope();
		}));
		
		afterEach(function () {
			$http.verifyNoOutstandingExpectation();
			$http.verifyNoOutstandingRequest();	
		});
		
		describe('Saving', function () {
			
			it('should make a request to the server', function () {
				$http.expectPOST('/api/v1/customer/').respond({id:8, name: 'John'});
				expect(notification.hidden).toBeTruthy();
				scope.form.$valid = true;
				scope.add();
				expect(notification.hidden).toBeFalsy();
				expect(notification.message).toEqual("Creating customer...");
				$http.flush();
				expect(notification.hidden).toBeFalsy();
				expect(notification.message).toEqual("Customer created");
			});
			
			it('should notify the user if customer failed to be created', function () {
				$http.whenPOST('/api/v1/customer/').respond(500);
				expect(notification.hidden).toBeTruthy();
				scope.form.$valid = true;
				scope.add();
				expect(notification.hidden).toBeFalsy();
				expect(notification.message).toEqual("Creating customer...");
				$http.flush();
				expect(notification.hidden).toBeFalsy();
				expect(notification.message).toEqual("There was an error in creating the customer");
			});
			
		});
	});
});

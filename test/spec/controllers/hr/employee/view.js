'use strict';

xdescribe('Controller: HrEmployeeViewCtrl', function () {

  	// load the controller's module
  	beforeEach(module('employeeApp'));

  	var HrEmployeeViewCtrl,
		$http,
		Ctrl,
		rScope,
    	scope;

	
	beforeEach(inject(function ($injector, $controller, $rootScope) {
		$http = $injector.get('$httpBackend');
		rScope = $rootScope;
		Ctrl = $controller;
	}));
	
	describe('Initializing the controller', function () {
		
		afterEach(function () {
			$http.verifyNoOutstandingExpectation();
			$http.verifyNoOutstandingRequest();
		});
		
		it('should make a GET request for a list of employees', function () {
			$http.expectGET('/api/v1/employee').respond([{id: 1, name: 'John'}]);
			var scope = rScope.$new();
			var ctrl = Ctrl('HrEmployeeViewCtrl', {$scope: scope});
			
			$http.flush();
			expect(scope.employees).toBeDefined();
			expect(scope.employees).toEqual(jasmine.any(Array));
			expect(scope.employees.length).toBe(1);
		});
	});
});

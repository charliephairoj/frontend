'use strict';

xdescribe('Controller: DialogsAddEmployeeCtrl', function () {

  	// load the controller's module
  	beforeEach(module('employeeApp'));

  	var DialogsAddEmployeeCtrl,
		$http,
    	scope;

  	// Initialize the controller and a mock scope
  	beforeEach(inject(function ($controller, $rootScope, $injector) {
    	$http = $injector.get('$httpBackend');
		scope = $rootScope.$new();
    	DialogsAddEmployeeCtrl = $controller('DialogsAddEmployeeCtrl', {
    		$scope: scope
    	});
  	
	}));
	
	describe('Post Initialization', function () {
		
		describe('Creating employee', function () {
			
			it('should make a POST call to the server', function () {
				$http.expectPOST('/api/v1/employee/').respond({id:4, first_name:"John"});
				
				scope.employee.first_name = "John";
				scope.create();
				
				$http.flush();
				expect(scope.employee).toBeDefined();
				expect(scope.id).not.toBeDefined();
				expect(scope.first_name).not.toBeDefined();
			});
		});
	});
});

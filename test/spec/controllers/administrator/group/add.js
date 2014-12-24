'use strict';

describe('Controller: AdministratorGroupAddCtrl', function () {

  	// load the controller's module
  	beforeEach(module('employeeApp'));

  	var AdministratorGroupAddCtrl,
  		Ctrl,
  		ctrl,
  		$http,
    	scope;

  	// Initialize the controller and a mock scope
  	beforeEach(inject(function ($controller, $injector) {
  		Ctrl = $controller;
  		$http = $injector.get('$httpBackend');
    	scope = {};
    	
  	}));
  	
  	afterEach(function () {
  		$http.verifyNoOutstandingExpectation();
  		$http.verifyNoOutstandingRequest();
  	});
  	
  	describe('Phase: Initiation', function() {
  		
  		it('should make initial calls to the server for permissions', function() {
  			$http.expectGET('/api/v1/permission/?limit=0').respond([{id: 4}]);
  			
  			ctrl = Ctrl('AdministratorGroupAddCtrl', {
	      		$scope: scope
	    	});
	    	
	    	$http.flush();
	    	expect(scope.permissions).toEqual(jasmine.any(Array));
	    	expect(scope.group.permissions).toEqual(jasmine.any(Array));
	    	expect(scope.group).toEqual(jasmine.any(Object));
			expect(typeof(scope.save)).toEqual('function');
			expect(scope.permissions[0]).toEqual(jasmine.any(Object));
			expect(scope.permissions[0].id).toEqual(4);
  		});
  	});
  	
  	describe('Phase: Post-Initialization', function() {
  		
  		beforeEach(function() {
  			$http.expectGET('/api/v1/permission/?limit=0').respond([]);
  			
  			ctrl = Ctrl('AdministratorGroupAddCtrl', {
	      		$scope: scope
	    	});
	    	
	    	$http.flush();
  		});
  		 
  		describe('Saving the new group', function() {
  			
  			it('should make a post call to the server', function() {
  				$http.expectPOST('/api/v1/group/').respond({});
  				
  				scope.save();
  				
  				$http.flush();
  			});
  		});
  	});

 
});

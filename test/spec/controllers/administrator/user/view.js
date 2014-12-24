'use strict';

describe('Controller: AdministratorUserViewCtrl', function () {

  	// load the controller's module
  	beforeEach(module('employeeApp'));

  	var AdministratorUserViewCtrl,
  		Ctrl,
  		ctrl,
  		$http,
    	scope;

  	// Initialize the controller and a mock scope
  	beforeEach(inject(function ($controller, $injector) {
    	scope = {};
    	Ctrl = $controller;
    	$http = $injector.get('$httpBackend');
    	
  	}));

	describe('Phase: Initialization', function() {
		it('should make a request to the server for users', function() {
			$http.expectGET('/api/v1/user/?limit=0').respond();
			ctrl = Ctrl('AdministratorUserViewCtrl', {$scope:scope});
		});
	});
  
});

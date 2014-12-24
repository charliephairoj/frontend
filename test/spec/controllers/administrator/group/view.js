'use strict';

describe('Controller: AdministratorGroupViewCtrl', function () {

  	// load the controller's module
  	beforeEach(module('employeeApp'));

  	var AdministratorGroupViewCtrl,
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
  		it('should make a request to the server for the initial set of groups', function() {
  			$http.expectGET('/api/v1/group/?limit=0').respond([{id:4, name:'God'}]);
  			
  			ctrl = Ctrl('AdministratorGroupViewCtrl', {$scope:scope});
  			expect(scope.groups).toEqual(jasmine.any(Array));
  			
  			$http.flush();
  			expect(scope.groups.length).toEqual(1);
  			expect(scope.groups[0].id).toEqual(4);
  			expect(scope.groups[0].name).toEqual('God');
  		});
  	});

 
});

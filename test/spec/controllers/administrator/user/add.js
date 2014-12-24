'use strict';

describe('Controller: AdministratorUserAddCtrl', function () {

  	// load the controller's module
  	beforeEach(module('employeeApp'));

  	var AdministratorUserAddCtrl,
  		Ctrl,
  		ctrl,
  		$http,
    	scope;

  	// Initialize the controller and a mock scope
  	beforeEach(inject(function ($controller, $injector) {
    	scope = {
    		form:{
    			$valid:false
    		}
    	};
    	Ctrl = $controller;
    	$http = $injector.get('$httpBackend');
    	
  	}));
  	
  	describe('Phase: Initialization', function() {
  		
  		it('should set up initial variables as childrens of scope', function() {
  			$http.whenGET('/api/v1/group/?limit=0').respond([{id:7, name:'God'}]);
  			ctrl = Ctrl('AdministratorUserAddCtrl', {$scope:scope});
  			
  			expect(scope.groups).toEqual(jasmine.any(Array));
  			expect(scope.user).toEqual(jasmine.any(Object));
  			expect(scope.user.groups).toBeDefined();
  			expect(scope.user.groups).toEqual(jasmine.any(Array));
  		});
  		it('should make a request to the server for groups', function() {
  			$http.expectGET('/api/v1/group/?limit=0').respond([{id:7, name:'God'}]);
  			
  			ctrl = Ctrl('AdministratorUserAddCtrl', {$scope:scope});
  			expect(scope.groups).toEqual(jasmine.any(Array));
  			
  			$http.flush();
  			expect(scope.groups.length).toEqual(1);
  			expect(scope.groups[0].id).toEqual(7);
  			expect(scope.groups[0].name).toEqual('God');
  		});
  	});
  	
  	describe('Phase: Post-Initialization', function() {
  		
  		beforeEach(function() {
  			$http.whenGET('/api/v1/group/?limit=0').respond([{id:9, name:'Accountant', $checked:true}]);
  			ctrl = Ctrl('AdministratorUserAddCtrl', {$scope:scope});
  			$http.flush();	
  		});
  		
  		describe('Saving an $invalid form', function() {
  			it('should not issue a request', function() {
	  			scope.save();
	  			$http.verifyNoOutstandingRequest();
  			});
  		});
  		
  		describe('Saving a $valid form', function() {
			
			it('should add groups to the user', function(){
				scope.form.$valid = true;
				expect(scope.groups.length).toEqual(1);
				scope.groups[0]['$checked'] = true;
				expect(scope.user.groups.length).toEqual(0);
				
				$http.expectPOST('/api/v1/user/').respond();
				scope.save();
				expect(scope.user.groups.length).toEqual(1);
				expect(scope.user.groups[0].id).toEqual(9);
				expect(scope.user.groups[0].name).toEqual('Accountant');
				
			});
  		});
  	});

  
});

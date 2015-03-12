 'use strict';

describe('Controller: ContactSupplierDetailsCtrl', function () {

  	// load the controller's module
  	beforeEach(module('employeeApp'));
  	beforeEach(module('employeeApp.mocks'));

  	var ContactSupplierDetailsCtrl,
  		ctrl,
  		Ctrl,
  		$http,
  		route,
    	scope,
    	notification,
    	$timeout;

  	// Initialize the controller and a mock scope
  	beforeEach(inject(function ($controller, $injector, $rootScope) {
  		$http = $injector.get('$httpBackend');
  		notification = $injector.get('Notification');
  		$timeout = $injector.get('$timeout');
  		Ctrl = $controller;
    	scope = $rootScope.$new();
    	route = {id:2};
  	}));
  	
  	describe('Phase: Initialization', function() {
  		it('should make a call to the server for the supplier', function() {
	  		$http.expectGET('/api/v1/supplier/2/').respond({id:2});
	  		ctrl = Ctrl('ContactSupplierDetailsCtrl', {
	  			$scope:scope,
	  			$routeParams: route
	  		});
	  		$http.flush();
	  		
	  		$http.verifyNoOutstandingExpectation();
	  		$http.verifyNoOutstandingRequest();
	  		
  		});
  		
  	});
  	
  	xdescribe('Phase: Post-Initialization', function() {
  		
  		beforeEach(function() {
  			$http.whenGET('/api/v1/supplier/2/').respond({id: 2, name:'Zippers R US'});
	  		ctrl = Ctrl('ContactSupplierDetailsCtrl', {
	  			$scope:scope,
	  			$routeParams: route
	  		});
	  		$http.flush();
  		});
  		
  		afterEach(function() {
  			$http.verifyNoOutstandingExpectation();
  			$http.verifyNoOutstandingRequest();
  		});
  		
  		describe('Updating the supplier', function() {
  			it('should make a put request to the server', function() {
  				$http.expectPUT('/api/v1/supplier/2/').respond({id:2, name:'Zippers R US', terms:30});
  				scope.supplier.terms = 30;
  				scope.$digest();
  				$timeout.flush();
  				$http.flush();
  				expect(angular.equals(scope.supplier, {id:2, name:'Zippers R US', terms:30}));
  			});
  			
  			it('should notify the user if the update fails', function () {
  				$http.whenPUT('/api/v1/supplier/2/').respond(500);
  				scope.supplier.terms = 15;
  				scope.$digest();
  				$timeout.flush();
  				$http.flush();
  				expect(angular.equals(scope.supplier, {id:2, name:'Zippers R US', terms:15}));
  			});
  			
  			it('should update when the scope is being destroyed', function () {
  				$http.expectPUT('/api/v1/supplier/2/').respond({id:2, name:'Zippers R US'});
  				scope.$destroy();
  				$http.flush();
  			});
  			
  			describe('Adding a contact', function () {
	        	it("should add a contact to the supplier", function () {
	        		$http.expectPUT('/api/v1/supplier/2/').respond({contacts:[{id:4}]});
	        		expect(scope.supplier.contacts).not.toBeDefined();
	        		scope.addContact({
	        			name:'Chuckles',
	        			email:'test@yahoo.com',
	        			telephone:1234
	        		});
	        		expect(scope.supplier.contacts).toBeDefined()
	        		expect(scope.supplier.contacts).toEqual(jasmine.any(Array));
	        		expect(scope.supplier.contacts.length).toEqual(1);
	        		expect(scope.supplier.contacts[0].name).toEqual('Chuckles');
	        		expect(scope.supplier.contacts[0].email).toEqual('test@yahoo.com');
	        		expect(scope.supplier.contacts[0].telephone).toEqual(1234);
	        		$http.flush();
	        		
	        		expect(scope.supplier.contacts[0].id).toBeDefined();
	        		expect(scope.supplier.contacts[0].id).toEqual(4);
	        		
	        	});
	        });
  		});
  		
  		describe('Deleting the supplier', function() {
  			it('should make a delete request to the server', function() {
  				$http.expectDELETE('/api/v1/supplier/2/').respond();
  				scope.remove();
  				$http.flush();
  			});
  		});
  	});

  
});

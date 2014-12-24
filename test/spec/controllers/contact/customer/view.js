'use strict';

describe('Controller: ContactCustomerViewCtrl', function () {

  	// load the controller's module
  	beforeEach(module('employeeApp'));
  	beforeEach(module('employeeApp.mocks'));

  	var ContactCustomerViewCtrl,
     	scope,
      	$http,
      	ctrl,
      	Ctrl, 
      	db, 
      	dbFactory;

  	// Initialize the controller and a mock scope
  	beforeEach(inject(function ($controller, $injector, $rootScope) {
      	$http = $injector.get('$httpBackend');
      	scope = $rootScope.$new();
      	Ctrl = $controller;
     	   
  	}));

  	describe('Phase: Initial Load', function(){
      
     
      
      	it('should perform a request from the server', function() {
          	$http.expectGET('/api/v1/customer/').respond([{id:1}, {id:2}]);
          	ctrl = Ctrl('ContactCustomerViewCtrl', {
              	$scope:scope
          	});
          	expect(scope.customers).toEqual(jasmine.any(Array))
          	expect(scope.customers.length).toEqual(0);
          	
          	$http.flush();
          	expect(angular.isArray(scope.customers)).toBeTruthy();
          	expect(scope.customers.length).toEqual(2);
          	expect(angular.equals(scope.customers[0], {id:1})).toBeTruthy();
          	expect(angular.equals(scope.customers[1], {id:2})).toBeTruthy();
      	}); 
      
      	it('should perform a GET request and update the preloaded results', function(){
      		$http.expectGET('/api/v1/customer/').respond([{id:3, name:'Charles'}, {id:4, name:'Matt'}, {id:5, name:'John'}]);
      		ctrl = Ctrl('ContactCustomerViewCtrl', {
          		$scope:scope
      		});
  

      		expect(angular.isArray(scope.customers)).toBeTruthy();
      		expect(scope.customers.length).toEqual(0);
      		
      		$http.flush();
      		expect(angular.isArray(scope.customers)).toBeTruthy();
      		expect(scope.customers.length).toEqual(3);
      		expect(angular.equals(scope.customers[0], {id:3, name:'Charles'})).toBeTruthy();
      		expect(angular.equals(scope.customers[1], {id:4, name:'Matt'})).toBeTruthy();
      		expect(angular.equals(scope.customers[2], {id:5, name:'John'})).toBeTruthy();
      	});
      
  	});
  
  	describe('Phase: Post-Initialization', function(){
      	// Initialize the controller and a mock scope
      	beforeEach(inject(function ($controller, $injector) {
          	$http.expectGET('/api/v1/customer/').respond([{id:3, name:'Charles'}, {id:4, name:'Matt'}, {id:5, name:'John'}]);
          	ctrl = $controller('ContactCustomerViewCtrl', {
            	$scope: scope
          	});
          	$http.flush();
     	 }));
     	 
     	 afterEach(function() {
     	 	 $http.verifyNoOutstandingRequest();
     	 	 $http.verifyNoOutstandingExpectation();
     	 });
     	 
     	 describe('searching the server', function() {
     	 	 it('should make a query with the query string to the server', function() {
     	 	 	$http.expectGET('/api/v1/customer/?q=char').respond([{id:3, name:'Charles'}, {id:99, name:'Charlie'}]);
     	 	 	scope.query = 'char';
     	 	 	scope.$digest();
     	 	 	expect(scope.customers.length).toEqual(3);
     	 	 	
     	 	 	$http.flush()
     	 	 	expect(scope.customers.length).toEqual(4);
     	 	 	expect(scope.customers[3].id).toEqual(99);
     	 	 });
     	 });
      	
      	describe('loading more customers', function() {
      		it('it should request more customers from the server via GET', function() {
      			$http.expectGET('/api/v1/customer/?limit=50&offset=3').respond([{id:8, name:'Lynne'}]);
      			scope.loadNext();
      			expect(scope.customers.length).toEqual(3);
      			
      			$http.flush();
      			expect(scope.customers.length).toEqual(4);
      		});
      	});
  	});
});

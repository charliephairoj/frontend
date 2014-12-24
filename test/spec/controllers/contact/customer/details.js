'use strict';

describe('Controller: ContactCustomerDetailsCtrl', function () {

  	// load the controller's module
  	beforeEach(module('employeeApp'));
  	beforeEach(module('employeeApp.mocks'));

  	var ContactCustomerDetailsCtrl,
      	Ctrl,
      	$http,
      	ctrl,
      	scope,
      	route,
      	notification,
      	$timeout;

  	// Initialize the controller and a mock scope
  	beforeEach(inject(function ($controller, $injector, $rootScope) {
      	scope = $rootScope.$new();
      	route = {id:89};
      	$http = $injector.get('$httpBackend');
      	notification = $injector.get('Notification');
      	$timeout = $injector.get('$timeout');
      	Ctrl = $controller;
   	/*
    ContactCustomerDetailsCtrl = $controller('ContactCustomerDetailsCtrl', {
      $scope: scope
    });*/
  	}));
    
    describe('Phase: Initializing Controller', function(){
         
        it('should request the Customer from the server', function(){
            $http.expectGET('/api/v1/customer/89/').respond({id:89, name:'Zack'});
            ctrl = Ctrl('ContactCustomerDetailsCtrl', {
              $scope: scope,
              $routeParams: route
            });
            expect(scope.customer).toEqual(jasmine.any(Object));
            $http.flush();
            expect(angular.equals(scope.customer, {id:89, name:'Zack'})).toBeTruthy();
        });  
        
    }); 
    
    describe('Phase: Updating', function(){
        
        beforeEach(function(){
            $http.whenGET('/api/v1/customer/89/').respond({id:89, name:'Zack'});
            ctrl = Ctrl('ContactCustomerDetailsCtrl', {
              $scope: scope,
              $routeParams: route
            });
            $http.flush();

        });
        
        it('should send a post update to the server', function(){
            
            expect(angular.equals(scope.customer, {id:89, name:'Zack'})).toBeTruthy();
            expect(notification.hidden).toBeTruthy();
            $http.expectPUT('/api/v1/customer/89/').respond(200, {id:89, name:'Zack', age:''});
            scope.customer.age = 21;
            scope.$digest();
            expect(notification.hidden).toBeTruthy();
            $timeout.flush();
            expect(notification.hidden).toBeFalsy();
            expect(notification.message).toEqual('Updating customer...');
            $http.flush();
            expect(angular.equals(scope.customer, {id:89, name:'Zack', age:21})).toBeTruthy();
			expect(notification.hidden).toBeFalsy();
			expect(notification.message).toEqual('Customer updated');            
        });
        
        it('should notify the user if the customer fails to update', function () {
        	$http.whenPUT('/api/v1/customer/89/').respond(500);
        	expect(notification.hidden).toBeTruthy();
        	scope.customer.age = 21;
        	scope.$digest();
        	$timeout.flush();
        	expect(notification.hidden).toBeFalsy();
        	expect(notification.message).toEqual('Updating customer...');
        	$http.flush();
        	expect(notification.hidden).toBeFalsy();
        	expect(notification.message).toEqual('There was an error updating the customer');
        });
        
        
    });
    
    describe('Phase: Remove', function(){
        
        beforeEach(function(){
            $http.whenGET('/api/v1/customer/89/').respond({id:89, name:'Zack'});
            ctrl = Ctrl('ContactCustomerDetailsCtrl', {
              $scope: scope,
              $routeParams: route
            });
            $http.flush();

        });
         
        it('should send a DELETE request to the server', function(){
            expect(angular.equals(scope.customer, {id:89, name:'Zack'})).toBeTruthy(); 
            $http.expectDELETE('/api/v1/customer/89/').respond(201);
            scope.remove();
            $http.flush();
        });
        
    });
    
 
});

'use strict';

describe('Controller: ContactCustomerAddCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeApp'));
  	beforeEach(module('employeeApp.mocks'));
  var ContactCustomerAddCtrl,
      Ctrl,
      ctrl,
      scope,
      $http,
      notification;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $injector) {
      $http = $injector.get('$httpBackend');
      scope = {form: {$valid:true}};
      Ctrl = $controller;
      notification = $injector.get('Notification');
  }));
  
  describe('Phase: Initializing', function(){
      
      beforeEach(function(){
           ctrl = Ctrl('ContactCustomerAddCtrl', {
               $scope: scope
           });
      });
      
      it('should create an empty resource', function(){
          expect(scope.hasOwnProperty('customer')).toBeTruthy();
          expect(angular.equals(scope.customer, {})).toBeTruthy();   
      });
  });
  
	describe('Phase: Saving', function(){
      
      	beforeEach(function(){
          	ctrl = Ctrl('ContactCustomerAddCtrl', {
              	$scope: scope
          	});
      	});
      
      	it('should send a POST request', function(){
          	scope.customer.name = 'Johnny';
          	$http.expectPOST('/api/v1/customer/').respond({id:101, name:'Johnny'});
          	expect(scope.customer.hasOwnProperty('id')).toBeFalsy();
          	expect(scope.customer.id).not.toBeDefined();
          	scope.save();
          	$http.flush();
          	expect(notification.hidden).toBeFalsy();
          	expect(notification.message).toEqual('Customer created');
          	expect(scope.customer.hasOwnProperty('id')).toBeTruthy();
          	expect(scope.customer.id).toEqual(101);
          	expect(scope.customer.id).toBeDefined();  
      	});
      
      	it('should notify the user if the customer fails to save', function () {
      		expect(notification.hidden).toBeTruthy();
			$http.whenPOST('/api/v1/customer/').respond(500);
			scope.save();
			expect(notification.hidden).toBeFalsy();
			expect(notification.message).toEqual('Creating customer...');
			$http.flush();
			expect(notification.hidden).toBeFalsy();
			expect(notification.message).toEqual('There was an error in creating the customer');
      	});
      	
      	it('should notify the user if the form is incomplete', function() {
      		expect(notification.hidden).toBeTruthy();
      		scope.form.$valid = false;
      		scope.save();
      		expect(notification.hidden).toBeFalsy();
      		expect(notification.message).toEqual('Please fill out all required fields correctly');
      	});
  	});

  
});

'use strict';

describe('Controller: ContactSupplierAddCtrl', function () {

  	// load the controller's module
  	beforeEach(module('employeeApp'));
  	beforeEach(module('employeeApp.mocks'));
  	var ContactSupplierAddCtrl,
      	ctrl,
     	Ctrl,
      	$http, 
      	scope,
      	notification;

  	// Initialize the controller and a mock scope
  	beforeEach(inject(function ($controller, $injector) {
      	$http = $injector.get('$httpBackend');
      
    	scope = {form:{$valid:true}};
      	ctrl = $controller('ContactSupplierAddCtrl', {
               $scope: scope
        });
        notification = $injector.get('Notification');
        
  	}));
  
  	afterEach(function() {
  		$http.verifyNoOutstandingExpectation();
  		$http.verifyNoOutstandingRequest();	
  	});
  	
  	describe('Phase: Initializing', function(){
      
      	it('should Create an empty resource', function(){
          	expect(scope.supplier).toEqual(jasmine.any(Object));
      	});
  	});
  	
  	
 	describe('Phase: Saving', function(){
      
      	it('should Create an empty resource', function(){
          	expect(angular.equals(scope.supplier,{})).toBeTruthy(); 
          	scope.supplier.name = 'Zipper World';
          	$http.expectPOST('/api/v1/supplier/').respond({id:59, name:'Zipper World'});
          	scope.save();
         	$http.flush();
      	}); 	 
      	
      	it('should notify if the form is not filled out correctly', function () {
      		scope.form.$valid = false;
      		expect(notification.hidden).toBeTruthy();
      		scope.save();
      		expect(notification.hidden).toBeFalsy();
      		expect(notification.message).toEqual('Please fill out all required sections correctly');
      	});
      	
      	it('should notify the user if the supplier fails to save', function (){
      		$http.whenPOST('/api/v1/supplier/').respond(500);
      		expect(notification.hidden).toBeTruthy();
      		scope.save();
      		expect(notification.hidden).toBeFalsy();
      		expect(notification.message).toEqual("Saving supplier...");
      		$http.flush();
      		expect(notification.hidden).toBeFalsy();
      		expect(notification.message).toEqual("There was an error in creating this supplier");
      	});
  	});


  	describe('Phase: Adding Contact', function(){
      
      	it('should Create an empty resource', function(){
          	expect(scope.supplier.hasOwnProperty('contacts')).toBeFalsy();
          	scope.contact = {name:'Charlie'};
          	scope.addContact();
          	expect(scope.supplier.hasOwnProperty('contacts')).toBeTruthy();
          	expect(scope.supplier.contacts).toBeDefined();
          	expect(angular.isArray(scope.supplier.contacts)).toBeTruthy();
          	expect(scope.supplier.contacts.length).toEqual(1);
          	expect(scope.contact).toEqual({});
      	});  
  	});

  
});

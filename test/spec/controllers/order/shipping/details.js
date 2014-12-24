'use strict';

describe('Controller: OrderShippingDetailsCtrl', function () {

  	// load the controller's module
  	beforeEach(module('employeeApp'));

  	var OrderShippingDetailsCtrl,
      	ctrl,
      	controller,
      	$http,
      	scope;

  	// Initialize the controller and a mock scope
  	beforeEach(inject(function ($controller, $injector) {
      	controller = $controller;
    	scope = {};
    	$http = $injector.get('$httpBackend');
  	}));
  
  	describe('Phase: Initialize', function(){
  		
  		afterEach(function () {
  			$http.verifyNoOutstandingExpectation();
  			$http.verifyNoOutstandingRequest();	
  		});
  		
      	it('should request the shipping manifest', function(){
          	$http.expectGET('/api/v1/shipping/1197/?pdf=true').respond({
              	id:1197
          	});
          	ctrl = controller('OrderShippingDetailsCtrl', {
              	$scope: scope,
              	$routeParams:{id:1197}
          	}); 
          	$http.flush();
          	expect(scope.shipping.id).toEqual(1197);
      	});
  	});
  
  	describe('Phase: Post-Initialization', function () {
	 	// Initialize the controller and a mock scope
	  	beforeEach(function () {
	      	var d = new Date('2013-4-15');
	      	$http.expectGET('/api/v1/shipping/1196/?pdf=true').respond({
	          	id:1196,
	          	delivery_date:d.toISOString(),
	          	pdf: {url:'$http://www.gibberish.com'}
	      	});
	      	ctrl = controller('OrderShippingDetailsCtrl', {
	          	$scope: scope,
	          	$routeParams:{id:1196}
	      	}); 
	      	$http.flush();
	    
	  	});
	  	
	  	afterEach(function () {
	  		$http.verifyNoOutstandingExpectation();
	  		$http.verifyNoOutstandingRequest();
	  	});
	  
	  	describe('Function: Update Delivery Date', function(){
	      	it('should change the vsibility var to false', function(){
	          	var d = new Date();
	          	scope.showCal = true;
	          	scope.shipping.delivery_date = d;
	          	expect(scope.showCal).toBeTruthy();
	          	expect(scope.shipping.delivery_date).toEqual(d);
	          	scope.updateDeliveryDate();
	          	expect(scope.showCal).toBeFalsy();
	          	expect(scope.shipping.delivery_date).toEqual(d);
	      	});
	  	});
	  
	  	describe('Function: Get PDF', function(){
	      	it('should change the vsibility var to false', function(){
	 
	          	//scope.getPDF();
	      	});
	  	});
	  
	  	describe('Function: Save', function(){
	  		
	      	it('should submit changes to the server', function(){
	          	$http.expectPUT('/api/v1/shipping/1196/').respond({});
	          	scope.save();
	          	
	          	$http.flush();
	      	});	
	  	});
  	
  	});

});

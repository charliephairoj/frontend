'use strict';

xdescribe('Controller: SupplyDetailsCtrl', function () {

  	// load the controller's module
  	beforeEach(module('employeeApp'));
  	beforeEach(module('employeeApp.mocks'));

  	var SupplyDetailsCtrl,
    	scope,
    	$http,
    	ctrl,
    	Ctrl,
    	$timeout,
    	notification;

	function keypress(keycode, alt) {
		var evt = jQuery.Event('keydown');
		evt.which = keycode;
		evt.keyCode = keycode;
		if (alt) {
			evt.altKey = true;
		} else {
			evt.altKey = false;
		}
		$(document.body).trigger(evt);
	}
	
  	// Initialize the controller and a mock scope
  	beforeEach(inject(function ($controller, $rootScope, $injector) {
    	scope = $rootScope.$new();
    	$http = $injector.get('$httpBackend');
    	$timeout = $injector.get('$timeout');
    	notification = $injector.get('Notification');
    	Ctrl = $controller;
  	}));

  	describe('Phase: Initialization', function () {
  		
  		afterEach(function () {
  			$http.verifyNoOutstandingExpectation();
  			$http.verifyNoOutstandingRequest();
  		});
  		
  		it('should make a request to the server for the supply', function () {
  			$http.expectGET('/api/v1/supply/1122?country=TH').respond({id:1122});
  			ctrl = Ctrl('SupplyDetailsCtrl', {$scope:scope, $routeParams:{id:1122}});
  			expect(scope.supply['id']).not.toBeDefined();
  			
  			$http.flush();
  			expect(scope.supply['id']).toBeDefined();
  			expect(scope.supply['id']).toEqual(1122);
  		});
  	});
  	
  	describe('Phase: Post-Initialization', function () {
  		
  		beforeEach(function () {
  			$http.whenGET('/api/v1/supply/1234?country=TH').respond({
  				id:1234,
  				description: 'F-100',
  				quantity: 4,
  				height: 100
  			});
  			ctrl = Ctrl('SupplyDetailsCtrl', {$scope:scope, $routeParams:{id:1234}});
  			$http.flush();
  		});
  		
  		afterEach(function () {
  			$http.verifyNoOutstandingRequest();
  			$http.verifyNoOutstandingExpectation();	
  		});
  		
  		describe('Adding an image to the supply', function () {
  			it('shoud add an image to the supply', function () {
  				scope.addImage({url:'http://test.com', id:4});
  				expect(scope.supply.hasOwnProperty('image'));
  				expect(scope.supply.image).toEqual(jasmine.any(Object));
  				expect(scope.supply.image.hasOwnProperty('id')).toBeTruthy();
  				expect(scope.supply.image.id).toEqual(4);
  				expect(scope.supply.image.hasOwnProperty('url')).toBeTruthy();
  				expect(scope.supply.image.url).toEqual('http://test.com');
  			});
  		});
  		
  		describe('Selectively show dimensions', function () {
  			
  			it('should selectively show width', function () {
  				scope.supply.type = 'fabric';
  				expect(scope.showWidth()).toBeTruthy();
  				scope.supply.units = 'pc';
  				expect(scope.showWidth()).toBeTruthy();
  				scope.supply.units = 'yd';
  				expect(scope.showWidth()).toBeTruthy();
  				scope.supply.units = 'kg';
  				scope.supply.type = 'packaging';
  				expect(scope.showWidth()).toBeTruthy();
  				scope.supply.units = 'm';
  				expect(scope.showWidth()).toBeTruthy();
  				
  				scope.supply.units = 'kg';
  				scope.supply.units = 'polishing';
  				expect(scope.showWidth()).toBeFalsy();
  			});
  		});
  		
  		describe('Updating the upc', function () {
  			it('should change the upc when an item is scanned and there is not upc', function () {
  				scope.showAddUPC = true;
  				scope.supply.suppliers = [{}];
  				scope.selectedSupplier = scope.supply.suppliers[0];
  				scope.$digest();
  				expect(scope.supply.suppliers[0].upc).not.toBeDefined();
  				keypress(76, true);
  				keypress(97);
  				keypress(97);
  				keypress(97);
  				keypress(97);
  				keypress(71, true);
  				expect(scope.supply.suppliers[0].upc).toBeDefined();
  				expect(scope.supply.suppliers[0].upc).toEqual('1111');
  			});
  		});
  		
  		/*
  		 * The scope now watches the supply and automatically
  		 * updates the server when the model changes
  		 */
  		describe('Updating the supply', function () {
  			
  			it('should sent a PUT request to the server', function () {
  				$http.expectPUT('/api/v1/supply/1234?country=TH').respond({
  					id:1234,
	  				description: 'F-100',
	  				quantity: 4,
	  				height: 90
  				});
  				expect(scope.supply.height).toEqual(100);
  				scope.supply.height = 90;
  				scope.$digest();
  				$timeout.flush();
  				expect(notification.hidden).toBeFalsy();
  				expect(notification.message).toEqual('Updating F-100...');
  				$http.flush();
  				expect(scope.supply.height).toEqual(90);
  				expect(notification.hidden).toBeFalsy();
  				expect(notification.message).toEqual('F-100 updated');
  			});
  			
  			it('should save the resource to the server without changing the current model used by the user', function () {
  				$http.expectPUT('/api/v1/supply/1234?country=TH').respond({
  					id:1234,
	  				description: 'F-100',
	  				quantity: 4,
	  				height: 90,
	  				width:0
  				});
  				expect(scope.supply.height).toEqual(100);
  				scope.supply.height = 90;
  				scope.$digest();
  				$timeout.flush();
  				scope.supply.width = 100;
  				scope.supply.depth = 10;
  				$http.flush();
  				expect(scope.supply.height).toEqual(90);
  				expect(scope.supply.width).toEqual(100);
  				expect(scope.supply.depth).toEqual(10);
  			});
  			
  			it('should notify the user if the update fails', function () {
  				$http.expectPUT('/api/v1/supply/1234?country=TH').respond(500);
  				expect(scope.supply.height).toEqual(100);
  				scope.supply.height = 90;
  				scope.$digest();
  				$timeout.flush();
  				expect(notification.message).toEqual('Updating F-100...');
  				$http.flush();
  				expect(notification.hidden).toBeFalsy();
  				expect(notification.message).toEqual('There was an error in updating F-100');
  			});
  		});
  		
  		describe('Adding a quantity of supply', function () {
  			
  			it('should send a POST request to the add url', function () {
  				$http.expectPOST('/api/v1/supply/1234/add?country=TH&quantity=7').respond({
	  				id:1234,
	  				description: 'F-100',
	  				quantity: 11,
	  				height: 100
	  			});
	  			expect(scope.supply.quantity).toEqual(4);
	  			scope.add(7);
	  			
	  			$http.flush();
	  			expect(scope.supply.quantity).toEqual(11);
  			});
  		});
  		
  		describe('Subtracting a quantity of supply', function () {
  			it('should send a POST request to the subtract url', function () {
  				$http.expectPOST('/api/v1/supply/1234/subtract?country=TH&quantity=2.9').respond({
	  				id:1234,
	  				description: 'F-100',
	  				quantity: 1.1,
	  				height: 100
	  			});
	  			expect(scope.supply.quantity).toEqual(4);
	  			scope.subtract(2.9);
	  			
	  			$http.flush();
	  			expect(scope.supply.quantity).toEqual(1.1);
  			});
  		});
  	});
});

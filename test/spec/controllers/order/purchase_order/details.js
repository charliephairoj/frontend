'use strict';

describe('Controller: OrderPurchaseOrderDetailsCtrl', function () {

  	// load the controller's module
  	beforeEach(module('employeeApp'));

  	var OrderPurchaseOrderDetailsCtrl,
  		Ctrl,
  		ctrl,
  		$http,
    	scope;

  	// Initialize the controller and a mock scope
  	beforeEach(inject(function ($controller, $rootScope, $injector) {
    	scope = $rootScope.$new();
    	$http = $injector.get('$httpBackend');
    	Ctrl = $controller;
    	
  	}));
  	
  	describe('Phase: Initialization', function () {
  		
  		afterEach(function () {
  			$http.verifyNoOutstandingRequest();
  			$http.verifyNoOutstandingExpectation();
  		});
  		
  		it('should make a call to the server for the item', function () {
  			$http.expectGET('/api/v1/purchase-order/1234/').respond({id:1234});
  			ctrl = Ctrl('OrderPurchaseOrderDetailsCtrl', {$scope:scope, $routeParams:{id:1234}});
  			$http.flush();
  			
  			expect(scope.po.id).toEqual(1234);
  		});
  	});
  	
  	describe('Phase: Post-Initialization', function () {
  		
  		beforeEach(function () {
  			$http.whenGET('/api/v1/purchase-order/2345/').respond({
  				id: 2345,
  				supplier: {
  					name: 'LST International'
  				},
  				total: 1234,
  				vat: 7,
  				items: [
  					{
  						id:5,
  						status: 'Ordered'
  					},
  					{
  						id:6,
  						status: 'Ordered'
  					}
  				]
  			});
  			ctrl = Ctrl('OrderPurchaseOrderDetailsCtrl', {$scope:scope, $routeParams:{id:2345}});
  			$http.flush();
  		});
  		
  		afterEach(function () {
  			$http.verifyNoOutstandingExpectation();
  			$http.verifyNoOutstandingRequest();
  		});
  		
  		
  		describe("Updating the purchase order", function () {
  			
  			describe('Adding an item', function () {
				
				it('should correctly display the unit cost, even when only cost is defined', function () {
					var supply = {
						id: 4,
						cost: 88.00
					}
					scope.addItem(supply);
					dump(scope.po.items[2]);
					
					expect(scope.po.items).toBeDefined();
					expect(scope.po.items[2].unit_cost).toBeDefined();
					expect(scope.po.items[2].unit_cost).toEqual(88.00);
				});
				
				it('should correctly display the unit cost, even when only supplier cost is defined', function () {

				
					var supply = {
						id: 4,
						suppliers: [
							{
								id: 5,
								cost: 89.00
							}
						]
					}
					scope.addItem(supply);
					dump(scope.po.items[2]);
					
					expect(scope.po.items).toBeDefined();
					expect(scope.po.items[2].unit_cost).toBeDefined();
					expect(scope.po.items[2].unit_cost).toEqual(89.00);
				});
				
				it('should correctly move the supply id to the item', function () {

					var supply = {
						id: 88,
						suppliers: [
							{
								id: 5,
								cost: 99.00
							}
						]
					}
					
					scope.addItem(supply);
					
					expect(scope.po.items[2]).toBeDefined();
					expect(scope.po.items[2].supply).toBeDefined();
					expect(scope.po.items[2].supply.id).toBeDefined();
					expect(scope.po.items[2].supply.id).toEqual(88);
					
				});
				
  				it('should add an item to the po and update to the server', function () {
  					$http.expectPUT('/api/v1/purchase-order/2345/').respond({
  						id:2345,
  						status: 'Processed',
  						pdf:{'url':'test'}
  					});
  					scope.save();
  					$http.flush();
  				});
  			});
  			
  			describe('Removing an item', function () {
  				xit('should remove an item from the po and upate to the server', function () {
  					scope.removeItem(1);
  					expect(scope.po.items.length).toEqual(1);
  				});
  			});
  			
  			it('should make a PUT call to the server', function () {
  				$http.expectPUT('/api/v1/purchase-order/2345/').respond({
  					id:2345,
  					status: 'Processed',
  					'pdf': {'url': 'yayy'}
  				});
  				scope.save();
  				$http.flush();
  			});
  		});
  		
  		describe('Receiving the shipment', function () {
  			
  			it('should make a PUT call to the server', function () {
	  			var date = new Date();
	  			$http.expectPUT('/api/v1/purchase-order/2345/').respond({
	  				id:2345,
	  				receive_date:date,
	  				status: 'Delivered'
	  			});
	  			scope.po.receive_date = date;
	  			scope.receive();
	  			$http.flush();
  			});
  		});
  	});

  	
});

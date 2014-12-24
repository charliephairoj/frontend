'use strict';

describe('Controller: OrderPurchaseOrderCreateCtrl', function () {

  	// load the controller's module
  	beforeEach(module('employeeApp'));
  	beforeEach(module('employeeApp.mocks'));

  	var OrderPurchaseOrderCreateCtrl,
  		ctrl,
  		Ctrl,
  		$http,
  		$timeout,
    	scope,
    	notification;

  	// Initialize the controller and a mock scope
  	beforeEach(inject(function ($controller, $injector, $rootScope) {
  		Ctrl = $controller;
  		$http = $injector.get('$httpBackend');
  		$timeout = $injector.get('$timeout');
    	scope = $rootScope.$new();
    	notification = $injector.get('Notification');
    	
  	}));

  	describe('Phase: Initiation', function(){
  		
  		afterEach(function(){
  			$http.verifyNoOutstandingExpectation();
  			$http.verifyNoOutstandingRequest();	
  		});
  		
		it('should make http request and projects', function(){
			
			$http.expectGET('/api/v1/project/').respond([{id:4, codename:'Ladawan'}]);
	  		ctrl = Ctrl('OrderPurchaseOrderCreateCtrl', {$scope: scope});
	  		$http.flush();
	  		
			expect(scope.projects.length).toBe(1);
 		}); 	
 			 
  	});
  	
  	describe('Phase: Putting together po', function() {
  		
  		beforeEach(function() {
			$http.whenGET('/api/v1/project/').respond([]);
  			ctrl = Ctrl('OrderPurchaseOrderCreateCtrl', {$scope: scope});
			scope.po.items = [];
  			$http.flush();
  		});
  		
  		afterEach(function() {
  			$http.verifyNoOutstandingExpectation();
  			$http.verifyNoOutstandingRequest();
  		});
  		
  		it('should add a supplier to the po', function() {
  			$http.expectGET('/api/v1/supply/?supplier_id=3').respond([{id:7, 
  																	  description:'tape', 
  																	  supplier: {name:'zipper test'},
  																	  cost: 90}]);
  			scope.addSupplier({id:3, name:'zipper test'});
  			$http.flush();
  			
  			expect(scope.po.supplier).toBeDefined();
  			expect(scope.po.supplier).toEqual({id:3, name:'zipper test'});
  			expect(scope.supplies.length).toBe(1);
  			expect(angular.equals(scope.supplies[0], {id:7, description:'tape', supplier: {name:'zipper test'}, cost:90})).toBeTruthy();
  			$timeout.flush();
  		});
  		
  		it('should add an item to the po', function() {
  			scope.addItem({id: 100, cost:100});
  			expect(scope.po.items.length).toBe(1);
  			expect(scope.po.items[0]).toEqual({id:100, cost:100});
  			$timeout.flush();
  		});
  		
		it("should set the item's cost from the unit cost", function () {
			scope.addItem({id:101, unit_cost:99.99});
			expect(scope.po.items.length).toBe(1);
			expect(scope.po.items[0]).toEqual({id:101, cost:99.99, unit_cost:99.99});
			$timeout.flush();
		});
		
		it("should set the item's cost from the unit cost", function () {
			scope.po.supplier = {id:3};
			scope.addItem({id:101, quantity:1, suppliers: [{cost:2, supplier:{id:4}}, {cost:1.99, supplier:{id: 3}}]});
			expect(scope.po.items.length).toBe(1);
			expect(scope.po.items[0].cost).toEqual(1.99);
			$timeout.flush();
		});
		
  		it('should remove an item from the po', function() { 
  			scope.po.items = [{id:101, cost:99}];
  			expect(scope.po.items.length).toBe(1);
  			expect(scope.po.items[0]).toEqual({id:101, cost:99});
  			scope.removeItem(0);
  			
  			expect(scope.po.items).not.toBeDefined();
  			$timeout.flush();
  		});
  		
  		it('should not update the item if the price has not settled after 5 seconds;', function () {
  			scope.po.items = [
  				{
  					id:1, 
  					cost:50.50
  				},
  				{
  					id:4,
  					cost:75.99
  				}
  			]
  			scope.$digest();
  			scope.po.items[0].cost = 50.59;
  			scope.$digest();
  			scope.po.items[0].cost = 50.60;
  			$timeout.flush();
    	});
  		
  		
  		describe('Totals', function () {
			
			it('should calculate the subtotal of the order', function () {
				scope.po.items.push({id:6, cost:51.44, quantity:2});
				expect(scope.subtotal()).toEqual(102.88);
			});
			
  			it('should calculate the totals of the order with no vat and additional discount', function () {
  				scope.po.items.push({id:4, cost:50.48, quantity:2});
  				expect(scope.total()).toEqual(100.96);
  			});
  			
  			it('should calculate the total with vat', function () {
  				scope.po.items.push({id:4, cost:10, quantity:1});
  				scope.po.vat = 7;
  				expect(scope.subtotal()).toEqual(10);
  				expect(scope.grandTotal()).toEqual(10.7);
  			});
  			
  			it('should calculate the discount of the supplier', function () {
  				scope.po.items.push({id:4, cost:10, quantity:1});
  				scope.po.discount = 10;
  				expect(scope.subtotal()).toEqual(10);
  				expect(scope.total()).toEqual(9);
  				expect(scope.discount()).toEqual(1);
  			});
  			
  			it('should calculate the discount of the po', function () {
  				scope.po.items.push({id:4, cost:10, quantity:1});
  				scope.po.discount = 12;
  				expect(scope.subtotal()).toEqual(10);
  				expect(scope.total()).toEqual(8.80);
  				expect(scope.discount()).toEqual(1.2);
  			});
  		});
  	});
  	
  	describe('Phase: Verification', function () {
  		beforeEach(function () {
			$http.whenGET('/api/v1/project/').respond([]);
  			$http.whenGET('/api/v1/supplier/?limit=0').respond([]);
  			ctrl = Ctrl('OrderPurchaseOrderCreateCtrl', {$scope: scope});
  			$http.flush();
  		});
  		
  		it('should not save if there is not supplier', function () {
  			expect(notification.hidden).toBeTruthy()
  			scope.save();
  			expect(notification.hidden).toBeFalsy();
  			expect(notification.message).toEqual('Please select a supplier');
  		});
  		
  		xit('should not save if there are no items in the purchase order', function () {
  			expect(notification.hidden).toBeTruthy();
  			scope.po.supplier = {id:3};
  			scope.save();
  			expect(notification.hidden).toBeFalsy();
  			expect(notification.message).toEqual("Please add items to the purchase order");
  		});
  		
  		it('should not save if items are missing quantities', function () {
  			expect(notification.hidden).toBeTruthy();
  			scope.po.supplier = {id:3};
			scope.po.vat = 7;
  			scope.po.items = [{id: 4, description: 'test'}];
  			scope.save();
  			expect(notification.hidden).toBeFalsy();
  			expect(notification.message).toEqual("test is missing a quantity");
  			
  		});
  	});
  	describe('Phase: Saving', function(){
  		beforeEach(function() {
			$http.whenGET('/api/v1/project/').respond([]);
  			$http.whenGET('/api/v1/supplier/?limit=0').respond([]);
  		    ctrl = Ctrl('OrderPurchaseOrderCreateCtrl', {$scope: scope});	
  		    $http.flush();
  		});
  		
  		afterEach(function() {
  			$http.verifyNoOutstandingExpectation();
  			$http.verifyNoOutstandingRequest()
  		})
		
		describe("Verify data sent via POST", function () {
			
			beforeEach(function () {
	  			scope.po.supplier = {id:3};
				scope.po.vat = 7;
	  			scope.po.items = [{id:4, cost:90, quantity: 1}];
			});
			
			it('should include project data for an existing project', function () {
				scope.po.project = {id:1, codename: "Ladawan"};
				
				$http.expectPOST('/api/v1/purchase-order/', {
	  				supplier: {
	  					id: 3
	  				},
					vat: 7,
					items: [{
						cost:90,
						quantity:1,
						supply: {id: 4}
					}],
					project: {
						id:1,
						codename: "Ladawan"
					}
				}).respond();
				
				scope.save(); 
				$http.flush();
			});
			
			it('should include project data for a new project', function () {
				scope.po.newProject = true;
				scope.po.newProjectName = "LR331";
				
				$http.expectPOST('/api/v1/purchase-order/', {
	  				supplier: {
	  					id: 3
	  				},
					vat: 7,
					items: [{
						cost:90,
						quantity:1,
						supply: {id: 4}
					}],
					project: {
						codename: "LR331"
					}
				}).respond();
				
				scope.save(); 
				$http.flush();
			});
			
			
		});
		
  		it('should make a POST request to the server', function(){
  			$http.expectPOST('/api/v1/purchase-order/', {
  				supplier: {
  					id: 3
  				},
				vat: 7,
				items: [{
					cost:90,
					quantity:1,
					supply: {id: 4}
				}]
  			}).respond();
  			scope.po.supplier = {id:3};
			scope.po.vat = 7;
  			scope.po.items = [{id:4, cost:90, quantity: 1}];
  			expect(notification.hidden).toBeTruthy();
  			scope.save(); 
  			expect(notification.hidden).toBeFalsy();
  			expect(notification.message).toEqual('Creating purchase order...');
  			$http.flush();
  		});
  		
  		it('should notify the user in the case of a failed request', function () {
  			$http.whenPOST('/api/v1/purchase-order/').respond(500);
  			scope.po.supplier = {id:4};
			scope.po.vat = 7;
  			scope.po.items = [{id:4, cost:90, quantity:2}];
  			expect(notification.hidden).toBeTruthy();
  			scope.save();
  			expect(notification.hidden).toBeFalsy();
  			expect(notification.message).toEqual('Creating purchase order...');
  			$http.flush();
  			expect(notification.hidden).toBeFalsy();
  			expect(notification.message).toEqual('There was an error in creating the purchase order.');
  			
  		});
  	})
});

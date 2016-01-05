'use strict';

fdescribe('Controller: OrderPurchaseOrderCreateCtrl', function () {

  	// load the controller's module
  	beforeEach(module('employeeApp'));
  	beforeEach(module('employeeApp.mocks'));

  	var OrderPurchaseOrderCreateCtrl,
  		ctrl,
  		Ctrl,
  		$http,
		element,
  		$timeout,
    	scope,
		$compile,
		Supplier,
		PurchaseOrder,
    	notification;

  	// Initialize the controller and a mock scope
  	beforeEach(inject(function ($controller, $injector, $rootScope) {
		$compile = $injector.get('$compile');
  		Ctrl = $controller;
  		$http = $injector.get('$httpBackend');
  		$timeout = $injector.get('$timeout');
    	scope = $rootScope.$new();
    	notification = $injector.get('Notification');
    	PurchaseOrder = $injector.get('PurchaseOrder');
    	Supplier = $injector.get('Supplier');
    	window.google = $injector.get('google');
		
    	
  	}));

  	describe('Phase: Initiation', function(){
  	
  		afterEach(function(){
  			$http.verifyNoOutstandingExpectation();
  			$http.verifyNoOutstandingRequest();	
  		});
  		
		it('should make initial request for projects and suppliers', function(){
			$http.expectGET('/api/v1/supplier/?limit=0&page_size=99999').respond([]);
			$http.expectGET('/api/v1/project/?limit=0&page_size=99999').respond([{id:4, codename:'Ladawan'}]);
			
	  		ctrl = Ctrl('OrderPurchaseOrderCreateCtrl', {$scope: scope});
	  		$http.flush();
			expect(scope.projects.length).toBe(1);
 		}); 	
		
		it('should set the purchase order attached to the scope', function () {
			$http.whenGET('/api/v1/supplier/?limit=0&page_size=99999').respond([]);
			$http.whenGET('/api/v1/project/?limit=0&page_size=99999').respond([{id:4, codename:'Ladawan'}]);
			
	  		ctrl = Ctrl('OrderPurchaseOrderCreateCtrl', {$scope: scope});
	  		$http.flush();
			
			expect(scope.po).toBeDefined();
		});
		
  	});
	
	describe('After the page is initialized', function () {
		
		beforeEach(function () {
			$http.whenGET('/api/v1/supplier/?limit=0&page_size=99999').respond([]);
			$http.whenGET('/api/v1/project/?limit=0&page_size=99999').respond([{id:4, codename:'Ladawan'}]);
			
	  		ctrl = Ctrl('OrderPurchaseOrderCreateCtrl', {$scope: scope});
	  		$http.flush();
		});
		
		describe('When the User creates the Purchase Order', function () {
		
			describe('Validating the purchase order', function () {
			
				it("it should call 'validatePurchaseOrder'", function () {
					
					spyOn(scope, 'validatePurchaseOrder').and.returnValue(false);
					
					//Call the create fn
					scope.create({supplier:{id:2, }});
					
					//Tests
					expect(scope.validatePurchaseOrder).toHaveBeenCalled();
					expect(scope.validatePurchaseOrder.calls.count()).toEqual(1);
				});
			});
			
			describe('Preparing the purchase order', function () {
				
				it("it should call '_preparePurchaseOrder if 'validatePurchaseOrder' return true", function () {
					//Prepare spies
					spyOn(scope, 'validatePurchaseOrder').and.returnValue(true);
					spyOn(scope, '_preparePurchaseOrder').and.returnValue(false);
					
					//Call the create fn
					scope.create();
					
					//Tests
					expect(scope.validatePurchaseOrder).toHaveBeenCalled();
					expect(scope.validatePurchaseOrder.calls.count()).toEqual(1);
					
					expect(scope._preparePurchaseOrder).toHaveBeenCalled();
					expect(scope._preparePurchaseOrder.calls.count()).toEqual(1);
				});
				
				describe('Preparing the items', function () {
					
			  		afterEach(function(){
			  			$http.verifyNoOutstandingExpectation();
			  			$http.verifyNoOutstandingRequest();	
			  		});
					
					it("should 'createSupply' if it does not have an 'id'", function () {
						spyOn(scope, '_prepareSupplier').and.returnValue(true);
						spyOn(scope, '_createSupply');
						
						scope._preparePurchaseOrder({
							items: [
								{
									description: 'testing item',
									quantity: 2,
									cost: 4
								}
							]
						});
						
						// Tests
						expect(scope._prepareSupplier).toHaveBeenCalled();
						
						expect(scope._createSupply).toHaveBeenCalled();
						expect(scope._createSupply.calls.count()).toEqual(1);
						
					});
					
					it('should send a POST request if the supply new', function () {
						spyOn(scope, '_prepareSupplier').and.returnValue(true);
						spyOn(scope, '_createSupply').and.callThrough();
					
						var testResource = {
							description: 'testing item',
							quantity: 2,
							cost: 4
						};
					
						// Set up expectation
						$http.expectPOST('/api/v1/supply/').respond({
							id: 5
						});
					
						scope._preparePurchaseOrder({
							supplier:  {
								id: 214, 
								cos: 23
							},
							items: [testResource]
						});
						
						$http.flush();
						expect(testResource.supply).toBeDefined();
						expect(testResource.supply).toEqual(jasmine.any(Object));
						expect(testResource.supply.id).toBeDefined();
						expect(testResource.supply.id).toEqual(5);
						
					});
				
					it("should call 'updateSupply' if it has an 'id' and is not associated with the supplier", function () {
						spyOn(scope, '_prepareSupplier').and.returnValue(true);
						spyOn(scope, '_updateSupply').and.callThrough();
						spyOn(scope, 'isNewSupply').and.returnValue(false);
						spyOn(scope, '_createSupply');
						
						scope._preparePurchaseOrder({
							supplier:  {
								id: 214, 
								cos: 23
							},
							items: [
								{
									id: 23,
									description: 'testing item',
									quantity: 2,
									cost: 4,
									suppliers: [
										{supplier: {id: 222}}
									]
								}
							]
						});
						
						// Tests
						expect(scope._prepareSupplier).toHaveBeenCalled();
						
						expect(scope._updateSupply).toHaveBeenCalled();
						expect(scope._updateSupply.calls.count()).toEqual(1);
						
						expect(scope.isNewSupply).toHaveBeenCalled();
						expect(scope.isNewSupply.calls.count()).toEqual(1);
						
						expect()
					});
				});
				
				it('should send a PUT request if the supply is not associated with the supplier', function () {
					spyOn(scope, '_prepareSupplier').and.returnValue(true);
					spyOn(scope, '_updateSupply').and.callThrough();
					spyOn(scope, 'isNewSupply').and.returnValue(true);
					
					var testResource = new PurchaseOrder({
						id: 23,
						description: 'testing item',
						quantity: 2,
						cost: 4,
						suppliers: [
							{supplier: {id: 222}}
						]
					});
					
					// Spy on the $update fn
					spyOn(testResource, '$update');
					
					// Set up expectation
					$http.expectPUT('/api/v1/supply/23').respond({
						
					});
					
					scope._preparePurchaseOrder({
						supplier:  {
							id: 214, 
							cos: 23
						},
						items: [testResource]
					});
					
					// Tests
					expect(testResource.$update).toHaveBeenCalled();
					expect(testResource.$update.calls.count()).toEqual(1);
				});
			});
			
			describe('Where the purchase order is valid', function () {
				
				var supplier,
					items;
					
				beforeEach(function () {
					element = angular.element("<button id='po-create' ng-click='create(po)'></button>");
				    $compile(element)(scope);
				    scope.$digest();
					
					supplier = new Supplier({
						id: 222,
						name: 'testing company'
					});
					items = [
						{
							description: 'testing item',
							quantity: 4,
							cost: 11
						},
						{
							id: 444,
							description: 'supply',
							suppliers: [
								{
									supplier: {id: 222}
								}
							]
						}
					];
					
				});
				
		  		afterEach(function(){
		  			$http.verifyNoOutstandingExpectation();
		  			$http.verifyNoOutstandingRequest();	
		  		});
				
				it('should call the $scope.save function', function() {
					spyOn(scope, 'create').and.callThrough();
					spyOn(scope, 'validatePurchaseOrder').and.returnValue(true);
					spyOn(scope, '_preparePurchaseOrder').and.callThrough();
				
			        element.click();
					
					expect(scope.create).toHaveBeenCalled();
					
					expect(scope.validatePurchaseOrder).toHaveBeenCalled();
					expect(scope.validatePurchaseOrder.calls.count()).toEqual(1);
					
					expect(scope._preparePurchaseOrder).toHaveBeenCalled();
					expect(scope._preparePurchaseOrder.calls.count()).toEqual(1);
				});
				
				it('should send a POST request', function () {
					spyOn(scope, 'create').and.callThrough();
					spyOn(scope, 'validatePurchaseOrder').and.returnValue(true);
					spyOn(scope, '_preparePurchaseOrder').and.callThrough();
					spyOn(scope, '_prepareSupplier').and.callThrough(true);
					spyOn(scope, '_createSupply').and.callThrough();
					spyOn(scope, '_updateSupply').and.callThrough();
					spyOn(scope, '_sendCreateRequest').and.callThrough();
					spyOn(scope, '_checkProgress').and.callThrough();
					
					//Expect
					$http.expectPUT('/api/v1/supplier/222/').respond(supplier);
					$http.expectPOST('/api/v1/supply/').respond({
							id: 222,
							name: 'testing company'
					});
					$http.expectPOST('/api/v1/purchase-order/').respond({
						id:87780,
						supplier: supplier,
						items: items
					});
					
					
					var purchaseOrder = new PurchaseOrder({
						supplier: supplier,
						items: items
					});
					
					scope.po = purchaseOrder
					element.click();
					
					
					
					$http.flush();
					
					
					// Tests
					expect(scope.create).toHaveBeenCalled();
					
					expect(scope.validatePurchaseOrder).toHaveBeenCalled();
					expect(scope.validatePurchaseOrder.calls.count()).toEqual(1);
					
					expect(scope._preparePurchaseOrder).toHaveBeenCalled();
					expect(scope._preparePurchaseOrder.calls.count()).toEqual(1);
					
					expect(scope._prepareSupplier).toHaveBeenCalled();
					expect(scope._prepareSupplier.calls.count()).toEqual(1);
					
					expect(scope._updateSupply).toHaveBeenCalled();
					expect(scope._updateSupply.calls.count()).toEqual(1);
					
					expect(scope._createSupply).toHaveBeenCalled();
					expect(scope._createSupply.calls.count()).toEqual(1);
					
					expect(scope._checkProgress).toHaveBeenCalled();
					expect(scope._checkProgress.calls.count()).toEqual(3);
					
					expect(scope._sendCreateRequest).toHaveBeenCalled();
					expect(scope._preparePurchaseOrder.calls.count()).toEqual(1);
					
					expect(purchaseOrder.id).toBeDefined();
					expect(purchaseOrder.id).toEqual(87780);
					
				});
			});
		});
	});
	
	
  	
});

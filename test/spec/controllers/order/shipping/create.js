'use strict';

describe('Controller: OrderShippingCreateCtrl', function () {

  	// load the controller's module
  	beforeEach(module('employeeApp'));

  	var OrderShippingCreateCtrl,
  		$http,
  		ctrl,
  		Ctrl,
    	scope;

  	// Initialize the controller and a mock scope
  	beforeEach(inject(function ($controller, $injector, $rootScope) {
    	scope = $rootScope.$new();
    	Ctrl = $controller;
    	$http = $injector.get('$httpBackend');
  	}));
  	
  	describe('Phase: Initialization', function () {
  		
  		afterEach(function () {
  			$http.verifyNoOutstandingRequest();
  			$http.verifyNoOutstandingExpectation();	
  		});
  		
  		it('should request acknowledgements from the server', function () {
  			$http.expectGET('/api/v1/acknowledgement/?limit=20').respond([{id:400}]);
  			ctrl = Ctrl('OrderShippingCreateCtrl', {$scope:scope});
  			expect(scope.acknowledgements).toEqual(jasmine.any(Array));
  			expect(scope.acknowledgements.length).toEqual(0);
  			
  			$http.flush();
  			expect(scope.acknowledgements).toEqual(jasmine.any(Array));
  			expect(scope.acknowledgements.length).toEqual(1);
  		});
  		
  		it('should create an empty Shipping object', function () {
  			$http.whenGET('/api/v1/acknowledgement/?limit=20').respond([]);
  			ctrl = Ctrl('OrderShippingCreateCtrl', {$scope:scope});
  			$http.flush();
  			
  			expect(scope.shipping).toBeDefined();
  			expect(scope.shipping).not.toBeNull();
  		});
  	});

	describe('Phase: Post-Initialization', function () {
		
		beforeEach(function () {
			$http.expectGET('/api/v1/acknowledgement/?limit=20').respond([
				{
					id: 400,
					customer: {name: 'John'},
					items: [
						{
							id: 10239,
							description: 'Table'
						},
						{
							id: 10338,
							description: 'Sofa'
						}
					]
				}
			]);
  			ctrl = Ctrl('OrderShippingCreateCtrl', {$scope:scope});
  			$http.flush(); 
		});
		
		afterEach(function () {
			$http.verifyNoOutstandingRequest();
			$http.verifyNoOutstandingExpectation();	
		});
		
		describe('Selecting the acknowledgement', function () {
			
			it('should take the given ack and integrate it with the shipping object', function () {
				scope.addAcknowledgement(scope.acknowledgements[0]);
				expect(scope.shipping.acknowledgement).toBeDefined();
				expect(scope.shipping.acknowledgement.id).toEqual(400);
				expect(scope.shipping.customer).toBeDefined();
				expect(scope.shipping.customer.name).toEqual('John');
				expect(scope.shipping.items).toBeDefined();
				expect(scope.shipping.items).toEqual(jasmine.any(Array));
				expect(scope.shipping.items.length).toEqual(2);
				expect(scope.shipping.items[0].description).toEqual('Table');
			});
		});
		
		describe('Searching for acknowledgements', function () {
			
			it('should send a get request to the server with a query string', function () {
				$http.expectGET('/api/v1/acknowledgement/?limit=5&q=J').respond([{id:8978, customer:{name:'James'}}]);
				scope.query = 'J';
				scope.$digest();
				expect(scope.acknowledgements.length).toEqual(1);
				
				$http.flush();
				expect(scope.acknowledgements.length).toEqual(2);
			});
		});
		
		describe('Loading more acknowledgements', function () {
			
			it('should request the server for more acks', function () {
				$http.expectGET('/api/v1/acknowledgement/?limit=20&offset=1').respond([{id:88, customer:{name:'Rena'}}]);
				expect(scope.acknowledgements.length).toEqual(1);
				scope.loadNext();
				$http.flush();
				expect(scope.acknowledgements.length).toEqual(2);
				expect(scope.acknowledgements[1].id).toEqual(88);
				expect(scope.acknowledgements[1].customer.name).toEqual('Rena');
			});
		});
		
		describe('Removing a product to ship', function () {
			
			it('should remove a product from the list items to ship', function () {
				scope.addAcknowledgement(scope.acknowledgements[0]);
				expect(scope.shipping.items).toEqual(jasmine.any(Array));
				expect(scope.shipping.items.length).toEqual(2);
				expect(scope.shipping.items[0].description).toEqual('Table');
				scope.removeProduct(0);
				expect(scope.shipping.items.length).toEqual(1);
				expect(scope.shipping.items[0].description).toEqual('Sofa');	
			});
		});
		
		describe('Creating the shipping manifest', function () {
			
			it('should send a POST request to the server', function () {
				$http.expectPOST('/api/v1/shipping/').respond({id:1898, pdf: {url: false}});
				scope.addAcknowledgement(scope.acknowledgements[0]);
				scope.create();
				expect(scope.shipping.id).not.toBeDefined();
				
				$http.flush();
				expect(scope.shipping.id).toBeDefined();
				expect(scope.shipping.id).toEqual(1898);
			});
		});
	});
  
});

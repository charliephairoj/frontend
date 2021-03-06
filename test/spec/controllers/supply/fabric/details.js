'use strict';

describe('Controller: SupplyFabricDetailsCtrl', function () {

  	// load the controller's module
  	beforeEach(module('employeeApp'));

  	var Ctrl,
  		ctrl,
  		$http,
  		params,
    	scope;

  	// Initialize the controller and a mock scope
  	beforeEach(inject(function ($controller, $injector) {
    	scope = {};
    	$http = $injector.get('$httpBackend');
    	params = {id:4};
    	Ctrl = $controller;
    	
  	}));
  	
  	describe('Phase: Initialization', function () {
  		
  		afterEach(function () {
  			$http.verifyNoOutstandingExpectation();
  			$http.verifyNoOutstandingRequest();	
  		});
  		
  		it('should make a request to the server for the fabric', function () {
  			$http.expectGET('/api/v1/fabric/4/').respond({id:4, pattern: 'Max', color: 'blue'});
  			$http.expectGET('/api/v1/log/?supply_id=4').respond([]);
			ctrl = Ctrl('SupplyFabricDetailsCtrl', {$scope: scope, $routeParams: params});
  			$http.flush();
  		});
  	});
  	
  	describe('Phase: Post-Initialization', function () {
  		
  		beforeEach(function () {
			$http.whenGET('/api/v1/log/?supply_id=4').respond([
				{
					id:5, 
					message:'price change', 
					action: 'PRICE CHANGE'
				}, {
					id:6,
					message: 'reserve 6yd',
					action: 'RESERVE',
					quantity: 6,
					acknowledgmeent_id: 555
				}, {
					id:7,
					message: 'cut 9yd',
					action: 'SUBTRACT'
				}
				]);
  			$http.whenGET('/api/v1/fabric/4/').respond({id:4, pattern: 'Max', color: 'red', quantity:3.2});
  			ctrl = Ctrl('SupplyFabricDetailsCtrl', {$scope: scope, $routeParams: params});
  			$http.flush();
  		});
  		
  		afterEach(function () {
  			$http.verifyNoOutstandingExpectation();
  			$http.verifyNoOutstandingRequest();
  		});
  		
		describe('Updating a log', function () {
			
			it('should not update if type is not reserve or subtract', function () {
				scope.updateLog(0);
				$http.verifyNoOutstandingRequest();
			});
			
			it('should send a PUT request if updating reserved to cut log', function () {
				var log = scope.logs[1];
				log.quantity = 4;
				log.action = 'CUT';
				
				$http.expectPUT('/api/v1/log/6/').respond({
					id: 6,
					action: 'SUBTRACT',
					quantity: 4,
					message: 'Subtract 4yd for acknowledgement 555',
					acknowledgement_id: 555 
				});
				
				scope.updateLog(1);
				$http.flush();

				var log = scope.logs[1];
				expect(log.id).toEqual(6);
				expect(log.quantity).toEqual(4);
				expect(log.action).toEqual('SUBTRACT');
				expect(log.message).toEqual('Subtract 4yd for acknowledgement 555');
				expect(log.acknowledgement_id, 555);
				
			});
		});
		/*
		 * We no longer use spectial endpoint for changing quantity. 
		 * Instad we will now change the quantity then submit entire 
		 * resource as a PUT request
		 */
  		xdescribe('Add quantity', function () {
  			
  			it('should send a post request to the server', function () {
  				$http.expectPOST('/api/v1/fabric/4/add?quantity=3').respond({id:4, pattern: 'Max', color: 'red', quantity:6.2})
  				scope.quantity = 3;
  				scope.add();
  				
  				$http.flush();
  				expect(scope.fabric.quantity).toEqual(6.2);
  				expect(scope.quantity).toBeNull();
  			});
  	  			
  		});
  		
		/*
		 * We no longer use spectial endpoint for changing quantity. 
		 * Instad we will now change the quantity then submit entire 
		 * resource as a PUT request
		 */
  		xdescribe('Subtract quantity', function () {
  			
  			it('should send a post request to the server', function () {
  				$http.expectPOST('/api/v1/fabric/4/subtract?quantity=2.1').respond({id:4, pattern: 'Max', color: 'red', quantity:1.1})
  				scope.quantity = 2.1;
  				scope.subtract();
  				
  				$http.flush();
  				expect(scope.fabric.quantity).toEqual(1.1);
  				expect(scope.quantity).toBeNull();
  			})
  		});
  	});

  
});

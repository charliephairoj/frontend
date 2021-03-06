'use strict';

describe('Controller: DialogsSupplyScannerCtrl', function () {

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
	
  	// load the controller's module
  	beforeEach(module('employeeApp'));
  	beforeEach(module('employeeApp.mocks'));

  	var DialogsSupplyScannerCtrl,
		$http,
    	scope;

  	// Initialize the controller and a mock scope
  	beforeEach(inject(function ($controller, $rootScope, $injector) {
		$http = $injector.get('$httpBackend');
		$http.whenGET('/api/v1/purchase-order/').respond([]);
		
    	scope = $rootScope.$new();
    	DialogsSupplyScannerCtrl = $controller('DialogsSupplyScannerCtrl', {
      		$scope: scope
    	});
		
  	}));

	afterEach(function () {
		$http.verifyNoOutstandingExpectation();
		$http.verifyNoOutstandingRequest();
	});
	
	describe('Requesting employee', function () {
		it('should make a GET call', function () {
			$http.expectGET('/api/v1/employee/1000087/').respond({id:1000087, first_name: "John", last_name: "Smith"});
			keypress(76, true);
			keypress(68);
			keypress(82);
			keypress(69);
			keypress(77);
			keypress(189);
			keypress(49);
			keypress(48);
			keypress(48);
			keypress(48);
			keypress(48);
			keypress(56);
			keypress(55);
			keypress(71, true);
			
			$http.flush();
			expect(scope.employee).toBeDefined();
			expect(scope.employee).toEqual(jasmine.any(Object));
			expect(scope.employee.hasOwnProperty('id')).toBeTruthy();
			expect(scope.employee.id).toEqual(1000087)
		});
	});
	
	describe('Requesting equipment', function () {
		it('should make a GET call', function () {
			$http.expectGET('/api/v1/equipment/187/').respond({
				id:187, 
				brand: 'Red King', 
				description: 'F-50',
				status: 'checked in'
			});
			
			//Simulate barcode scanning
			keypress(76, true);
			keypress(68);
			keypress(82);
			keypress(69);
			keypress(189);
			keypress(49);
			keypress(56);
			keypress(55);
			keypress(71, true);
			
			$http.flush();
			expect(scope.equipmentList).toBeDefined();
			expect(scope.equipmentList).toEqual(jasmine.any(Array));
			expect(scope.equipmentList.length).toEqual(1);
			expect(scope.equipmentList[0]).toBeDefined();
			expect(scope.equipmentList[0]).toEqual(jasmine.any(Object));
			expect(scope.equipmentList[0].hasOwnProperty('id')).toBeTruthy();
			expect(scope.equipmentList[0].id).toEqual(187)
			expect(scope.equipmentList[0].hasOwnProperty('description')).toBeTruthy();
			expect(scope.equipmentList[0].description).toEqual('F-50')
			expect(scope.equipmentList[0].hasOwnProperty('status')).toBeTruthy();
			
			
		});
	});
	
	describe('Requesting supply', function () {
		it('should make a GET call', function () {
			$http.expectGET('/api/v1/supply/187/?country=TH').respond({id:187, description: 'T-NUT', quantity: 199.8});
			
			//Simulate barcode scanning
			keypress(76, true);
			keypress(68);
			keypress(82);
			keypress(83);
			keypress(189);
			keypress(49);
			keypress(56);
			keypress(55);
			keypress(71, true);
			
			$http.flush();
			expect(scope.supplies).toBeDefined();
			expect(scope.supplies).toEqual(jasmine.any(Array));
			expect(scope.supplies.length).toEqual(1);
			expect(scope.supplies[0]).toBeDefined();
			expect(scope.supplies[0]).toEqual(jasmine.any(Object));
			expect(scope.supplies[0].hasOwnProperty('id')).toBeTruthy();
			expect(scope.supplies[0].id).toEqual(187);
			expect(scope.supplies[0].hasOwnProperty('description')).toBeTruthy();
			expect(scope.supplies[0].description).toEqual('T-NUT')
			expect(scope.supplies[0].hasOwnProperty('quantity')).toBeTruthy();
			expect(scope.supplies[0].quantity).toEqual(199.8);
			expect(scope.supplies[0].$$action).toBeDefined();
			expect(scope.supplies[0].$$action).toEqual('subtract');
			
		});
	});
	
	describe('Requesting purchase order', function () {
		
		it('should make a GET call to the server', function () {
			$http.expectGET('/api/v1/purchase-order/13345/').respond({id: 13345, items: [
				{
					id: 1064,
					supply: 4893,
					status: "Ordered",
					quantity: 1
				},
				{
					id: 1063,
					supply: 4892,
					status: "Ordered",
					quantity: 2
				},
				{
					id:1065,
					supply:5543,
					status: "Recieved",
					quantity: 7
				}
				
			]});
			
			//Simulate barcode scanning
			keypress(76, true);
			keypress(80);
			keypress(79);
			keypress(189);
			keypress(49);
			keypress(51);
			keypress(51);
			keypress(52);
			keypress(53);
			keypress(71, true);
			
			$http.flush();
			
			expect(scope.po).toBeDefined();
			expect(scope.po.hasOwnProperty('id')).toBeTruthy();
			expect(scope.po.id).toEqual(13345);
			expect(scope.po.items).toBeDefined();
			expect(scope.po.items).toEqual(jasmine.any(Array));
			expect(scope.po.items.length).toEqual(3);
			var item1 = scope.po.items[0];
			expect(item1.hasOwnProperty('id')).toBeTruthy();
			expect(item1.id).toEqual(1064);
			expect(item1.quantity).toEqual(1);
			expect(item1.status).toEqual('Ordered');
			var item2 = scope.po.items[1];
			expect(item2.hasOwnProperty('id')).toBeTruthy();
			expect(item2.id).toEqual(1063);
			expect(item2.quantity).toEqual(2);
			expect(item2.status).toEqual('Ordered');
			
		});
	});
	
 	describe('Checking out supplies', function () {
		
		it('should make a PUT call to the server', function () {
			
			//Set up employee
			scope.employee = {id: 4, first_name: "John", last_name: "Smith"};
			scope.supplies = [{id:3, quantity: 10, $$action: 'subtract', $$quantity: 2}, 
							  {id: 5, quantity: 12, $$action: 'add', $$quantity: 3}]
			$http.expectPUT('/api/v1/supply/', function (dataStr) {
				var data = JSON.parse(dataStr);
				for (var i = 0; i < data.length; i++) {
					if (typeof(data[i]) != "object") {
						return false;
					}
					
					if (!data[i].employee) {
						return false;
					}
					
					if (typeof(data[i].employee) != "object") {
						return false
					}
					
					if (typeof(data[i].employee.id) != "number") {
						return false;
					}
					
					if (data[i].employee.id != 4) {
						return false;
					}
					
				}
				
				if (data[0].quantity != 8) {
					return false;
				}
				
				if (data[1].quantity != 15) {
					return false;
				}
				
				return true;
			}).respond([]);
			
			scope.checkout();
			
			$http.flush();
			
		});
		
		it('should reset the supplies and employeeList', function () {
			$http.expectGET('/api/v1/supply/187/?country=TH').respond({id:187, description: 'T-NUT', quantity: 199.8});
			
			//Simulate barcode scanning
			keypress(76, true);
			keypress(68);
			keypress(82);
			keypress(83);
			keypress(189);
			keypress(49);
			keypress(56);
			keypress(55);
			keypress(71, true);
			
			$http.flush();
			expect(scope.supplies).toBeDefined();
			expect(scope.supplies.length).toEqual(1);
			
			$http.expectPUT('/api/v1/supply/').respond([]);
			scope.checkout();
			$http.flush();
			
			expect(scope.supplies).toEqual(jasmine.any(Array));
			
			
		});
		
		it('should reset the supplies and employeeList and be able to work again', function () {
			$http.expectGET('/api/v1/supply/187/?country=TH').respond({id:187, description: 'T-NUT', quantity: 199.8});
			
			//Simulate barcode scanning
			keypress(76, true);
			keypress(68);
			keypress(82);
			keypress(83);
			keypress(189);
			keypress(49);
			keypress(56);
			keypress(55);
			keypress(71, true);
			
			$http.flush();
			expect(scope.supplies).toBeDefined();
			expect(scope.supplies.length).toEqual(1);
			
			$http.expectPUT('/api/v1/supply/').respond([]);
			scope.checkout();
			$http.flush();
			
			expect(scope.supplies).toEqual(jasmine.any(Array));
			
			$http.expectGET('/api/v1/supply/187/?country=TH').respond({id:187, description: 'T-NUT', quantity: 199.8});
			
			//Simulate barcode scanning
			keypress(76, true);
			keypress(68);
			keypress(82);
			keypress(83);
			keypress(189);
			keypress(49);
			keypress(56);
			keypress(55);
			keypress(71, true);
			
			$http.flush();
			expect(scope.supplies).toBeDefined();
			expect(scope.supplies.length).toEqual(1);
			expect(scope.supplies[0].id).toEqual(187);
		});
	});
	
	describe('Checking out equipment', function () {
		
		it('should assign an employee to every checked out equipment', function () {
			scope.employee = {id: 4, first_name: "John", last_name: "Smith"};
			scope.equipmentList = [{
				id:122,
				description: 'F-50',
				brand: 'Red King',
				status: 'Checked Out'
			}];
			
			$http.whenPUT('/api/v1/supply/').respond([]);
			$http.expectPUT('/api/v1/equipment/', function (dataStr) {
				var data = JSON.parse(dataStr);
				
				if (typeof(data[0]).employee != "object") {
					return false
				}
				
				return true;
				
			}).respond([{}]);
			
			scope.checkout();
			
			$http.flush();
		});
	});
	
	describe('Checking out Purchase Order', function () {
		it('should make a PUT call to the server', function () {
			$http.expectGET('/api/v1/purchase-order/13345/').respond({id: 13345, items: [
				{
					id: 1064,
					supply: 4893,
					status: "Ordered",
					quantity: 1
				},
				{
					id: 1063,
					supply: 4892,
					status: "Ordered",
					quantity: 2
				},
				{
					id:1065,
					supply:5543,
					status: "Recieved",
					quantity: 7
				}
				
			]});
			
			//Simulate barcode scanning
			keypress(76, true);
			keypress(80);
			keypress(79);
			keypress(189);
			keypress(49);
			keypress(51);
			keypress(51);
			keypress(52);
			keypress(53);
			keypress(71, true);
			
			//Mock response
			$http.flush();
			
			$http.expectPUT('/api/v1/purchase-order/13345/', function (dataStr) {
				
				var data = JSON.parse(dataStr);
				
				for (var i = 0; i < data.items.length; i++) {
					if (data.items[i].status.toLowerCase() != "received") {
						return false;
					}
				}
				
				if (data.status.toLowerCase() != "received") {
					return false;
				}
				
				return true;
			}).respond({});
			
			scope.checkout();
			
			$http.flush();
			
			expect(scope.po).not.toBeDefined();
			expect(scope.equipmentList.length).toEqual(0);
			expect(scope.supplies.length).toEqual(0);
		});
	});
	
	describe('Testing making repeated deductions from the inventory', function () {
		
		it('should correctly deduct the quantity from the inventory and correctly display it', function () {
			
			var supply = {
				id: 187,
				quantity: 120, 
				description: 'Screw'
			},
			deduction = 1,
			oldQuantity = 0;
			
			for (var i = 0; i < 20; i++) {
				
				//Get initial supply
				expect(supply.quantity).toEqual(jasmine.any(Number));
				$http.expectGET('/api/v1/supply/187/?country=TH').respond(supply);
				
				//Simulate barcode scanning
				keypress(76, true);
				keypress(68);
				keypress(82);
				keypress(83);
				keypress(189);
				keypress(49);
				keypress(56);
				keypress(55);
				keypress(71, true);
				
				$http.flush();
				
				//Test the supply is correctly displayed
				if (i > 0) {
					expect(scope.supplies[0].quantity).toEqual(oldQuantity - deduction);
				}
				
				oldQuantity = supply.quantity;
				supply.quantity -= deduction;
				
				scope.supplies[0].$$action = 'subtract';
				scope.supplies[0].$$quantity = deduction;
				
				$http.expectPUT('/api/v1/supply/').respond([supply]);
				scope.checkout();
				
				$http.flush();
				expect(scope.supplies).toEqual([]);							
			}
		});
	});
});
   

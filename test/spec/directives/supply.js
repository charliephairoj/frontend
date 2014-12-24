'use strict';

xdescribe('Directive: supply', function () {

	// load the directive's module
	beforeEach(module('employeeApp'));
  	beforeEach(module('employeeApp.mocks'));
	beforeEach(module('directives'));

	var element,
		$http,
		$timeout,
		scope;

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
	
	beforeEach(inject(function ($rootScope, $injector) {
		scope = $rootScope.$new();
		$http = $injector.get('$httpBackend');
		$timeout = $injector.get('$timeout');
	}));

	describe('Initialization', function () {
		
	});
	
	describe('Post-Initialization:', function () {
		
		beforeEach(inject(function ($compile, $rootScope, Supply) {
			$http.whenGET('views/templates/supply-details.html').respond();
			element = angular.element('<div supply="testSupply"></div>');
			$rootScope.testSupply = new Supply({
				id:202,
				description: 'Zipper',
			});
			$compile(element)($rootScope);
			$rootScope.$digest();
			try {
				$timeout.flush();
			} catch (e) {
				
			}
		}));
		
		afterEach(function () {
			//$http.verifyNoOutstandingExpectation();
			//$http.verifyNoOutstandingRequest();
			$timeout.verifyNoPendingTasks();
		});
		
		describe('When first click', function () {
		
			beforeEach(function () {
				$http.whenGET('/api/v1/supply/202/').respond({id:202});
				$http.whenGET('/api/v1/log/?action=SUBTRACT&supply=202').respond([]);
			});
			
			afterEach(function () {
				try {
					$timeout.flush();
				} catch (e) {
					
				}
			});
			
			
			it('should add "active" to the class when activate() is called', function () {
				var scope = element.isolateScope();
				scope.activate();
				expect(element.hasClass('active')).toBeTruthy();
				
				//Flush supply
				$http.flush();
				
				//Flush Log
				//$http.flush()
				
			});
		
			it('should call "activate()" when the image container is clicked', function () {
				var scope = element.isolateScope();
				spyOn(scope, 'activate');
				element.find('.img-container').click();
				expect(scope.activate).toHaveBeenCalled();
				
				//Flush supply
				$http.flush();
				
				//Flush Log
				//$http.flush()
			});
		
			it('should call "activate()" when the details is clicked', function () {
				var scope = element.isolateScope();
				spyOn(scope, 'activate');
				element.find('div.details').click();
				expect(scope.activate).toHaveBeenCalled();
				
				$http.flush();
			});
		
			it('should expand the directive when clicked', function () {
				element.find('div.details').click();
				expect(element.hasClass('active')).toBeTruthy();
				$http.flush();
				
			});
		
			it('should request the supply details when click', function () {
				element.find('div.details').click();
				$http.flush();
				
			});
		
		});
		
		describe('Initial Requests:', function () {
				
			afterEach(function() {
				$timeout.flush();
			});
			
			it('should request the supply after the first click', function () {
				$http.whenGET('/api/v1/log/?action=SUBTRACT&supply=202').respond([]);
				$http.expectGET('/api/v1/supply/202/').respond({id:202});
				element.find('div.details').click();
				$http.flush();
			});
			
			it('should request the supply logs for usage after the first click', function () {
				$http.whenGET('/api/v1/supply/202/').respond({id:202});
				$http.expectGET('/api/v1/log/?action=SUBTRACT&supply=202').respond([]);
				element.find('div.details').click();
				$http.flush();
			});
			
			it('should request the supply cost change for a supplier after the first click', inject(function ($compile, $rootScope) {
				//Create a new directives for a supply with suppliers
				element = angular.element("<div supply='testSupply'></div>");
				$rootScope.testSupply = {id:204, suppliers: [{id:1}]};
				$compile(element)($rootScope);
				$rootScope.$digest();
				
				//$http expectations and whens
				$http.whenGET('/api/v1/supply/204/').respond({});
				$http.whenGET('/api/v1/log/?action=SUBTRACT&supply=204').respond([]);
				$http.expectGET('/api/v1/log/?action=PRICE+CHANGE&supplier=1&supply=204').respond([
					{
						id: 77,
						action: 'PRICE CHANGE'
					},
					{
						id:79,
						action:'PRICE CHANGE'
					}
					
				]);
				//Test click
				element.find('div.details').click();
				$http.flush();
				
				//Test Response
				scope = element.isolateScope();
				expect(scope.price_logs.length).toEqual(1);
				expect(scope.price_logs[0].length).toEqual(2);
			}));
			
		});
		
		describe('After Initial Requests are loaded', function () {
			
			beforeEach(inject(function ($compile, $rootScope, Supply) {
				
				element = angular.element('<div supply="testSupply1"></div>');
				$rootScope.testSupply1 = new Supply({
					id:202,
					description: 'test supply',
					units: 'm', 
					quantity: 10
				});
				$compile(element)($rootScope);
				$rootScope.$digest();
				
				//Flush notification $timeout
				$timeout.flush();
				
			}));
			
			iit('should display the details of the supply', function () {
				//Click and first requests
				
				$http.whenGET('/api/v1/log/?action=SUBTRACT&supply=202').respond([]);
				$http.whenGET('/api/v1/supply/202/').respond({
					id:202,
					description: 'test supply',
					units: 'm', 
					quantity: 10,
					notes: 'note goes here'
				});
				element.find('div.details').click();
				scope.$digest()
				$http.flush();
				
				$timeout.flush();
				dump(element);
				
				//Tests details before opening
				expect(element.find('span.description').text().trim()).toEqual('test supply');
				expect(element.find('span.quantity').text().trim()).toEqual('Qty: 10m');
			
				//Tests changeable details
				expect(element.find('input.description').val()).toEqual('test supply');
				expect(element.find('input.quantity').val()).toEqual('10');
				expect(element.find('textarea.notes').val()).toEqual('note goes here');
				
			});
			
			it('should display the details of the suppliers', function () {
				//Click and first requests
				$http.whenGET('/api/v1/log/?action=SUBTRACT&supply=202').respond([]);
				$http.whenGET('/api/v1/log/?action=PRICE+CHANGE&supplier=2&supply=202').respond([]);
				$http.whenGET('/api/v1/log/?action=PRICE+CHANGE&supplier=3&supply=202').respond([]);
				$http.whenGET('/api/v1/supply/202/').respond({
					id:202,
					description: 'test supply',
					units: 'm', 
					quantity: 10,
					notes: 'note goes here',
					suppliers: [{
						id:2,
						name:'zipper land',
						cost: 10.5
					},
					{
						id: 3,
						name: 'fiber world',
						cost: 8.4
					}]
				});
				element.find('div.details').click();
				$http.flush();
				$timeout.flush();
				
				var suppliers = element.find('.supplier');
				expect(suppliers.length).toEqual(2);
				expect($(suppliers[0]).find('input.cost').val()).toEqual('10.5');
				expect($(suppliers[1]).find('input.cost').val()).toEqual('8.4');
			});
		});
		
		describe('Changing the quantity', function () {
			
			beforeEach(function () {
				$http.whenGET('/api/v1/log/?action=SUBTRACT&supply=202').respond([]);
				$http.whenGET('/api/v1/supply/202/').respond({
					id:202,
					description: 'test supply',
					units: 'm', 
					quantity: 10,
					notes: 'note goes here'
				});
				element.find('div.details').click();
				$http.flush();
				
			});
			
			afterEach(function () {
				$timeout.verifyNoPendingTasks();
			});
			
			it('should send a PUT request to the server', inject(function ($rootScope) {
				$http.expectPUT('/api/v1/supply/202/?country=TH').respond({
					id:202,
					description: 'test supply',
					units: 'm', 
					quantity: 10,
					notes: 'note goes here'
				});
				var scope = element.isolateScope();
				scope.supply.quantity = 5;
				scope.$digest();
				$timeout.flush();
				$http.flush();
				$timeout.flush();
			}));
		});
		
		describe('updating the supply', function () {
			
			beforeEach(function () {
				$http.whenGET('/api/v1/log/?action=SUBTRACT&supply=202').respond([]);
				$http.whenGET('/api/v1/supply/202/').respond({
					id:202,
					description: 'Zipper',
					units: 'm', 
					quantity: 10,
					notes: 'note goes here'
				});
				element.find('div.details').click();
				$http.flush();
				$timeout.flush();
			});
			
			afterEach(function () {
				$http.verifyNoOutstandingRequest();
				$http.verifyNoOutstandingExpectation();
				$timeout.verifyNoPendingTasks();
			});
			
			it('should send a PUT request when name change', function () {
				//Set $http expectation
				$http.expectPUT('/api/v1/supply/202/?country=TH').respond({
					id: 202,
					description: 'Zipper #3'
				});
				scope = element.isolateScope();
				scope.supply.description = 'Zipper #3';
				scope.$digest();
				
				//Flush timeout to send request
				$timeout.flush();
				$http.flush();
				
				//Flush Notification
				$timeout.flush();
				expect(scope.supply.description = 'Zipper #3');
				
			});
			
			it('should send a PUT request when quantity change', function () {
				//Set $http expectation
				$http.expectPUT('/api/v1/supply/202/?country=TH').respond({
					id: 202,
					description: 'Zipper',
					units: 'cm'
				});
				scope = element.isolateScope();
				scope.supply.units = 'cm';
				scope.$digest();
				
				//Flush timeout to send request
				$timeout.flush();
				$http.flush();
				
				//Flush Notification
				$timeout.flush();
				expect(scope.supply.units = 'cm');
				
			});
		});
		
		xdescribe('Adding a upc to a supplier', function () {
				
			beforeEach(inject(function (scanner) {
				//Click and first requests
				$http.whenGET('/api/v1/log/?action=SUBTRACT&supply=202').respond([]);
				$http.whenGET('/api/v1/log/?action=PRICE+CHANGE&supplier=2&supply=202').respond([]);
				$http.whenGET('/api/v1/log/?action=PRICE+CHANGE&supplier=3&supply=202').respond([]);
				$http.whenGET('/api/v1/supply/202/?country=TH').respond({
					id:202,
					description: 'test supply',
					units: 'm', 
					quantity: 10,
					notes: 'note goes here',
					suppliers: [{
						id:2,
						name:'zipper land',
						cost: 10.5
					},
					{
						id: 3,
						name: 'fiber world',
						cost: 8.4
					}]
				});
				$http.whenGET('/api/v1/supply/202/').respond({
					id:202,
					description: 'test supply',
					units: 'm', 
					quantity: 10,
					notes: 'note goes here',
					suppliers: [{
						id:2,
						name:'zipper land',
						cost: 10.5
					},
					{
						id: 3,
						name: 'fiber world',
						cost: 8.4
					}]
				});
				element.find('div.details').click();
				$http.flush();
				$timeout.flush();
				
				var scope = element.isolateScope();
				expect(scope.scanner).toBeDefined();
			}));
			
			it('should assign the supplier target scan button is clicked', function () {
				var scope = element.isolateScope();
				$(element.find(".supplier button")[0]).click();
				expect(scope.upcTarget).toBeDefined();
				expect(scope.upcTarget.id).toEqual(2);
				expect(scope.upcTarget.name).toEqual('zipper land');
			});
			
			it('should activate the scanner when the scan button is clicked', function () {
				var scope = element.isolateScope();
				$(element.find('.supplier button')[0]).click();
				expect(scope.scanner.enabled).toBeTruthy();
			});
			
			it('should set the upc code for the supplier when scanned', function () {
				var scope = element.isolateScope();
				$(element.find('.supplier button')[0]).click();
				expect(scope.scanner._activeParse).toBeFalsy();
				keypress(76, true);
				expect(scope.scanner._activeParse).toBeTruthy();
				keypress(98);
				keypress(98);
				keypress(98);
				keypress(71, true);
				expect(scope.scanner._activeParse).toBeFalsy();	
				//Check the supplier in the supply object
				expect(scope.supply.suppliers[0].code).toBeDefined();
				expect(scope.supply.suppliers[0].code).toEqual('222');
				//Check that the switch is off
				expect(scope.scanner.enabled).toBeFalsy();
				
				$http.whenPUT('/api/v1/supply/202/?country=TH').respond({});
				scope.$digest();
				$timeout.flush();
				$http.flush();
				$timeout.flush();
			});
			
			it('should make a request to the server to update supply when scanned', function() {
				var scope = element.isolateScope();
				$(element.find('.supplier button')[0]).click();
				expect($(element.find('.supplier button')[0]).hasClass('active')).toBeTruthy();
				
				expect(scope.scanner._activeParse).toBeFalsy();
				keypress(76, true);
				expect(scope.scanner._activeParse).toBeTruthy();
				keypress(98);
				keypress(98);
				keypress(98);
				keypress(71, true);
				expect(scope.scanner._activeParse).toBeFalsy();	
				
				//Check the supplier in the supply object
				expect(scope.supply.suppliers[0].code).toBeDefined();
				expect(scope.supply.suppliers[0].code).toEqual('222');
				
				
				$http.expectPUT('/api/v1/supply/202/?country=TH').respond({
					id:202,
					description: 'test supply',
					units: 'm', 
					quantity: 10,
					notes: 'note goes here',
					suppliers: [{
						id:2,
						name:'zipper land',
						cost: 10.5,
						code: '222'
					}, 
					{
						id: 3,
						name: 'fiber world',
						cost: 8.4
					}]
				});
				scope.$digest();
				$timeout.flush();
				$http.flush();
				$timeout.flush();
				
				expect(scope.supply.suppliers[0].code).toBeDefined();
				expect(scope.supply.suppliers[0].code).toEqual('222');
				expect(scope.upcTarget).not.toBeDefined();
				expect($(element.find('.supplier button')[0]).hasClass('active')).toBeFalsy();
			});
		});
	});
});

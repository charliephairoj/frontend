'use strict';

xdescribe('Directive: supplyScannerModal', function () {
	beforeEach(module('employeeApp'));
	beforeEach(module('directives'));
  	beforeEach(module('employeeApp.mocks'));

	var element,
		scope,
		$http,
		notification,
		scanner,
		compile,
		rScope;
		
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
	
	beforeEach(inject(function ($injector, $rootScope, $compile) {
		$http = $injector.get('$httpBackend');
		notification = $injector.get('Notification');
		rScope = $rootScope;
		compile = $compile;
	}));
	
	describe('Phase: Initialization', function () {
		
		it('should disable the standard codes to scan', function () {
			element = angular.element('<div supply-scanner-modal="test"></div>');
			element = compile(element)(rScope);
			rScope.$digest();
			scope = element.isolateScope();
			//Reveal themodal
			rScope.test = true;
			rScope.$digest();
			expect(scope.scanner.enabled).toBeTruthy();
			expect(scope.scanner.standardEnabled).toBeFalsy();
		});
	});
	
	describe('Phase: Post-Initialization', function () {
		
		beforeEach(inject(function ($compile, $rootScope) {
			element = angular.element('<div supply-scanner-modal="test"></div>');
			element = $compile(element)($rootScope);
			$rootScope.$digest();
			scope = element.isolateScope();
			$rootScope.test = true;
			$rootScope.$digest();
		}));
		
		afterEach(function () {
			$http.verifyNoOutstandingExpectation();
			$http.verifyNoOutstandingRequest();
			scope.scanner.disable();
			
		});
		
		xdescribe('fetching the purchase order by id', function () {
			it('should fetch the purchase order if the id matches', function () {
				expect(scope.disabled).toBeTruthy();
				$http.expectGET('/api/v1/purchase-order/7').respond({
					id:7
				});
				scope.scanner._dispatch('PO-7');

			});
		});
		
		describe('Fetching the supply by id', function () {
			it('should fetch the supply if the id matches the regex', function () {
				expect(scope.disabled).toBeTruthy();
				$http.expectGET('/api/v1/supply/5?country=TH').respond({id:5});
				scope.scanner._dispatch('DRS-5');
				$http.flush();
				expect(scope.disabled).toBeFalsy();
				expect(angular.equals({id:5}, scope.supply));
				expect(element.find('input.quantity').val()).toEqual('');
			});
			
			it('should fetch the supply if the UPC matches the regex', function () {
				$http.expectGET('/api/v1/supply?country=TH&upc=123-456-7890').respond({id:8});
				scope.scanner._dispatch('123-456-7890');
				$http.flush();
				expect(angular.equals({id:8}, scope.supply));
				
				
				
			});
			
			it('should fetch the supply if regex matches', function () {
				//Tests using live keypress
				
				$http.expectGET('/api/v1/supply?country=TH&upc=222').respond({id:4});
				expect(scope.scanner.enabled).toBeTruthy();
				expect(scope.scanner._activeParse).toBeFalsy();
				keypress(76, true);
				expect(scope.scanner._activeParse).toBeTruthy();
				keypress(98);
				keypress(98);
				keypress(98);
				keypress(71, true);
				expect(scope.scanner._activeParse).toBeFalsy();
				$http.flush();
				expect(angular.equals(scope.supply, {id:4}));
				
				
			});
			
		});
		
		describe('displaying the supply', function () {
			it('should display the properties of the properties', function () {
				scope.supply = {
					description: 'test',
					width: 150,
					depth: 300,
					height: 450,
					quantity: 100
				};
				scope.$digest();
				expect(angular.element(element.find('.description')[0]).find('td')[1].innerHTML).toEqual('test');
				expect(Number(angular.element(element.find('tr.width')[0]).find('td')[1].innerHTML)).toEqual(150);
				expect(Number(angular.element(element.find('tr.depth')[0]).find('td')[1].innerHTML)).toEqual(300);
				expect(Number(angular.element(element.find('tr.height')[0]).find('td')[1].innerHTML)).toEqual(450);
				expect(Number(element.find('td.quantity')[1].innerHTML)).toEqual(100);
				expect(angular.element(element.find('td.quantity')[0]).hasClass('ok')).toBeTruthy();
				expect(angular.element(element.find('td.quantity')[0]).hasClass('warning')).toBeFalsy();
			});
		});
		
		describe('changing the quantity', function () {
			xit('should change the action when the keyboard is navigated', function () {
				var btn = element.find('button.add');
				var btn2 = element.find('button.subtract');
				scope.visible = true;
				scope.$digest();
				keypress(37);
				expect(scope.action).toEqual('add');
				expect(btn.hasClass('active')).toBeTruthy();
				expect(btn2.hasClass('active')).toBeFalsy();
				
				keypress(39);
				expect(scope.action).toEqual('subtract');
				expect(btn.hasClass('active')).toBeFalsy();
				expect(btn2.hasClass('active')).toBeTruthy(); 
			});
			
			it('should display a message when the quantity is changed', inject(function ($injector) {
				var Supply = $injector.get('Supply');
				var btn = element.find('button.add');
				var input = element.find('input.quantity');
				scope.quantity = 1;
				scope.supply = new Supply({id: 4, description: 'test', quantity:4});
				scope.visible = true;
				expect(scope.disabled).toBeTruthy();
				scope.disabled = false;
				scope.$digest();
				
				$http.expectPOST('/api/v1/supply/4/add?country=TH&quantity=1').respond({id:4, description: 'test', quantity:5});
				
				btn.click();
				scope.$digest();
				$http.flush();
				expect(notification.message).toEqual('Quantity of test changed to 5');
			}));
		});
	});
});

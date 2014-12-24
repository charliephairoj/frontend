'use strict';

xdescribe('Directive: employee', function () {

	// load the directive's module
	beforeEach(module('employeeApp'));
  	beforeEach(module('employeeApp.mocks'));
	beforeEach(module('directives'));

	var element,
		$http,
		$timeout,
		scope;

	beforeEach(inject(function($injector) {
		$http = $injector.get('$httpBackend');
		$timeout = $injector.get('$timeout');
	}));
	
	describe('Initializing', function () {
		
		beforeEach(inject(function ($compile, $rootScope, Employee) {
			element = angular.element('<div employee="testEmployee"></div>');
			$rootScope.testEmployee = new Employee({id:202, name: 'John'});
			$compile(element)($rootScope);
			$rootScope.$digest();
			
		}));
		
		it('should be able to access the assigned "employee"', function () {
			var scope = element.isolateScope();
			expect(scope.employee).toBeDefined();
			expect(scope.employee.id).toBeDefined();
			expect(scope.employee.id).toEqual(202);
			expect(scope.employee.name).toBeDefined();
			expect(scope.employee.name).toEqual('John');
		});
		
		it('should not be visible', function () {
			expect(element.hasClass('active')).toBeFalsy();
		});
		
	});
	
	describe('After Initialization' , function () {
		
		beforeEach(inject(function ($compile, $rootScope, Employee) {
			element = angular.element('<div employee="testEmployee"></div>');
			$rootScope.testEmployee = new Employee({id:202, name: 'John'});
			$compile(element)($rootScope);
			$rootScope.$digest();
			
		}));
		
		describe('When first click', function () {

			beforeEach(function () {
				$http.whenGET('/api/v1/attendance?employee__id=202').respond([]);
			});
			
			it('should add "active" to the class when activate() is called', function () {
				var scope = element.isolateScope();
				scope.activate();
				expect(element.hasClass('active')).toBeTruthy();				
			});
		
			it('should call "activate()" when the image container is clicked', function () {
				var scope = element.isolateScope();
				spyOn(scope, 'activate');
				element.find('.img-container').click();
				expect(scope.activate).toHaveBeenCalled();
			});
		
			it('should call "activate()" when the details is clicked', function () {
				var scope = element.isolateScope();
				spyOn(scope, 'activate');
				element.find('div.details').click();
				expect(scope.activate).toHaveBeenCalled();
			});
		
			it('should expand the directive when clicked', function () {
				element.find('div.details').click();
				expect(element.hasClass('active')).toBeTruthy();				
			});
		
			
		
		});
		
		xdescribe('Initial Request', function () {
				
			afterEach(function () {
				$http.verifyNoOutstandingExpectation();
				$http.verifyNoOutstandingRequest();
			});
			
			it('should request the attendance records from the server on activate', function () {
				$http.expectGET('/api/v1/attendance?employee=202').respond({id:5});
				element.isolateScope().activate();
				$http.flush();
			});
		});
		
		xdescribe('Changing the name', function () {
			
			beforeEach(function () {
				$http.whenGET('/api/v1/attendance?employee=202').respond([]);
				element.isolateScope().activate();
				$http.flush();
			});
			
			afterEach(function () {
				$http.verifyNoOutstandingExpectation();
				$http.verifyNoOutstandingRequest();
				$timeout.verifyNoPendingTasks();
			});
			
			it('should send a PUT request to the server', inject(function ($rootScope) {
				expect(element.hasClass('active')).toBeTruthy();
				$http.expectPUT('/api/v1/employee/202').respond({
					id:202,
					
				});
				var scope = element.isolateScope();
				scope.employee.name = 'Charlie';
				scope.$digest();
				
				//Flush 5 second delay before saving
				$timeout.flush();
				$http.flush();
				
				//Flushes notification timeout
				$timeout.flush();
				
				expect(scope.employee.name).toEqual('Charlie');
			}));
		});
	});
});

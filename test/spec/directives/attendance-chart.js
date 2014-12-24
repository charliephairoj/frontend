'use strict';




describe('Directive: attendanceChart', function () {

	// load the directive's module
	beforeEach(module('employeeApp'));
  	beforeEach(module('employeeApp.mocks'));
	beforeEach(module('directives'));

	var element,
		$http,
		$timeout,
		$scope,
		scope;
		
		

	beforeEach(inject(function($injector) {
		$http = $injector.get('$httpBackend');
		$timeout = $injector.get('$timeout');
	}));
	
	describe('Detecting change in data', function () {
		
		beforeEach(inject(function ($rootScope, $compile) {
			element = angular.element('<div attendance-chart data="attendances"></div>');
			$scope = $rootScope.$new(); 
			$compile(element)($scope);
			$rootScope.$digest();
		}));
		
		xit('should detect when the "data" bound attr changes and properly link', function () {
			scope = element.isolateScope();
			expect(scope.data).not.toBeDefined();
			
			$scope.attendances = [{id:2}]
			$scope.$digest();
			
			expect(scope.data).toBeDefined();
			expect(scope.data).toEqual(jasmine.any(Array));
			expect(scope.data.length).toEqual(1);
		});
	});
	
	describe('Selecting attendances', function () {
		
		beforeEach(inject(function ($rootScope, $compile) {
			element = angular.element('<div attendance-chart data="attendances"></div>');
			$scope = $rootScope.$new(); 
			$compile(element)($scope);
			$rootScope.$digest();
		}));
		
		it('should call the attached function when selecting attendances', inject(function ($rootScope, $compile) {
			element = angular.element('<div attendance-chart data="attendances" on-select="test($attendances)"></div>');
			$scope = $rootScope.$new();
			$scope.test = function (data) {
				expect(data).toEqual(jasmine.any(Array));
				expect(data.length).toEqual(1);
				expect(data[0]).toEqual(jasmine.any(Object));
				expect(data[0].hasOwnProperty('id')).toBeTruthy();
				expect(data[0].id).toEqual(1);
			}
			$compile(element)($scope);
			$rootScope.$digest();
			
			scope = element.isolateScope();
			scope.onSelect({$attendances: [{id:1}]});
		}));
	});
});

'use strict';

describe('Directive: supplies', function () {

  	// load the directive's module
  	beforeEach(module('employeeApp.directives'));
	beforeEach(module('employeeApp.mocks'));
	beforeEach(module('directives'));

  	var element,
		$http, 
    	scope;

  	beforeEach(inject(function ($rootScope, $injector) {
    	scope = $rootScope.$new();
		$http = $injector.get('$httpBackend');
  	}));

	describe('Phase: Initialization', function () {
	  	it('should request types of supplies', inject(function ($compile) {
			$http.expectGET('/api/v1/supply/type/').respond([null, 'screw', 'nail', 'lumber']);
			$http.whenGET('/api/v1/supply/?limit=20').respond([]);
			
	    	element = angular.element('<div supplies></div>');
	    	element = $compile(element)(scope);
			$http.flush();
			scope.$digest();
			
			//Flush type request
			expect(element.isolateScope().types.length).toEqual(3);
	  	}));
		
		it('should request a list of supplies', inject(function ($compile) {
			$http.whenGET('/api/v1/supply/type/').respond([]);
			$http.expectGET('/api/v1/supply/?limit=20').respond([{id:2}, {id:5}])
			
	    	element = angular.element('<div supplies></div>');
	    	element = $compile(element)(scope);
			$http.flush();
			scope.$digest();
			
			//Flush type request
			expect(element.isolateScope().supplies.length).toEqual(2);
		}));
	});
  	
});

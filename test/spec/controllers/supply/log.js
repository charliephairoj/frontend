'use strict';

describe('Controller: SupplyLogCtrl', function () {

 	 // load the controller's module
  	beforeEach(module('employeeApp'));

  	var SupplyLogCtrl,
		$http,
    	scope;

  	  // Initialize the controller and a mock scope
  	beforeEach(inject(function ($controller, $rootScope, $injector) {
    	scope = $rootScope.$new();
		$http = $injector.get('$httpBackend');
    	SupplyLogCtrl = $controller('SupplyLogCtrl', {
      	  $scope: scope
    	});
  	}));

	afterEach(function () {
		$http.verifyNoOutstandingExpectation();
		$http.verifyNoOutstandingRequest(); 
	});
	
  	it('should make a request for logs', function () {
    	$http.expectGET('/api/v1/log/').respond([{id:1, message:'ok'}]);
		$http.flush();
		expect(scope.logs).toEqual(jasmine.any(Array));
  	});
});

'use strict';

xdescribe('Controller: SupplyBuyingGuideCtrl', function () {

    // load the controller's module
    beforeEach(module('employeeApp'));

    var SupplyBuyingGuideCtrl,
		$http,
		$Ctrl,
    	scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, $injector) {
    	scope = $rootScope.$new();
		$http = $injector.get('$httpBackend');
		$Ctrl = $controller;
    }));

	describe('Page Initialization', function () {
			
		beforeEach(function () {
			
		});
		
		afterEach(function () {
			$http.verifyNoOutstandingExpectation();
			$http.verifyNoOutstandingRequest();
		});
		
		it('should request supplies from the server', function () {
			scope.d = new Date();
			var expected_url = '/api/v1/supply?log__action=SUBTRACT&log__timestamp__gte=' + scope.d.toISOString()
			dump(expected_url);
			$http.expectGET(expected_url).respond([{id:5}]);
	    	SupplyBuyingGuideCtrl = $Ctrl('SupplyBuyingGuideCtrl', {
	      		$scope: scope
	    	});
			
			$http.flush();
		});
	});
    
});

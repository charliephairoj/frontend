'use strict';

xdescribe('Directive: productSelector', function () {
    beforeEach(module('employeeApp'));

    var element,
    	$http;
    
    beforeEach(inject(function($injector) {
    	$http = $injector.get('$httpBackend');
    	
    }));
    
	describe('Phase: Initialize', function() {
		
		afterEach(function() {
			$http.verifyNoOutstandingRequest();
			$http.verifyNoOutstandingExpectation();
		});
	    it('should make hidden element visible', inject(function ($rootScope, $compile) {
	    	$http.expectGET('views/templates/product-selector.html').respond("<div></div>");
	    	$http.expectGET('/api/v1/fabric').respond();
	    	
	        element = angular.element('<div product-selector></div>');
	        element = $compile(element)($rootScope);
	        $http.flush();

	    }));
    });
});

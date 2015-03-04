'use strict';

describe('Controller: OrderEstimateViewCtrl', function () {

  	// load the controller's module
  	beforeEach(module('employeeApp'));

  	var OrderEstimateCtrl,
    	scope;

  	// Initialize the controller and a mock scope
  	beforeEach(inject(function ($controller, $rootScope) {
    	scope = $rootScope.$new();
    	OrderEstimateCtrl = $controller('OrderEstimateViewCtrl', {
      	  $scope: scope
    	});
  	}));

  	
});

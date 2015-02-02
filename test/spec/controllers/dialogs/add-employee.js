'use strict';

describe('Controller: DialogsAddEmployeeCtrl', function () {

  	// load the controller's module
  	beforeEach(module('employeeApp'));

  	var DialogsAddEmployeeCtrl,
    	scope;

  	// Initialize the controller and a mock scope
  	beforeEach(inject(function ($controller, $rootScope) {
    
		scope = $rootScope.$new();
    	DialogsAddEmployeeCtrl = $controller('DialogsAddEmployeeCtrl', {
    		$scope: scope
    	});
  	}));

  	
});

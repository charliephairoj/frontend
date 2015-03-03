'use strict';

describe('Directive: fileDrop', function () {

  	// load the directive's module
  	beforeEach(module('employeeApp'));

  	var element,
    	scope;

  	beforeEach(inject(function ($rootScope) {
    	scope = $rootScope.$new();
  	}));

  	xit('call the attached function', inject(function ($compile) {
		scope.test = function () {
			
		};
		
    	element = angular.element('<file-drop="test()"></file-drop>');
    	element = $compile(element)(scope);
		
		element.isolateScope().onDrop();
		
		expect(scope.test).toHaveBeenCalled();
  	}));
});

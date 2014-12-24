'use strict';

describe('Directive: imageUploader', function () {

  	// load the directive's module
  	beforeEach(module('employeeApp'));
	beforeEach(module('directives'));
	
  	var element,
    	scope,
    	compile,
  		$http;

  	beforeEach(inject(function ($rootScope, $compile, $injector) {
    	scope = $rootScope;
    	compile = $compile;
    	$http = $injector.get('$httpBackend');
  	}));
  	
  	describe('uploading a file', function () {
  		
  		afterEach(function () {
  			$http.verifyNoOutstandingExpectation();
  			$http.verifyNoOutstandingRequest();
  		});
  		
  		it('should call the onupload function after the upload is done', function() {
  			$http.expectPOST('upload/images').respond({id:4, url:'http://test.com'});
  			element = angular.element('<div image-uploader on-upload="test($image)"></div>');
	  		element = compile(element)(scope);
	  		scope.$digest();
	  		var callback = jasmine.createSpy('callback');
	  		var spy = jasmine.createSpy('spy');
	  		var spy2 = jasmine.createSpy('spy2');
	  		
	  		scope.test = function ($image){
	  			expect($image.hasOwnProperty('id')).toBeTruthy();
	  			expect($image.hasOwnProperty('url')).toBeTruthy();
	  			expect($image.id).toEqual(4);
	  			expect($image.url).toEqual('http://test.com');
	  			callback('succeed');
	  		};

	  		element.isolateScope().upload(new Image(), spy);
	  		$http.flush();
	  		expect(spy).toHaveBeenCalled();
	  		expect(callback).toHaveBeenCalledWith('succeed');
  		});
  		
  	});


  	
});

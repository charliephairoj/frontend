'use strict';

describe('Service: fileUploader', function () {

    // load the service's module
    beforeEach(module('employeeApp'));

    // instantiate service
    var fileUploader,
    	$http; 
      
	beforeEach(inject(function(_FileUploader_, $injector) {
        fileUploader = _FileUploader_;
        $http = $injector.get('$httpBackend');
    }));
	
    describe('Uploading a file', function () {
    	
    	afterEach(function () {
    		$http.verifyNoOutstandingExpectation();
    		$http.verifyNoOutstandingRequest();	
    	});
    	
    	it('should post to the server', function () {
    		$http.expectPOST('test').respond({});
    		var promise = fileUploader.upload(new Image(), "test");
    		var calledFn = jasmine.createSpy('fnToCall');
    		var uncalledFn = jasmine.createSpy('fnNotToCall');
    		promise.then(function () {
    			calledFn('called');
    		}, function () {
    			uncalledFn();
    		});
    		
    		$http.flush();
    		expect(calledFn).toHaveBeenCalledWith('called');
    		expect(uncalledFn).not.toHaveBeenCalled();
    		
    	});
    		
    });

});

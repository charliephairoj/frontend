'use strict';

describe('Service: CameraService', function () {
	beforeEach(module('employeeApp'));
	
	var service;
	beforeEach(inject(function (_CameraService_) {
		service = _CameraService_;
	}));
	
	/*
	 * Describes the has user media method
	 */
	describe('Tests if browser has "UserMedia"', function () {
		it('should determine if the browser has UserMedia', function () {
			expect(service.hasUserMedia).toBeTruthy();
		});
	});
	
	/*
	 * Tests getting the UserMedia
	 */
	describe('Tests getting the UserMedia', function () {
		it('it should get the user media', function () {
			var getUserMedia = service.getUserMedia();
			
			//Tests
			expect(getUserMedia).toBeDefined();
			expect(typeof(getUserMedia)).toEqual('function');
		});
	});
});

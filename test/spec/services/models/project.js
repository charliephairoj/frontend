'use strict';

xdescribe('Service: models/project', function () {

  	// load the service's module
  	beforeEach(module('employeeApp'));

  	// instantiate service
  	var Project,
		$http;
  	
	beforeEach(inject(function(_Project_, $injector) {
   		Project = _Project_;
		$http = $injector.get('$httpBackend');
		
  	}));
	
	describe('Class methods', function () {
		
		afterEach(function () {
			$http.verifyNoOutstandingExpectation();
			$http.verifyNoOutstandingRequest();
		});
		
		it('should send a GET request to the server for multiple projects', function () {
			$http.expectGET('/api/v1/project').respond([{id:4}]);
			var projects = Project.query();
			
			$http.flush();
			
			expect(projects).toEqual(jasmine.any(Array));
			expect(projects.length).toEqual(1);
		});
		
		it('should send a GET request for an individual project', function () {
			$http.expectGET('/api/v1/project/75').respond({id:75});
			var project = Project.get({id:75});
			
			$http.flush();
			
			expect(project).toBeDefined();
			expect(project.hasOwnProperty('id')).toBeTruthy();
			expect(project.id).toEqual(75);
		});
	});

 

});

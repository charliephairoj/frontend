'use strict';

xdescribe('Controller: ProjectDetailsCtrl', function () {

    // load the controller's module
    beforeEach(module('employeeApp'));

    var ProjectDetailsCtrl,
        Ctrl,
        ctrl,
        $http,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $injector) {
        Ctrl = $controller;
        $http = $injector.get('$httpBackend');
        scope = {$on: angular.noop,
                 cropper: {reset: angular.noop}};
      
    }));
    
    describe('Phase: Initialization', function(){
        
        beforeEach(function(){
            $http.whenGET('/api/v1/project/5').respond({id:5});
            ctrl = Ctrl('ProjectDetailsCtrl', {$scope: scope,
                                               $routeParams: {id:5}});
			$http.flush();
        });
		
		afterEach(function () {
			$http.verifyNoOutstandingExpectation();
			$http.verifyNoOutstandingRequest();
		});
        
        it('should set up the UI vars', function(){
            expect(scope.showAddRoom).toBeFalsy();
        });
        
        it('should set up the controller functions', function(){
            expect(typeof(scope.addRoom)).toEqual('function');
            expect(typeof(scope.addImage)).toEqual('function');
            expect(typeof(scope.addSchematic)).toEqual('function');
        }); 
        
        xit('make an http call', function(){
            $http.expectGET('/api/v1/project/5').respond({id:5, rooms:[{id:88, description:'Kitchen'}]});
            ctrl = Ctrl('ProjectDetailsCtrl', {$scope: scope,
                                               $routeParams: {id:5}});    
            $http.flush();    
            expect(scope.project).toBeDefined();
            expect(scope.project.id).toBe(5);
            expect(scope.project.rooms).toEqual(jasmine.any(Array));
            expect(scope.project.rooms[0]).toBeDefined();
            expect(scope.project.rooms[0].id).toBe(88);
            expect(scope.project.rooms[0].description).toEqual('Kitchen');
        });
    });
    beforeEach(function(){
        $http.whenGET('/api/v1/project/5').respond({id:5, rooms:[]});
        ctrl = Ctrl('ProjectDetailsCtrl', {$scope: scope,
                                           $routeParams: {id:5}});
								
		$http.flush();
    });
	
	afterEach(function () {
		$http.verifyNoOutstandingExpectation();
		$http.verifyNoOutstandingRequest();
	});
    
    describe('Phase: Adding a Room', function(){
        
        xit('should add an image to the room', function(){
            var image = new Image();
            expect(scope.room.image).not.toBeDefined();
            scope.addImage({id:42, url:'http://www.yahoo.com'});
            //expect(scope.room.image).toBeDefined();
            //expect(scope.room.image.id).toBe(42);
            //expect(scope.room.image.url).toEqual('http://www.yahoo.com');
        });
        
        xit('should add a file to the room', function(){
            var file = new Blob();
            expect(scope.room.schematic).not.toBeDefined();
            scope.addSchematic(file);
            expect(scope.room.schematic).toBeDefined();
            expect(scope.room.schematic).toEqual(jasmine.any(Blob)); 
        });
        
        xit('should validate the model', function(){
            console.log(scope);
        });
        
        it('shoud send an http call', function(){
            $http.expectPOST('/api/v1/room').respond({});
            scope.addRoom();
            $http.flush(); 
        });
        
        it('should return an call the error', function(){
            $http.expectPOST('/api/v1/room').respond(401, '234213');
            scope.addRoom()
            $http.flush();
            expect(scope.flag).toBeTruthy();
        });
    });
	
	describe('Add a new supply to the project', function () {
		
		it('should send a post with the supply data', function () {
			$http.expectPOST('/api/v1/project/5/supply', {id:6, description:'nail'}).respond();
			scope.addSupply({
				id: 6, 
				description: 'nail'
			});
			$http.flush();
			
			expect(scope.project.supplies).toBeDefined();
			expect(scope.project.supplies.indexOfById({id:6})).toBeGreaterThan(-1);
		});
	});
    
});








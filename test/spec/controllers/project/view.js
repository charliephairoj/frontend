'use strict';

xdescribe('Controller: ProjectViewCtrl', function () {

    // load the controller's module
    beforeEach(module('employeeApp'));

    var ProjectViewCtrl,
        scope,
        Ctrl,
        ctrl,
        $http;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($injector, $controller, Project) {
        scope = {$on:angular.noop};
        Ctrl = $controller;
        $http = $injector.get('$httpBackend');
    }));

    describe("Initialization Phase", function(){
        
        it('should set the UI controlling vars', function(){
            $http.expectGET('project').respond([]);
            $http.expectGET('customer').respond([]);
            expect(scope.showAddProject).not.toBeDefined();
            ctrl = Ctrl('ProjectViewCtrl', {$scope: scope}); 
            expect(scope.showAddProject).toBeFalsy();

            $http.flush();
        });
        
        it('should make an Http', function(){
            $http.expectGET('project').respond([]);
            $http.expectGET('customer').respond([]);
            ctrl = Ctrl('ProjectViewCtrl', {$scope: scope}); 

            $http.flush();
        });
    });
    
    describe("Creating new project Phase", function(){
        
        beforeEach(function(){
            $http.whenGET('customer').respond([])
            $http.whenGET('project').respond([]);
            ctrl = Ctrl('ProjectViewCtrl', {$scope:scope});
            $http.flush();
            scope.showAddProject = true;
        }); 
        
        describe('New project validation', function(){
            
        });
        
        
        it('should make a POST request', function(){
            $http.expectPOST('project').respond({id:2});
            scope.create();
            $http.flush();
            expect(scope.showAddProject).toBeFalsy();
            expect(scope.projectList.length).toBe(1);
            expect(angular.equals(scope.projectList[0], {id:2})).toBeTruthy();
        });
    });
});

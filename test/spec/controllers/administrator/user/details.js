'use strict';

describe('Controller: AdministratorUserDetailsCtrl', function () {

    // load the controller's module
    beforeEach(module('employeeApp'));

    var AdministratorUserDetailsCtrl,
        ctrl,
        Ctrl,
        $http,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $injector) {
        $http = $injector.get('$httpBackend');
        scope = {$on:function(){}};
        Ctrl = $controller;
    }));

    describe('Phase: Initializing', function(){
      
        it('should make two GET requests', function(){
            $http.expectGET('/api/v1/group/?limit=0').respond([{id:3}, {id:5}, {id:2}]);
            $http.expectGET('/api/v1/user/7/').respond({id:7, groups:[{id:3}]});
            ctrl = Ctrl('AdministratorUserDetailsCtrl', {
                $scope: scope,
                $routeParams:{id:7}
            });
            $http.flush();
            expect(scope.groupList[0].hasOwnProperty('$checked')).toBeTruthy();
            expect(scope.groupList[0].$checked).toBeTruthy();
            expect(scope.groupList[1].hasOwnProperty('$checked')).toBeFalsy();
            expect(scope.groupList[2].hasOwnProperty('$checked')).toBeFalsy();
        });
    });
  
    describe('Phase: Post Initialization', function(){
      
        beforeEach(function(){
            window.localStorage.clear();
            $http.whenGET('/api/v1/group/?limit=0').respond([{id:3}, {id:4}, {id:5}, {id:6}]);
            $http.whenGET('/api/v1/user/7/').respond({id:7, groups:[{id:4}]});
            ctrl = Ctrl('AdministratorUserDetailsCtrl', {
                $scope: scope,
                $routeParams:{id:7}
            });
            $http.flush();
            expect(scope.groupList[1].hasOwnProperty('$checked')).toBeTruthy();
            expect(scope.groupList[1].$checked).toBeTruthy();
          
        });
      
        describe("Updating the user's groups", function(){
            it('should add a group to the user', function(){
                $http.expectPUT('/api/v1/user/7/').respond({id:7, groups:[{id:4}, {id:3}]});
                expect(scope.user.groups.length).toBe(1);
                
                scope.groupList[0].$checked = true;
                scope.updateGroup(scope.groupList[0]);
                
                expect(scope.user.groups.length).toBe(2);
                expect(scope.user.groups).toEqual(jasmine.any(Array));
                
                $http.flush();
                expect(scope.user.groups.length).toBe(2);
                 
            });
            
            it('should remove a group from the user', function(){
                $http.expectPUT('/api/v1/user/7/').respond({id:7, groups:[]});
                expect(scope.user.groups.length).toBe(1);
                
                scope.groupList[1].$checked = false;
                scope.updateGroup(scope.groupList[1]);
                
                expect(scope.user.groups.length).toBe(0);
                expect(scope.user.groups).toEqual(jasmine.any(Array));
                
                $http.flush();
                expect(scope.user.groups.length).toBe(0);
            });
        });
    });
});

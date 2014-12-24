'use strict';

describe('Controller: AdministratorGroupDetailsCtrl', function () {

    // load the controller's module
    beforeEach(module('employeeApp'));

    var AdministratorGroupDetailsCtrl,
        Ctrl,
        ctrl,
        $http,
        fn, 
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $injector) {
        Ctrl = $controller;
        $http = $injector.get('$httpBackend');
        scope = {$on: function(attr, Fn){fn=Fn},
                 $routeParams:{id:10}};
       
    }));
    
    describe('Phase: Initialization', function(){
        it('should make http calls', function(){
            $http.expectGET('/api/v1/permission/?limit=0').respond([{id:10}, {id:8}, {id:13}, {id:14}]);
            $http.expectGET('/api/v1/group/10/').respond({name:'test', permissions:[{id:14}]});
            ctrl = Ctrl('AdministratorGroupDetailsCtrl', {$scope: scope,
                                                         $routeParams:{id:10}});
                                                         
            $http.flush();
            expect(scope.group).toBeDefined();
            expect(scope.group.permissions).toBeDefined();
            expect(scope.group.permissions).toEqual(jasmine.any(Array));
            expect(scope.group.permissions.length).toBe(1);
            expect(scope.permissionList).toBeDefined();
            expect(scope.permissionList).toEqual(jasmine.any(Array));
            expect(scope.permissionList.length).toBe(4);
            expect(scope.permissionList[3].$checked).toBeTruthy();
            
        });
    });
    
    describe('Phase: Post Initialization', function(){
        beforeEach(function(){
            $http.whenGET('/api/v1/permission/?limit=0').respond([{id:10}, {id:8}, {id:13}, {id:14}]);
            $http.whenGET('/api/v1/group/10/').respond({id:10, name:'test', permissions:[{id:14}]});
            ctrl = Ctrl('AdministratorGroupDetailsCtrl', {$scope: scope, $routeParams:{id:10}}); 
            $http.flush();
        });
        
        describe('Updating the permission', function(){
            it('should add a permission to the group permissions', function(){
                $http.expectPUT('/api/v1/group/10/').respond({id:10, permissions:[{id:14}, {id:13}]});
                var perm = scope.permissionList[2];
                perm.$checked = true;
                scope.updatePermission(perm);
                
                expect(scope.group.permissions.length).toBe(2);
                expect(scope.group.permissions[1].id).toBe(13);
                expect(scope.group.permissions[1].$checked).toBeTruthy(); 
            });
            
            it('should remove a permission from the group permissions', function(){
                $http.expectPUT('/api/v1/group/10/').respond({id:10, permissions:[{id:14}, {id:13}]});
                var perm = scope.permissionList[3];
                perm.$checked = false;
                scope.updatePermission(perm);
                
                expect(scope.group.permissions.length).toBe(0);
            });
        });
        
        describe('deleting the group', function(){
            it('should send a delete http call', function(){
                $http.expectDELETE('/api/v1/group/10/').respond(200);
                scope.remove();
                 
            });
        });
    }); 

  
});

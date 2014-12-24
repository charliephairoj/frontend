'use strict';

xdescribe('Controller: ProjectRoomDetailsCtrl', function () {

    // load the controller's module
    beforeEach(module('employeeApp'));

    var ProjectRoomDetailsCtrl,
        Ctrl,
        ctrl,
        $http,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $injector) {
        scope = {$on: angular.noop};
        $http = $injector.get('$httpBackend');
        Ctrl = $controller;
       
    }));

    describe('Phase: Initialization', function(){
        it('should request the room', function(){
            ctrl = Ctrl('ProjectRoomDetailsCtrl', {
                $scope: scope,
                $routeParams: {id: 11}
            }) 
        });
    });
});

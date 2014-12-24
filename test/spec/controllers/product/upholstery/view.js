'use strict';

xdescribe('Controller: ProductUpholsteryViewCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeApp'));

  var ProductUpholsteryViewCtrl,
      ctrl,
      Ctrl,
      $http,
      $timeout,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $injector) {
      window.localStorage.clear();
      $http = $injector.get('$httpBackend');
      $timeout = $injector.get('$timeout');
      Ctrl = $controller;
      scope = {$on:function(){
          
      }};
  }));
  
  describe('Phase: Initialize', function(){
      
      it('should perform polling GET requests and initialize the resources', function(){
          $http.expectGET('upholstery').respond([{id:4}, {id:5}]);
          ctrl = Ctrl('ProductUpholsteryViewCtrl', {
              $scope: scope
          });
          expect(angular.isArray(scope.upholList)).toBeTruthy();
          expect(scope.upholList.length).toEqual(0);
          $http.flush();
          expect(angular.isArray(scope.upholList)).toBeTruthy();
          expect(scope.upholList.length).toEqual(2);
          expect(angular.equals(scope.upholList[0], {id:4})).toBeTruthy();
          expect(angular.equals(scope.upholList[1], {id:5})).toBeTruthy();
          
      });
      
      
      
  });

  
});

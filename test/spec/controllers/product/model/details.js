'use strict';

xdescribe('Controller: ProductModelDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeApp'));

  var ProductModelDetailsCtrl,
      ctrl,
      Ctrl,
      $http,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $injector) {
      $http = $injector.get('$httpBackend');
      Ctrl = $controller;
    scope = {$on:function(){
        
    }};
    
  }));

  describe('Phase: Initialize', function(){
      
      it('should peform a GET request and initialize the resource', function(){
          $http.expectGET('model/4').respond({id:4, name:'Tony', model:'X-1'})
          ctrl = Ctrl('ProductModelDetailsCtrl', {
              $scope:scope,
              $routeParams:{id:4}
          });
          expect(scope.hasOwnProperty('model')).toBeTruthy();
          expect(angular.equals(scope.model, {})).toBeTruthy();
          $http.flush();
          expect(scope.model.hasOwnProperty('model')).toBeTruthy();
          expect(scope.model.model).toEqual('X-1');
          expect(scope.model.hasOwnProperty('id')).toBeTruthy();
          expect(scope.model.id).toEqual(4);
          expect(scope.model.hasOwnProperty('name')).toBeTruthy();
          expect(scope.model.name).toEqual('Tony');
      });
      
  });
  
  describe('Phase: Post Initialize', function(){
      
      beforeEach(function(){
      	$http.whenGET('/api/v1/customer_user').respond({});
          $http.expectGET('model/4').respond({id:4, name:'Tony', model:'X-1'});
          ctrl = Ctrl('ProductModelDetailsCtrl', {
              $scope:scope,
              $routeParams:{id:4}
          });
          $http.flush();
      });
      
      describe('Updating', function(){
          
          it('should perform a POST request', function(){
              //Preupdate
              expect(scope.hasOwnProperty('model')).toBeTruthy();
              expect(scope.model.hasOwnProperty('model')).toBeTruthy();
              expect(scope.model.model).toEqual('X-1');
              expect(scope.model.hasOwnProperty('id')).toBeTruthy();
              expect(scope.model.id).toEqual(4);
              expect(scope.model.hasOwnProperty('name')).toBeTruthy();
              expect(scope.model.name).toEqual('Tony');
              
              //Set new data
              scope.model.name = 'Charlie';
              expect(scope.model.hasOwnProperty('name')).toBeTruthy();
              expect(scope.model.name).toEqual('Charlie');
              
              //Update and post
              $http.expectPOST('model/4').respond({id:4, name:'Charlie', model:'X-1'});
              scope.update();
              $http.flush();
              expect(angular.equals(scope.model, {id:4, name:'Charlie', model:'X-1'})).toBeTruthy();
              
          });
      });
      
      describe('Removing', function(){
          
          it('should perform a DELETE request', function(){
              //Preupdate
              expect(scope.hasOwnProperty('model')).toBeTruthy();
              expect(scope.model.hasOwnProperty('model')).toBeTruthy();
              expect(scope.model.model).toEqual('X-1');
              expect(scope.model.hasOwnProperty('id')).toBeTruthy();
              expect(scope.model.id).toEqual(4);
              expect(scope.model.hasOwnProperty('name')).toBeTruthy();
              expect(scope.model.name).toEqual('Tony');
              
             
              
              //Remove and post
              $http.expectDELETE('model/4').respond(201);
              scope.remove();
              $http.flush();
          });
      });
      
      
  });
});

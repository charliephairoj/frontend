'use strict';

xdescribe('Controller: ProductModelAddCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeApp'));

  var ProductModelAddCtrl,
      ctrl,
      scope,
      $http;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $injector) {
      $http = $injector.get('$httpBackend');
      scope = {};
      ctrl = $controller('ProductModelAddCtrl', {
        $scope: scope
      });
  }));

  describe('Phase: Initializing', function(){
      
      it('should initialize the model on the scope', function(){
          expect(scope.hasOwnProperty('model')).toBeTruthy();
          expect(angular.equals(scope.model, {})).toBeTruthy(); 
      });
      
  });
  
  describe('Phase: Saving', function(){
      
      it('should peform a POST request', function(){
          $http.expectPOST('model').respond({id:8, name:'Valjean', model:'Z-11'});
          scope.model.name = 'Valjean';
          scope.model.model = 'Z-11';
          scope.save();
          $http.flush();
          expect(scope.model.hasOwnProperty('id')).toBeTruthy();
          expect(scope.model.id).toEqual(8);
      });
  });
  
});


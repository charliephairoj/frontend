'use strict';

xdescribe('Controller: ProductUpholsteryAddCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeApp'));

  var ProductUpholsteryAddCtrl,
      $http,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $injector) {
      window.localStorage.clear();
      $http = $injector.get('$httpBackend');
    scope = {};
    $http.expectGET('model').respond([{id:2, model:'Z-1'}]);
    $http.expectGET('configuration').respond([{id:9, configuraton:'Chair'}]);
    ProductUpholsteryAddCtrl = $controller('ProductUpholsteryAddCtrl', {
      $scope: scope
    });
  }));
  
  describe('Phase: Saving', function(){
      it('should perform a POST request', function(){
          $http.expectPOST('upholstery').respond({id:8});
          expect(scope.upholstery.hasOwnProperty('id')).toBeFalsy();
          scope.save();
          $http.flush();
          expect(scope.upholstery.hasOwnProperty('id')).toBeTruthy();
          expect(scope.upholstery.id).toEqual(8);
      });
  });

  
});

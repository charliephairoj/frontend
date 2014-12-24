'use strict';

xdescribe('Controller: SupplyLumberViewCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeApp'));

  var controller,
      ctrl,
      http,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $injector) {
      http = $injector.get('$httpBackend');
      scope = {};
      controller = $controller;
  }));

  describe('Phase: Initialization', function(){
      
      it('should request a list of suppliers', function(){
          ctrl = controller('SupplyLumberViewCtrl', {
              $scope: scope
          });
          http.expectGET('supplier').respond([{id:3, name:'Wood World'}, {id:8, name:'Saithong Plywood'}]);
          http.flush();
          expect($scope.supplierList.length).toEqual(2); 
      });
  });
  
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $injector) {
      scope = {};
      controller = $controller;
      ctrl = controller('SupplyLumberViewCtrl', {
          $scope: scope
      });
  }));
  
  describe('Phase: Save', function(){
      
      it('should make a POST request', function(){
          http.expectPOST('supplier').respond({});
          http.flush();
          expect($scope.supplierList.length).toEqual(2); 
      });
  });
});

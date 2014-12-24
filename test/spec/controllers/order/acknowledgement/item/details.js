'use strict';

xdescribe('Controller: OrderAcknowledgementItemDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeApp'));

  var controller,
      ctrl,
      http,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $injector) {
    scope = {};
    http = $injector.get('$httpBackend');
    controller = $controller;
  }));
  
  describe('Phase: Initialize', function(){
      
      it('should load the item', function(){
          http.expectGET('fabric').respond([]);
          http.expectGET('acknowledgement/item/306').respond();
          
          ctrl = controller('OrderAcknowledgementItemDetailsCtrl', {
              $scope: scope,
              $routeParams:{id:306}
          });
      });
  });

  
});

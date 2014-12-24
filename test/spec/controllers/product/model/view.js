'use strict';

xdescribe('Controller: ProductModelViewCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeApp'));

  var ProductModelViewCtrl,
      $http,
      $timeout,
      ctrl,
      Ctrl,
      scope,
      model;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $injector, Model) {
    scope = {$on:function(eName, callback){
        //callback();
    }};
    Ctrl = $controller;
    $http = $injector.get('$httpBackend');
    $timeout = $injector.get('$timeout');
    model = Model;
   
  }));
  
  describe('Phase: Initializing Controller', function(){
      
      it('should perform poll $get requests and stop', function(){
          $http.expectGET('model').respond([{id:1}, {id:2}]);
          ctrl = Ctrl('ProductModelViewCtrl', {
              $scope: scope
          });
          $http.flush();
          var d = new Date();
          model.$$last_checked = d;
          $http.expectGET('model?last_modified='+d.toISOString()).respond([]);
          $timeout.flush();
          model.stopPolling();
          $http.flush();
          //$timeout.flush();
      });
      
  });

  
});

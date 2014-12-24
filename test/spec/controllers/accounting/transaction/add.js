'use strict';

xdescribe('Controller: AccountingTransactionAddCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeApp'));

  var AccountingTransactionAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    AccountingTransactionAddCtrl = $controller('AccountingTransactionAddCtrl', {
      $scope: scope
    });
  }));

  
});

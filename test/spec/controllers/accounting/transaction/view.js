'use strict';

xdescribe('Controller: AccountingTransactionViewCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeApp'));

  var AccountingTransactionViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    AccountingTransactionViewCtrl = $controller('AccountingTransactionViewCtrl', {
      $scope: scope
    });
  }));

  
});

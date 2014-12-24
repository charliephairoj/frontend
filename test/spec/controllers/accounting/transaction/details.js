'use strict';

xdescribe('Controller: AccountingTransactionDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeApp'));

  var AccountingTransactionDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    AccountingTransactionDetailsCtrl = $controller('AccountingTransactionDetailsCtrl', {
      $scope: scope
    });
  }));

  
});

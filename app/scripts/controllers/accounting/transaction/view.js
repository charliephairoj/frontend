
angular.module('employeeApp')
.controller('AccountingTransactionViewCtrl', ['$scope', 'Transaction', function ($scope, Transaction) {
	$scope.transactionList = Transaction.poll().query();
    
	$scope.$on('$destroy', function () {
		Transaction.stopPolling(); 
	});
}]);

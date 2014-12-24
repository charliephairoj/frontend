
angular.module('employeeApp')
.controller('AccountingTransactionAddCtrl', ['$scope', 'Transaction', 'Notification', '$location', 'Contact',
function ($scope, Transaction, Notification, $location, Contact) {
	$scope.transaction = new Transaction();
	$scope.contactList = Contact.query();
	$scope.save = function () {
		Notification.display('Saving Transaction...', false);
		$scope.transaction.$save(function () {
			Notification.display('Transaction Saved');
			$location.path('/accounting/transaction');
		});
	};
}]);

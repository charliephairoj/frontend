
angular.module('employeeApp')
.controller('OrderShippingDetailsCtrl', ['$scope', 'Shipping', '$routeParams', 'Notification', '$http',
function ($scope, Shipping, $routeParams, Notification, $http) {
	Notification.display('Loading Shipping Manifest...', false);
	$scope.showCal = false;
	$scope.shipping = Shipping.get({'id': $routeParams.id, pdf: true}, function () {
		Notification.display('Shipping Manifest Loaded');
	});

	$scope.updateDeliveryDate = function () {
		$scope.showCal = false;
	};

	$scope.getPDF = function () {
		Notification.display('Retrieving PDF...', false);
		if ($scope.shipping.pdf.url) {
			window.open($scope.shipping.pdf.url);
		}
	};

	$scope.save = function () {
		Notification.display('Saving Shipping Manifest...', false);
		$scope.shipping.$update(function () {
			Notification.display('Shipping Manifest ' + $scope.shipping.id + ' Saved');
		});
	};
}]);

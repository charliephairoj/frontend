
angular.module('employeeApp')
.controller('OrderShippingDetailsCtrl', ['$scope', 'Shipping', '$routeParams', '$mdToast', '$http',
function ($scope, Shipping, $routeParams, $mdToast, $http) {
	$mdToast.show($mdToast
		.simple()
		.content('Loading Shipping Manifest...')
		.hideDelay(0));
	$scope.showCal = false;
	$scope.shipping = Shipping.get({'id': $routeParams.id, pdf: true}, function () {
		$mdToast.hide();
	});

	$scope.updateDeliveryDate = function () {
		$scope.showCal = false;
	};

	$scope.getPDF = function () {
		$mdToast.show($mdToast
			.simple()
			.content('Retrieving PDF...'));
		if ($scope.shipping.pdf.url) {
			window.open($scope.shipping.pdf.url);
		}
	};

	$scope.save = function () {
		$mdToast.show($mdToast
			.simple()
			.content('Saving Shipping Manifest...')
			.hideDelay(0));
		$scope.shipping.$update(function () {
			$mdToast.show($mdToast
				.simple()
				.content('Shipping manifest ' + $scope.shipping.id + ' saved')
				.hideDelay(0));
		});
	};
}]);

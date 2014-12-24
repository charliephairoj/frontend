
angular.module('employeeApp')
.controller('OrderShippingDeliveryCtrl', ['$scope', 'Delivery', function ($scope, Delivery) {
    $scope.deliveryList = Delivery.query();
}]);

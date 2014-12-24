
angular.module('employeeApp')
.controller('SupplyFoamViewCtrl', ['$scope', 'Foam', function ($scope, Foam) {
    $scope.foamList = Foam.query();
    
}]);

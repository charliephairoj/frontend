
angular.module('employeeApp')
.controller('ProductInventoryCtrl', ['$scope', 'AcknowledgementItem',
function ($scope, AcknowledgementItem) {
           
    $scope.itemList = AcknowledgementItem.poll().query({status: "inventory"});
    $scope.showAddInventory = false;
    
    $scope.addInventory = function (product) {
        $scope.item = new AcknowledgementItem();
        angular.extend($scope.item, JSON.parse(JSON.stringify(product)));
        if (product.hasOwnProperty('id')) {
            $scope.item.product = {id: product.id};
        }
        delete $scope.item.id;
        
        $scope.item.status = "INVENTORY";
       
        $scope.item.$save(function () {
            $scope.itemList.push(angular.copy($scope.item));
        });
    };
    
   
    
    
    $scope.$on('$destroy', function () {
        $scope.AcknowledgementItem.stopPolling(); 
    });
}]);

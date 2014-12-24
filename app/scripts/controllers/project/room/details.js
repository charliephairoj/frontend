
angular.module('employeeApp')
.controller('ProjectRoomDetailsCtrl', ['$scope', 'Room', '$routeParams', 'Notification', 
function ($scope, Room, $routeParams, Notification) {
    
    $scope.room = Room.get({id: $routeParams.id});
    $scope.gridOptions = {
        data: 'room.items',
        columnDefs: [{field: 'description', displayName: 'Description'},
                     {field: 'status', displayName: 'Status'},
                     {field: 'delivery_date', displayName: 'Delivery Date', filter: 'date:"MMMM d, yyyy"'},
                     {field: 'schematic',
                      displayName: 'Schematic',
                      cellTemplate: '<div file-handler><div>'}]
        
    };
    
    $scope.addProduct = function (product) {
        //Notification of product add to which room
        Notification.display('Adding ' + product.description + ' to ' + $scope.room.description, false);
        
        //Create item and set details
        var item = new ProjectItem();
        item.product = product;
        item.type = "product";
        item.room = {id: $scope.room.id};
        item.reference = $scope.room.reference + ($scope.room.items.length + 1);
        
        //Save the Item to the server
        item.$save(function () {
            Notification.display(item.description + ' added to ' + $scope.room.description);
            //Add item to current room on display
            $scope.room.items.push(item);    
        });
    };

}]);
